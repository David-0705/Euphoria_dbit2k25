import { useLocation, useNavigate } from "react-router-dom";
import { hysteria } from "../assets";
import { navigation } from "../constants";
const Header = () => {
  const pathname = useLocation();
const navigate = useNavigate();
const currentPath = pathname.pathname;
const toRoute = (url) => (url.startsWith("/#/") ? url.replace("/#/", "/") : url);
  return (
    <div
      className={`
        fixed top-0 left-0 w-full z-50 border-b 
        py-3 lg:py-4
        bg-black/85 backdrop-blur-xl
        border-[#b8923b]/40
        shadow-[0_2px_25px_rgba(255,215,0,0.18)]
        transition-all duration-300
      `}
    >
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 w-full">

        <a className="block w-[12rem] xl:mr-2 px-5 z-20" href="/">
          <img
            className="z-20 -my-5 -mx-8"
            src={hysteria}
            width={75}
            height={75}
            alt="Euphoria"
          />
        </a>

      {/* desktop */}
        <nav className="hidden lg:flex ml-auto gap-10 items-center">
          {navigation.map((item) => (
            <a
              key={item.id}
              href={item.url}
              className={`
                relative text-[17px] font-semibold tracking-wide
                text-[#d6b675] hover:text-[#ffe38a]
                transition-all duration-300
                pb-1
                after:absolute after:left-0 after:bottom-0
                after:w-0 after:h-[2px]
                after:bg-gradient-to-r after:from-[#d4af37] after:to-[#ffdd55]
                after:transition-all after:duration-300
                hover:after:w-full
                ${item.url === pathname.hash ? "text-[#ffdd7a] after:w-full" : ""}
              `}
            >
              {item.title}
            </a>
          ))}
        </nav>

       
    {/*  mobile */}
    <div className="lg:hidden ml-auto">
  <select
    className="p-3 bg-black border border-[#d6b675]/40 rounded-xl text-[#f5d487] font-semibold tracking-wide"
    onChange={(e) => {
      const route = e.target.value;
      navigate(route);
    }}
    value={currentPath}
  >
    {navigation.map((item) => {
      const route = toRoute(item.url);
      return (
        <option key={item.id} value={route}>
          {item.title}
        </option>
      );
    })}
  </select>
</div>

   

        
      </div>
    </div>
  );
};

export default Header;
