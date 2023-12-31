import { Cairo } from "next/font/google";
import { NextSeo } from "next-seo";
import Header from "components/Header";
import Loader from "components/Loader";
import Hero from "components/Hero";
import Skills from "components/Skills";
import Works from "components/Works";
import Contact from "components/Contact";
import Footer from "components/Footer";

const cairo = Cairo({ subsets: ["latin"] });

export default function Home({ theme, setTheme }) {
  return (
    <>
      <NextSeo title="El-Sayed Chelsea | .NET Developer" />
      <main className="font-mono">
        <Loader path={"El-Sayed Chelsea I'm A BackEnd .NET Developer"} />
        <Header theme={theme} setTheme={setTheme} />
        <Hero />
        <Skills />
        <Works />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
