import { useState } from "react";
import { icons } from "../../icons";
import { sidebarData } from "../../constants";
import { useLocation } from "react-router-dom";

const ProfileToggle = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { pathname } = location;

  return (
    <>
      <div className="flex gap-8 items-center rounded-lg p-4 border-b border-[#383838] lg:hidden relative">
        <div className="flex justify-center p-2 items-center bg-slate-700 rounded-xl">
          <img
            width="60"
            height="60"
            src="https://mth-titumir.web.app/assets/Titumir-Picture%20copy-f6460935.png"
            alt="M. T. H. Titumir"
          />
        </div>
        <div>
          <h1 className="text-center text-xl font-semibold text-[white] my-2">
            M. T. H. Titumir
          </h1>
          <div className="flex justify-center">
            <button className="bg-slate-900 border-main rounded-md py-1 px-3 text-center text-white text-sm">
              Full Stack Developer
            </button>
          </div>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="shadow-[-4px_8px_24px_hsla(0,0%,0%,0.125)] bg-gradient-to-r from-[#0A192F] to-sky-900 hover:text-sky-600 rounded-tr-md rounded-bl-md py-1 px-3 text-center text-white text-sm top-0 right-0 absolute"
        >
          {open ? (
            <icons.utils.arrowUp size={20} />
          ) : (
            <icons.utils.arrowDown size={20} />
          )}
        </button>
      </div>
      <div
        className={`lg:hidden rounded-b-lg transition-all duration-700 ease-in-out ${
          open
            ? "max-h-96 opacity-100 p-4 border-b border-[#383838]"
            : "h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-3">
        {sidebarData?.map((sd, index) => (
          <a key={index} href={sd.path}>
            <div
              key={index}
              className={`${
                sd.path === pathname
                  ? "text-sky-500 border border-sky-500"
                  : "text-inherit border-main"
              } text-sm md:text-sm lg:text-md uppercase tracking-wider flex items-center gap-2 rounded-sm px-3 py-1`}
            >
              <sd.icon size={20} />
              <h1>{sd.name}</h1>
            </div>
          </a>
        ))}
      </div>
        {/* <SocialLinks /> */}
      </div>
    </>
  );
};

export default ProfileToggle;
