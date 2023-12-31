import * as R from "ramda";
import { firebase } from "@/vendors/firebase/config";
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getFirestore,
  serverTimestamp,
} from "firebase/firestore";
import { useDocumentStore } from "../stores/documents";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { Document } from "@/models/Document";
import { FIREBASE_PATH_STORAGE } from "@/vendors/firebase/config";
import { nanoid } from "nanoid";
import path from "path";
import { IDocument } from "@/types/Document.type";
import { useRouter } from "next/navigation";

const db = getFirestore(firebase);
const storage = getStorage(firebase);

export interface FolderCreationValues {
  name: string;
}

export default function useDocument() {
  const { add, setCurrentFolder } = useDocumentStore((state) => state);
  const router = useRouter();

  const getDocument = async (id: string) => {
    const docRef = doc(db, "documents", id);
    try {
      return await getDoc(docRef);
    } catch (err) {
      console.error(err);
    }
  };

  const addDocumentToState = (id: string) => {
    getDocument(id).then((docSnap) => {
      if (docSnap?.exists()) {
        const document: IDocument = {
          id,
          ...(docSnap.data() as Omit<IDocument, "id">),
        };
        add(document);
      }
    });
  };

  const storeFile = (document: IDocument, key: string, file: File) => {
    const doc = structuredClone(document);
    const storageRef = ref(storage, `${doc.name}-${key}`);

    uploadBytes(storageRef, file).then(() => {
      // const { timeCreated, updated } = snapshot.metadata;
      // doc.created_at = timeCreated;
      // doc.updated_at = updated;
      saveDocument(doc);
    });
  };

  const saveDocument = async (doc: IDocument) => {
    try {
      const docRef = await addDoc(
        collection(db, "documents"),
        R.omit(["id"], doc)
      );
      addDocumentToState(docRef.id);
    } catch (e) {
      console.error(e);
    }
  };

  const uploadFile = (e: React.ChangeEvent, parent_id?: string) => {
    const target = e.target as HTMLInputElement;
    const files: FileList | null = target.files;

    if (!R.empty(files) && R.isNotNil(files)) {
      const file = files[0];
      const key = nanoid();
      const { name, ext } = path.parse(file.name);

      const doc = new Document({
        name,
        extension: ext,
        file: `${FIREBASE_PATH_STORAGE}${name}-${key}`,
        parent_id: parent_id || null,
        created_at: serverTimestamp(),
        updated_at: serverTimestamp(),
      });

      storeFile(doc, key, file);
    }
  };

  const createFolder = ({ name }: FolderCreationValues, parent_id?: string) => {
    const doc = new Document({
      name,
      extension: null,
      file: null,
      parent_id: parent_id || null,
      created_at: serverTimestamp(),
      updated_at: serverTimestamp(),
    });
    saveDocument(doc);
  };

  const openFolder = (document: IDocument) => {
    if (!document.extension) {
      setCurrentFolder(document);
      router.push(`admin/storage/${document.id}`);
    }
  };

  return {
    saveDocument,
    storeFile,
    createFolder,
    uploadFile,
    openFolder,
  };
}
