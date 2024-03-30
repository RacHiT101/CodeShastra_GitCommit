import React from "react";
import RegisterImage from "../../assets/signup.png";
import {
  InputGroup,
  Stack,
  InputLeftElement,
  Input,
  InputRightElement,
  Checkbox,
  CheckboxGroup,
  Button,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";

const Register = ({ setAuthType }) => {
  return (
    <div className="w-full h-full flex">
      <div className="w-full flex items-center justify-center h-full p-6">
        <div className="h-full w-[80%] flex flex-col items-center justify-center rounded-2xl bg-white shadow-xl shadow-[#66666620]">
          <div className="text-3xl font-semibold text-[#333333]">Register</div>
          <div className="text-[#666666] mt-2">
            Enter your details below to continue
          </div>
          <Stack spacing={4} className="mt-5 w-[80%]">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.300" />
              </InputLeftElement>
              <Input type="email" placeholder="Email Address" />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <LockIcon color="gray.300" />
              </InputLeftElement>
              <Input type="password" placeholder="Password" />
            </InputGroup>
            <div className="flex w-full px-3 text-sm justify-between items-center">
              <CheckboxGroup colorScheme="blue">
                <Checkbox size="sm">Remember me</Checkbox>
              </CheckboxGroup>
            </div>
            <Button
              size="sm"
              w="full"
              h={10}
              className="mx-auto"
              color={"white"}
              backgroundColor={"#0049FC"}
              _hover={{
                backgroundColor: "#0049FC99",
              }}
            >
              Register
            </Button>
          </Stack>
          <div className="text-[#666666] mt-5 mx-auto flex items-center justify-center gap-3">
            <div className="text-xs">Already a Job Seeker?</div>
            <div
              className="text-xs text-[#0049FC99] cursor-pointer hover:text-[#0049FC]"
              onClick={() => setAuthType("login")}
            >
              Sign In{" "}
            </div>
          </div>
        </div>
      </div>
      <img
        src={RegisterImage}
        alt="Register"
        className="w-full h-full object-contain -mr-6"
      />
    </div>
  );
};

export default Register;
