"use client";
import React from "react";
import { Button, Dropdown } from "flowbite-react";
import { FolderPlusIcon, DocumentPlusIcon } from "@heroicons/react/24/outline";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
import { firebase } from "@/vendors/firebase/config";

const db = getFirestore(firebase);

export default function Home() {
  const addUser = async () => {
    console.log("adding user");
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  };

  return (
    <main>
      <Button onClick={addUser}>Add new user</Button>
      <Button onClick={getUsers}>Get all users</Button>
      <Dropdown label="Add">
        <Dropdown.Item
          icon={() => <DocumentPlusIcon className="ml-0 h-6 w-6 mr-2" />}
        >
          Upload files
        </Dropdown.Item>
        <Dropdown.Item
          icon={() => <FolderPlusIcon className="ml-0 h-6 w-6 mr-2" />}
        >
          Create folder
        </Dropdown.Item>
      </Dropdown>
    </main>
  );
}
