import { useEffect, useState } from "react";
import "../styles/globals.css";
import "aos/dist/aos.css";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <Component {...pageProps} theme={theme} setTheme={setTheme} />
      <Analytics mode={process.env.NODE_ENV} />
    </>
  );
}

export default MyApp;
