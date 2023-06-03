import React from "react";

type MainLayoutProps = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <main className="main_layout">
      <div>{children}</div>
    </main>
  );
};

export default MainLayout;
