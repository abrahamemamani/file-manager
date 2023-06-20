"use client";
import React, { useEffect } from "react";
import * as R from "ramda";
import { useDocumentStore } from "@/features/AddDocuments/stores/documents";
import { transformObjectToArray } from "@/utils/transformObjectToArray";
import { DocumentIcon, FolderIcon } from "@heroicons/react/24/outline";
import { Card, Grid } from "@/components";
import { IDocument } from "@/types/Document.type";
import { useRouter } from "next/navigation";

interface Params {
  id: string;
}

export default function Page({ params }: { params: Params }) {
  const { data, fetch, setCurrentFolder } = useDocumentStore((state) => state);
  const documents = transformObjectToArray(data) as IDocument[];
  const router = useRouter();

  useEffect(() => {
    fetch(params.id ? params.id[0] : null);
    if (R.isEmpty(params)) setCurrentFolder(undefined);
  }, [fetch, params, setCurrentFolder]);

  const onClick = (document: IDocument) => {
    if (!document.extension) {
      setCurrentFolder(document);
      router.push(`admin/storage/${document.id}`);
    }
  };

  const renderItems = documents.map((item) => (
    <Grid.Item key={item.id}>
      <Card onClick={() => onClick(item)} data={item}>
        {({ name, extension }) => (
          <>
            <Card.Icon
              icon={R.isNotNil(extension) ? DocumentIcon : FolderIcon}
            />
            <Card.Title value={name} />
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
