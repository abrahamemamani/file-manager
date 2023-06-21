"use client";
import React, { useEffect } from "react";
import * as R from "ramda";
import { useDocumentStore } from "@/features/AddDocuments/stores/documents";
import { transformObjectToArray } from "@/utils/transformObjectToArray";
import { Card, Grid } from "@/components";
import { IDocument } from "@/types/Document.type";
import Image from "next/image";
import {
  DEFAULT_FILE_ICON,
  FOLDER_ICON_URL,
  ICON_BY_EXTENSIONS,
} from "@/constants";
import useDocument from "@/features/AddDocuments/hooks/useDocument";

interface Params {
  id: string;
}

export default function Page({ params }: { params: Params }) {
  const { data, fetch, setCurrentFolder } = useDocumentStore((state) => state);
  const documents = transformObjectToArray(data) as IDocument[];
  const { openFolder } = useDocument();

  useEffect(() => {
    fetch(params.id ? params.id[0] : null);
    if (R.isEmpty(params)) setCurrentFolder(undefined);
  }, [fetch, params, setCurrentFolder]);

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
    <Grid className="grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
      {renderItems}
    </Grid>
  );
}
