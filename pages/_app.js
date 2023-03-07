import Footer from "@/components/footer";
import Light from "@/components/light";
import Navigation from "@/components/navigation";
import "@/styles/globals.css";
import "@/styles/main.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps, router }) {
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
