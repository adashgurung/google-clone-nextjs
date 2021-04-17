import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();

  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={40}
          width={120}
          alt=""
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form className="flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center">
          <input
            className="flex-grow w-full focus:outline-none"
            ref={searchInputRef}
            placeholder="Google Search"
            defaultValue={router.query.term}
            type="text"
          />

          <XIcon
            className="sm:mr-3 h-7 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125 "
            onClick={() => (searchInputRef.current.value = "")}
          />

          <MicrophoneIcon className="mr-3 h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 cursor-pointer " />
          <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer transition duration-100 transform hover:scale-125 " />
          <button hidden type="submit" onClick={search}>
            Search
          </button>
        </form>
        {/* 
        <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" /> */}

        <Avatar
          className="ml-auto"
          url="https://media-exp1.licdn.com/dms/image/C4D03AQHXD7k7dWLu1g/profile-displayphoto-shrink_800_800/0/1615379231104?e=1623888000&v=beta&t=s31c4NnyEL2smN-lRF8G61GUAN9MTxWnkRy8xZwWGhs"
        />
      </div>

      <HeaderOptions />
    </header>
  );
}

export default Header;
