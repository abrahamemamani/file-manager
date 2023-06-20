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
import { useDocumentStore } from "./stores/documents";

export const AddDocuments = () => {
  const { open, handleOpen, handleClose } = useModal();
  const { uploadFile, createFolder } = useDocument();
  const { currentFolder } = useDocumentStore((state) => state);

  const supportedFormats = [
    "application/pdf",
    ".pdf",
    ".doc",
    ".docx",
    "image/jpeg",
    ".jpeg",
    "jpg",
    "image/png",
    ".png",
  ];

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
        <label className="flex items-center w-full" htmlFor="upload-file">
          <DefaultDropdown.Item className="w-full">
            <DocumentPlusIcon className="h-5 mr-3" />
            Upload file
            <input
              id="upload-file"
              className="hidden"
              type="file"
              accept={supportedFormats.join(",")}
              onChange={(e) => uploadFile(e, currentFolder?.id)}
            />
          </DefaultDropdown.Item>
        </label>
        <DefaultDropdown.Item onClick={handleOpen}>
          <FolderPlusIcon className="h-5 mr-3" />
          Create folder
        </DefaultDropdown.Item>
      </DefaultDropdown>
      <CreateFolderModal
        show={open}
        onClose={handleClose}
        onSubmit={(values) => createFolder(values, currentFolder?.id)}
      />
    </div>
  );
};
