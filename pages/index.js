import Head from "next/head";
import Avatar from "../components/Avatar";

import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Footer from "../components/Footer";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Google</title>
        <link rel="icon" href="/google.ico" />
      </Head>

      {/* Header */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* right */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar url="https://media-exp1.licdn.com/dms/image/C4D03AQHXD7k7dWLu1g/profile-displayphoto-shrink_800_800/0/1615379231104?e=1623888000&v=beta&t=s31c4NnyEL2smN-lRF8G61GUAN9MTxWnkRy8xZwWGhs" />
        </div>
      </header>

      {/* body */}
      <form className="flex flex-col items-center mt-40 flex-grow w-4/5">
        <Image
          src="https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          height={100}
          width={300}
          alt=""
        />

        <div
          className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md
        rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            placeholder="Google Search"
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 text-gray-500" />
        </div>
        <div className="flex flex-col w-1-2 space-y-3 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4 ">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      <Footer />
    </div>
  );
}
