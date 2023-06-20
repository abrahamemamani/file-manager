"use client";
import { AddDocuments } from "@/features/AddDocuments";
import { useDocumentStore } from "@/features/AddDocuments/stores/documents";

export default function StorageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { currentFolder } = useDocumentStore((state) => state);
  const title = currentFolder?.name || "My Storage";

  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-secondary-gray text-2xl font-bold mb-2">
            {title}
          </h2>
        </div>
        <div>
          <AddDocuments />
        </div>
      </header>
      <section>{children}</section>
    </>
  );
}
