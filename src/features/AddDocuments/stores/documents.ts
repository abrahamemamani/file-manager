import { firebase } from "@/vendors/firebase/config";
import { collection, getDocs, getFirestore } from "firebase/firestore";
import { create } from "zustand";
import * as R from "ramda";
import { IDocument } from "@/types/Document.type";

export interface DocumentsStore {
  data: {
    [key: string]: IDocument;
  };
  fetch: () => void;
  add: (doc: IDocument) => void;
}

const db = getFirestore(firebase);

export const useDocumentStore = create<DocumentsStore>((set, get) => ({
  data: {},
  fetch: async () => {
    const response = await getDocs(collection(db, "documents"));
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
}));
