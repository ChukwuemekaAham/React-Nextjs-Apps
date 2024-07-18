import React from "react";
import Image from "next/image";
import {
  ViewGridIcon,
  XIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  BellIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  SearchIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import HeaderIcon from "./HeaderIcon";
// import { useSession, signOut } from "next-auth/react";

function Header() {
  // const [session] = useSession();
  return (
    <div
      className="sticky top-0 z-50 bg-white flex items-center p-2
     lg:px-5 shadow-md "
    >
      {/* Left */}
      <div className="flex items-center ">
        <Image
          src="https://links.papareact.com/5me"
          height={40}
          width={40}
          className="cursor-pointer"
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2 ">
          <SearchIcon className="h-6 text-gray-600 " />
          <input
            className=" hidden md:inline-flex ml-2 items-center bg-transparent 
            outline-none placeholder-gray-500 flex-shrink "
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}
      <div className="flex flex-grow justify-center ">
        <div className="flex space-x-6 md:space-x-2 ">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end ">
        {/* Profile pic */}
        <Image
          // onClick={signOut}
          src="https://coaching.papareact.com/ai9"
          // src={session.user.image}
          className="rounded-full cursor-pointer"
          height={40}
          width={40}
          layout="fixed"
        />

        <p className="whitespace-nowrap font-semibold pr-3 ml-1">Chukwuemeka</p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
