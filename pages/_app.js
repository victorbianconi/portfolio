import Light from "@/components/light";
import Navigation from "@/components/navigation";
import "@/styles/globals.css";
import "@/styles/image-container.css";
import "@/styles/main.css";
import "@/styles/movie-card.css";
import "@/styles/searchbar.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }) {
  const path = usePathname();

  useEffect(() => {
    const body = document.querySelector("body");

    if (router.pathname?.includes("/projects/")) {
      body.classList.add("body--black");
    } else {
      body.classList.remove("body--black");
    }
  }, [path]);

  return (
    <main className={montserrat.className}>
      <QueryClientProvider client={queryClient}>
        <Light>
          <Navigation>
            <AnimatePresence mode="wait" initial={false}>
              <Component {...pageProps} key={router.asPath} />
            </AnimatePresence>
          </Navigation>
        </Light>
      </QueryClientProvider>
    </main>
  );
}
