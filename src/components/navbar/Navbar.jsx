import { useEffect, useState } from "react";
import { FaCloudMoon, FaCloudSun } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import { Link } from "react-router-dom";
import { navigationItem } from "./navItem";
import { motion, useScroll } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark"); // Retrieve theme from local storage
  const [navigation, setNavigation] = useState(navigationItem);
  const [scrolling, setScrolling] = useState(false);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    if (htmlElement) {
      htmlElement.setAttribute("data-theme", theme);
    }
    localStorage.setItem("theme", theme); // Store theme in local storage
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0.75 * window.innerHeight) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleTheme = () => {
    const updatedTheme = theme === "dark" ? "light" : "dark";
    setTheme(updatedTheme);
  };

  const handleLinkClick = (index) => {
    const updatedNavigation = navigation.map((nav) => {
      if (nav.id === index) {
        return { ...nav, current: true };
      } else {
        return { ...nav, current: false };
      }
    });
    setOpen(false); // Close the mobile menu on link click
    setNavigation(updatedNavigation); // Update the navigation state
  };

  return (
    <>
      <nav className={`flex items-center justify-between h-[3.85rem] text-content lg:pl-16 lg:pr-16 pl-4 pr-4 sticky top-0 z-50 ${scrolling ? "bg-bgDark" : " bg-bgDark"}`}>
        <Link to="/" onClick={() => handleLinkClick(1)} className="text-2xl font-bold  tracking-widest">
          <div className="flex gap-1 items-center">
            <img src="./logo3.png" alt="" className="w-[5.5rem] " />
            <span className="absolute md:left-32 top-4 left-16 text-amber-400 z-[999] ml-3 md:ml-0">hivam</span>
          </div>
        </Link>
        {/* Desktop menu navigation */}
        <div className="lg:gap-4 gap-1 hidden md:flex">
          {navigation.map((nav) => (
            <Link to={nav.src} onClick={() => handleLinkClick(nav.id)} className={`flex items-center justify-center p-2 gap-1 cursor-pointer text-lg font-medium rounded-lg hover:-translate-y hover:scale-110 hover:text-bgDark hover:bg-amber-400 duration-500 ${nav.current ? "bg-amber-400 text-bgDark" : ""}`} key={nav.id}>
              {nav.icon()}
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu Navigation */}
        <div className="md:hidden absolute w-full block bg-bgDark left-0 top-[3.75rem] z-[5]">
          {open && (
            <div className="h-[calc(100vh-5.75rem)] flex flex-col justify-center items-center gap-4">
              {navigation.map((nav) => (
                <Link to={nav.src} onClick={() => handleLinkClick(nav.id)} className={`flex items-center justify-center ml-4 mr-4 p-2 w-52 gap-1 cursor-pointer text-lg font-medium rounded-lg hover:-translate-y hover:bg-amber-400 hover:text-bgDark hover:scale-110 ${nav.current ? "bg-amber-400 text-bgDark" : ""}`} key={nav.id}>
                  {nav.icon()}
                  {nav.name}
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex gap-4 items-center justify-center">
          <button className="text-3xl transition ease-in-out delay-150 hover:-translate-y hover:scale-110 duration-500 font-semibold p-2 rounded-lg tracking-widest" onClick={handleTheme}>
            {theme === "light" ? <FaCloudMoon /> : <FaCloudSun className="text-yellow-600" />}
          </button>
          <button className="md:hidden block text-2xl" onClick={() => setOpen(!open)}>
            {open ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </div>
      </nav>
      {/* <motion.div className="fixed top-0 left-0 right-0 h-14 bg-bgDark transform origin-left rounded-xl" style={{ scaleX: scrollYProgress }} /> */}
    </>
  );
}

export default Navbar;
