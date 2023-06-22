export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-primary-gray dark:text-secondary-gray text-2xl font-bold mb-2">
            Dashboard
          </h2>
        </div>
      </header>
      <section>{children}</section>
    </>
  );
}
