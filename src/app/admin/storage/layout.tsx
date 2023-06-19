import { AddDocuments } from "@/features/AddDocuments";

export default function StorageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-secondary-gray text-2xl font-bold mb-2">
            My Storage
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
