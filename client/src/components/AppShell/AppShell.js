import { propertiesParser } from "config/parser";
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";

function AppShell({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="px-8 mx-auto max-w-7xl sm:px-6 bg-white min-h-screen">
          <div className="pt-4">{children}</div>
        </div>
      </main>
    </>
  );
}

export default AppShell;
