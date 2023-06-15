import { firebase } from '@/vendors/firebase/config';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { create } from 'zustand'

export interface DocumentsStore {
  data: {
    [key: string]: Document;
  };
  fetch: () => void;
  add: (doc: Document) => void;
}

export type Document = {
  id: string;
  name: string;
  extension: string | null;
  children: Document[];
  created_at: unknown;
  updated_at: unknown;
}

const db = getFirestore(firebase);

export const useDocumentStore = create<DocumentsStore>((set, get) => ({
  data: {},
  fetch: async () => {
    const response = await getDocs(collection(db, "documents"));
    let data = {};
    response?.forEach((document) => {
      data = {
        ...data,
        [document.id]: {
          id: document.id,
          ...document.data(),
        },
      };
    });
    set({ data });
  },
  add: (document: Document) => set({
    data: {
      ...get().data,
      [document.id]: document,
    }
  }),
}));
