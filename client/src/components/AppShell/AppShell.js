import { propertiesParser } from "config/parser";
import React, { useState, useEffect } from "react";
import Header from "../Header/Header";

function AppShell({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="px-4 mx-auto max-w-7xl sm:px-6">
          <div className="py-4  md:justify-start md:space-x-10">{children}</div>
        </div>
      </main>
    </>
  );
}

export default AppShell;
