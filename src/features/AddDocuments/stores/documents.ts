import { firebase } from "@/vendors/firebase/config";
import {
  DocumentData,
  QuerySnapshot,
  collection,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { create } from "zustand";
import * as R from "ramda";
import { IDocument } from "@/types/Document.type";

export interface DocumentsStore {
  data: {
    [key: string]: IDocument;
  };
  currentFolder?: IDocument;
  fetch: (id: string | null) => void;
  add: (doc: IDocument) => void;
  setCurrentFolder: (folder: IDocument | undefined) => void;
  fetchRecentFiles: () => void;
  recentFiles: {
    [key: string]: IDocument;
  };
  updateState: (response: QuerySnapshot<DocumentData>, prop: string) => void;
}

const db = getFirestore(firebase);
const documentsRef = collection(db, "documents");

export const useDocumentStore = create<DocumentsStore>((set, get) => ({
  data: {},
  recentFiles: {},
  fetch: async (id) => {
    const q = query(documentsRef, where("parent_id", "==", id));
    const response = await getDocs(q);
    get().updateState(response, "data");
  },
  add: (document: IDocument) => {
    set({
      data: {
        ...get().data,
        [document.id]: document,
      },
    });
  },
  setCurrentFolder: (folder) => {
    set({ currentFolder: folder, data: {} });
  },
  fetchRecentFiles: async () => {
    const q = query(documentsRef, orderBy("created_at", "asc"), limit(5));
    const response = await getDocs(q);
    get().updateState(response, "recentFiles");
  },
  updateState: (response: QuerySnapshot<DocumentData>, prop: string) => {
    let data = {};
    if (!R.isEmpty(response)) {
      response.forEach((document) => {
        data = {
          ...data,
          [document.id]: {
            id: document.id,
            ...document.data(),
          },
        };
      });
      set({
        [prop]: data,
      });
    }
  },
}));
