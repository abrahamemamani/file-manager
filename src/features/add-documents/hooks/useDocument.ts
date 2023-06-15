import { firebase } from "@/vendors/firebase/config";
import { Timestamp, addDoc, collection, doc, getDoc, getFirestore } from "firebase/firestore";
import { Document, useDocumentStore } from "../stores/documents";

interface NewFolder {
  name: string;
}

export default function useDocument() {
  const db = getFirestore(firebase);
  const { add } = useDocumentStore((state) => state);

  const createFolder = async ({ name }: NewFolder) => {
    try {
      const docRef = await addDoc(collection(db, 'documents'), {
        name,
        children: [],
        extension: null,
        file: null,
        created_at: Timestamp.now(),
        updated_at: Timestamp.now(),
      });

      getDocument(docRef.id);
    }
    catch(err) {
      console.error(err);
    }
  }

  const getDocument = async (id: string) => {
    const docRef = doc(db, "documents", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const document: Document = {
        id,
        ...(docSnap.data() as Omit<Document, 'id'>),
      };
      add(document);
    }
  }

  // const getFolders = async () => {
  //   const querySnapshot = await getDocs(collection(db, "documents"));
  //   return querySnapshot.docs;

  //   querySnapshot.forEach((doc) => {
  //     console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
  //   });
  // }

  return {
    createFolder,
    // getFolders,
  };
}
