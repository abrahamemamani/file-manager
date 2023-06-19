"use client";
import * as R from "ramda";
import { useDocumentStore } from "@/features/AddDocuments/stores/documents";
import { transformObjectToArray } from "@/utils/transformObjectToArray";
import React, { useEffect } from "react";
import { DocumentIcon, FolderIcon } from "@heroicons/react/24/outline";
import { Card, Grid } from "@/components";
import { IDocument } from "@/types/Document.type";

export default function Page() {
  const { data, fetch } = useDocumentStore((state) => state);
  const documents = transformObjectToArray(data) as IDocument[];

  useEffect(() => {
    fetch();
  }, [fetch]);

  const renderItems = documents.map((item) => (
    <Grid.Item key={item.id}>
      <Card data={item}>
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
