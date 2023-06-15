"use client";
import { FC } from "react";
import { Button, Modal, Label, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { FolderIcon } from "@heroicons/react/24/outline";

export interface CreateFolderModalProps {
  show: boolean;
  onClose: () => void;
  onSubmit: (values: FormValues) => Promise<void>;
}

type FormValues = {
  name: string;
};

export const CreateFolderModal: FC<CreateFolderModalProps> = ({
  show = false,
  onClose,
  onSubmit,
}) => {
  const { register, handleSubmit, resetField } = useForm<FormValues>();

  const onSubmitForm = (values: FormValues) => {
    onSubmit(values);
    resetField("name");
    onClose();
  };

  return (
    <Modal show={show} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Modal.Header>Create folder</Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
            <div className="mb-2 block">
              <Label htmlFor="name" value="Edit name:" />
            </div>
            <TextInput
              icon={() => (
                <FolderIcon className="h-5 text-gray-500"></FolderIcon>
              )}
              id="name"
              placeholder="Type your title"
              required
              type="text"
              {...register("name")}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button type="submit" className="bg-main">
            Create
          </Button>
          <Button color="gray" onClick={onClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};
