import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

// Layout component
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 text-white p-4">
        <div className="container mx-auto">
          <h1 className="text-2xl">Job App</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Job App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
