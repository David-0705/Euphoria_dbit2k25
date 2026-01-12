// import { useLocation } from "react-router-dom";
// import { disablePageScroll, enablePageScroll } from "scroll-lock";

// import { brainwave, hysteria } from "../assets";
// import { navigation } from "../constants";
// import Button from "./Button";
// import MenuSvg from "../assets/svg/MenuSvg";
// import { HamburgerMenu } from "./design/Header";
// import { useState } from "react";

// const Header = () => {
//   const pathname = useLocation();
//   const [openNavigation, setOpenNavigation] = useState(false);

//   const toggleNavigation = () => {
//     if (openNavigation) {
//       setOpenNavigation(false);
//       enablePageScroll();
//     } else {
//       setOpenNavigation(true);
//       disablePageScroll();
//     }
//   };

//   const handleClick = () => {
//     if (!openNavigation) return;

//     enablePageScroll();
//     setOpenNavigation(false);
//   };

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full z-50  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
//         openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
//       }`}
//     >
//       <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
       
//           <img src={hysteria} width={50} height={50}  alt="Brainwave" />
//           <a className="block w-[12rem] xl:mr-8 px-5" href="#home">Hysteria </a>

//         <nav
//           className={`${
//             openNavigation ? "flex" : "hidden"
//           } fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}
//         >
//           <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
//             {navigation.map((item) => (
//               <a
//                 key={item.id}
//                 href={item.url}
//                 onClick={handleClick}
//                 className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 ${
//                   item.onlyMobile ? "lg:hidden" : ""
//                 } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold ${
//                   item.url === pathname.hash
//                     ? "z-2 lg:text-n-1"
//                     : "lg:text-n-1/50"
//                 } lg:leading-5 lg:hover:text-n-1 xl:px-12`}
//               >
//                 {item.title}
//               </a>
//             ))}
//           </div>

//           <HamburgerMenu />
//         </nav>

//         <a
//           href="#signup"
//           className="button hidden mr-8 text-n-1/50 transition-colors hover:text-n-1 lg:block"
//         >
//           New account
//         </a>
//         <Button className="hidden lg:flex" href="#login">
//           Sign in
//         </Button>

//         <Button
//           className="ml-auto lg:hidden"
//           px="px-3"
//           onClick={toggleNavigation}
//         >
//           <MenuSvg openNavigation={openNavigation} />
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default Header;



import { useLocation } from "react-router-dom";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

import { brainwave, hysteria } from "../assets";
import { navigation } from "../constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu,BackgroundCircles,SideLines,Rings,Backimg } from "./design/Header";
import { useEffect,useState } from "react";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10); // adjust threshold if needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div
      className={`
    fixed top-0 left-0 w-full z-50 py-2
   
    ${
      openNavigation
        ? "bg-n-8"
        : isScrolled
        ? "bg-n-8/90 backdrop-blur-sm"
        : "bg-transparent"
    }
  `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4 sm:w-full">
      <a className="block w-[12rem] xl:mr-2 px-5 z-3" href="/">
          <img className="z-3 -my-2 -mx-8" src={hysteria} width={75} height={75}  alt="Euphoria" />
      </a>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed top-[0rem] left-0 right-0 bottom-0 bg-n-8   `}
        >
          <div className="relative z-1 flex flex-col items-center justify-center m-auto lg:flex-column">
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-2 ${
                  item.onlyMobile ? "lg:hidden" : ""
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-2x1 lg:font-semibold ${
                  item.url === pathname.hash
                    ? "z-2 lg:text-n-1"
                    : "lg:text-n-1"
                } lg:leading-5 lg:hover:text-color-3 xl:px-12`}
              >
                {item.title}
              </a>
              
            ))}
            
          </div>
            
          <HamburgerMenu />
          <BackgroundCircles/>
          
            <SideLines/>
            <Rings/>
            {/* <Backimg/> */}
            
        </nav>


        <Button
          className="ml-auto "
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
