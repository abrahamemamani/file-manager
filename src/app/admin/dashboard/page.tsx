"use client";
import { Card, Grid } from "@/components";
import {
  DEFAULT_FILE_ICON,
  FOLDER_ICON_URL,
  ICON_BY_EXTENSIONS,
} from "@/constants";
import useDocument from "@/features/AddDocuments/hooks/useDocument";
import { useDocumentStore } from "@/features/AddDocuments/stores/documents";
import { useUserStore } from "@/features/Profile/stores/user";
import { IDocument } from "@/types/Document.type";
import { transformObjectToArray } from "@/utils/transformObjectToArray";
import Image from "next/image";
import { useEffect } from "react";

export default function Page() {
  const { user } = useUserStore((state) => state);
  const { recentFiles, fetchRecentFiles } = useDocumentStore((state) => state);
  const documents = transformObjectToArray(recentFiles) as IDocument[];
  const { openFolder } = useDocument();

  useEffect(() => {
    fetchRecentFiles();
  }, [fetchRecentFiles]);

  const renderItems = documents.map((item) => (
    <Grid.Item key={item.id}>
      <Card onClick={() => openFolder(item)} data={item}>
        {({ name, extension }) => (
          <>
            <Image
              src={
                extension
                  ? ICON_BY_EXTENSIONS[extension] || DEFAULT_FILE_ICON
                  : FOLDER_ICON_URL
              }
              alt="Image of document"
              height={70}
              width={70}
            />
            <Card.Title value={`${name}${extension || ""}`} />
          </>
        )}
      </Card>
    </Grid.Item>
  ));

  return (
    <div>
      <div className="bg-gray-50 dark:bg-primary-dark py-8 px-5 sm:py-6 sm:px-10 rounded-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center">
          <div className="text-primary-gray dark:text-white text-center sm:text-left">
            <h2 className="text-3xl sm:text-3xl md:text-5xl font-bold mb-3">
              Welcome back
              <b className="text-main">
                {user?.firstName && `, ${user.firstName}`}!
              </b>
            </h2>
            <h3 className="text-xl sm:text-xl md:text-2xl font-light">
              Manage <span className="text-indigo-500">all your files</span> in{" "}
              <span className="text-indigo-500">one place</span>
            </h3>
          </div>
          <div>
            <div className="flex justify-center sm:justify-end">
              <Image
                src="https://res.cloudinary.com/dyssylzmz/image/upload/v1687301507/samples/vectors/people_bdft4o.svg"
                height={300}
                width={300}
                alt="Image of people working"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-primary-gray dark:text-secondary-gray text-2xl font-bold my-6">
          Recent documents
        </h2>
        <Grid className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {renderItems}
        </Grid>
      </div>
    </div>
  );
}
