"use client";

import {
  DocumentPlusIcon,
  FolderPlusIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import { Dropdown as DefaultDropdown } from "flowbite-react";
import useModal from "./hooks/useModal";
import { CreateFolderModal } from "./CreateFolderModal";
import useDocument from "./hooks/useDocument";

export default function AddDocuments() {
  const { open, handleOpen, handleClose } = useModal();
  const { createFolder } = useDocument();

  return (
    <div className="bg-main rounded-lg">
      <DefaultDropdown
        arrowIcon={false}
        label={
          <div className="flex items-center">
            <PlusCircleIcon className="h-6 mr-3" />
            <span>Add</span>
          </div>
        }
      >
        <DefaultDropdown.Item onClick={() => console.log("Upload file")}>
          <DocumentPlusIcon className="h-5 mr-3" />
          Upload file
        </DefaultDropdown.Item>
        <DefaultDropdown.Item onClick={handleOpen}>
          <FolderPlusIcon className="h-5 mr-3" />
          Create folder
        </DefaultDropdown.Item>
      </DefaultDropdown>
      <CreateFolderModal
        show={open}
        onClose={handleClose}
        onSubmit={({ name }) => createFolder({ name })}
      />
    </div>
  );
}
