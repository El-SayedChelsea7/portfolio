import { useState } from "react";
import TypeWriter from "typewriter-effect";
import { useCookies } from "react-cookie";

const Loader = (props) => {
  const { path } = props;
  let [hidden, setHidden] = useState(false);
  const [cookie, setCookie] = useCookies(["intro"]);

  setTimeout(() => {
    setHidden(true);
    setCookie("intro", true, {
      maxAge: 27000, // 6h
    });
  }, 33000);

  if (cookie.intro) {
    return "";
  }
  return (
    <section
      className={`${
        hidden ? "hidden" : "flex"
      } h-screen items-center justify-center fixed top-0 left-0 z-50 w-full bg-background dark:bg-background-dark`}
    >
      <div className="container">
        <div
          className="h-96 w-full transform rounded-lg bg-black transition-all duration-700 font-mono text-sm"
          dir="ltr"
        >
          <div className="bg-dark flex h-6 w-full items-center gap-2 rounded-t-lg px-4">
            <div className="bg-[#f34f4c] h-3 w-3 rounded-full" />
            <div className="bg-[#d3ac1e] h-3 w-3 rounded-full" />
            <div className="bg-[#a3e635] h-3 w-3 rounded-full" />
          </div>
          <div className="mt-0 flex items-center">
            <div className="bg-primary-700 flex h-8 w-fit gap-1 items-center px-2 text-white">
              <span className="text-main">
                <TypeWriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(`/El-Sayed Chelsea/~`)
                      .deleteChars(19)
                      .typeString(`/I'm A BackEnd .NET Developer/~`)
                      .deleteChars(32)
                      .typeString(
                        `/El-Sayed Chelsea || I'm A BackEnd .NET Developer/~`
                      )
                      .start()
                      .changeDelay(60);
                  }}
                />
              </span>
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(22000)
                    .typeString(" npm run dev")
                    .start()
                    .changeDelay(50);
                }}
              />
            </div>
          </div>
          <div className="mt-3 flex items-center">
            <div className="bg-primary-700 h-8 w-fit gap-1 items-center px-2 text-white">
              <div className="text-green-400">
                <TypeWriter
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(24000)
                      .typeString("Hello World!")
                      .start()
                      .changeDelay(50);
                  }}
                />
              </div>
              <TypeWriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(27000)
                    .typeString("Welcome To My WebSite.")
                    .start()
                    .changeDelay(100);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Loader;
