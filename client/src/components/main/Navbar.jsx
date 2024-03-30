import { Avatar, Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { IoIosNotifications } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { ChevronDownIcon, SearchIcon } from "@chakra-ui/icons";

const Navbar = () => {
  return (
    <div className="w-full px-10 absolute top-0 right-0 h-16 bg-white flex items-center justify-between">
      <div className="w-[60%]">
        <InputGroup>
          <InputLeftElement pointerEvents="none">
            <SearchIcon color={"#57575757"} />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="search job title or skill"
            fontSize={12}
          />
        </InputGroup>
      </div>
      <div className="flex gap-10 items-center justify-center">
        <IoIosNotifications className="text-3xl text-[#0049FC]" />
        <IoMdMail className="text-3xl text-[#0049FC]" />
        <div className="px-3 py-2 flex items-center justify-center rounded-3xl border-2 border-[#0049FC]">
          <Avatar
            size="sm"
            name="Prosper Otemuyiwa"
            src="https://bit.ly/prosper-baba"
          />
          <div className="ml-3">Prosper</div>
          <ChevronDownIcon className="text-[#0049FC]" w={5} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
