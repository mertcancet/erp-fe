import Sidebar from "@/components/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-page-bg text-navy-text font-sans">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-screen min-w-0 overflow-x-hidden">
        {/* Page Content */}
        {children}
      </main>
    </div>
  );
}
