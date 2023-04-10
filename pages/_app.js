import Light from "@/components/light";
import Navigation from "@/components/navigation";
import "@/styles/globals.css";
import "@/styles/image-container.css";
import "@/styles/main.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps, router }) {
  const path = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");

    if (router.pathname?.includes("bramosa")) {
      body.classList.add("body--black");
    } else {
      body.classList.remove("body--black");
    }
  }, [path]);

  return (
    <main className={montserrat.className}>
      <Light>
        <Navigation>
          <AnimatePresence mode="wait" initial={false}>
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </Navigation>
      </Light>
    </main>
  );
}
