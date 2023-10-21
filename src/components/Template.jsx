import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Inter } from "next/font/google";
import Footer from "./Footer";
const inter = Inter({ subsets: ["latin"] });

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/router";
import Loading from "./Loading";
function Template({ children }) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) => url === router.asPath && setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    <main
      className={`flex min-h-screen w-full flex-col lg:items-center  px-4  pt-5 lg:px-32 duration-150  ${inter.className}`}
    >
      <NextUIProvider>
        <Header />
        {loading ? (
          <div className="w-full h-[80vh] flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          children
        )}
        <Footer />
      </NextUIProvider>
    </main>
  );
}

export default Template;
