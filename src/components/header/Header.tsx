import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import LoginIcon from "@mui/icons-material/Login";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { FiSearch } from "react-icons/fi";
import { RiAccountCircleLine } from "react-icons/ri";
import { AiFillBell } from "react-icons/ai";
import { useEffect, useState } from "react";
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  console.log(process.env.NEXT_PUBLIC_API_KEY);
  console.log(process.env.NEXT_PUBLIC_API_DOMAIN);

  const handleScrolled = () => {
    console.log("scrolled");

    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrolled);

    return () => window.removeEventListener("scroll", handleScrolled);
  });
  return (
    <header
      className={`fixed w-full z-50  font-nunito p-3 lg:p-5 transition-all duration-300 ${
        isScrolled && "bg-[#E10856] "
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-7">
          <span>
            <Image
              src={"/site-logo.svg"}
              alt={"site-logo-img"}
              width={50}
              height={50}
              className="cursor-pointer object-contain md:w-[70px] md:h-[70px]"
            />
          </span>
          <ul className=" items-center hidden    md:flex space-x-3 md:space-x-7 sm:text-[15px] md:text-[18px] whitespace-nowrap list-none">
            <li className="navLink">Home</li>
            <li className="navLink">Movies</li>
            <li className="navLink">TV Shows</li>
            <li className="navLink">Popular</li>
          </ul>
        </div>
        <div className="flex items-center space-x-3">
          <IconButton
            aria-label="search-icon"
            className=" w-[40px] h-[40px] md:w-[70px] md:h-[70px]"
            sx={{ color: "white" }}
          >
            <FiSearch />
          </IconButton>
          <Button
            variant="outlined"
            className={` p-[3px]  md:p-sm  font-semibold  `}
            sx={{ color: "white", border: "1px solid white" }}
          >
            Kids
          </Button>
          <IconButton
            aria-label="button-bell"
            className=" w-[40px]  h-[40px] md:w-[70px] md:h-[70px]"
            sx={{ color: "white" }}
          >
            <AiFillBell />
          </IconButton>
          <IconButton
            aria-label="account-setting-icon"
            className="w-[40px] h-[40px]    md:w-[70px] md:h-[70px]"
            sx={{ color: "white" }}
          >
            <RiAccountCircleLine />
          </IconButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
