import React from "react";
import Header from "./Header";
import { Inter } from "next/font/google";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

import { NextUIProvider } from "@nextui-org/react";
function Template({ children }) {
  return (
    <main
      className={`flex min-h-screen w-full flex-col lg:items-center  px-4  pt-5 lg:px-32 duration-150  ${inter.className}`}
    >
      <NextUIProvider>
        <Header />
        {children}
        <Footer />
      </NextUIProvider>
    </main>
  );
}

export default Template;
