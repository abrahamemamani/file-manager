import { firebase } from "@/vendors/firebase/config";
import {
  collection,
  getDocs,
  getFirestore,
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
}

const db = getFirestore(firebase);

export const useDocumentStore = create<DocumentsStore>((set, get) => ({
  data: {},
  fetch: async (id) => {
    let data = {};
    const q = query(collection(db, "documents"), where("parent_id", "==", id));
    const response = await getDocs(q);

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
      set({ data });
    }
  },
  add: (document: IDocument) =>
    set({
      data: {
        ...get().data,
        [document.id]: document,
      },
    }),
  setCurrentFolder: (folder) => {
    set({ currentFolder: folder, data: {} });
  },
}));
