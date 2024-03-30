import React from "react";
import LoginImage from "../../assets/signin.png";
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

const Login = ({ setAuthType }) => {
  return (
    <div className="w-full h-full flex">
      <img
        src={LoginImage}
        alt="Login"
        className="w-full h-full object-contain -mr-6"
      />
      <div className="w-full flex items-center justify-center h-full p-6">
        <div className="h-full w-[80%] flex flex-col items-center justify-center rounded-2xl bg-white shadow-xl shadow-[#66666620]">
          <div className="text-3xl font-semibold text-[#333333]">Login</div>
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
              <div className="text-[#666666] hover:text-[#0049FC] cursor-pointer">
                Forgot Password?
              </div>
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
              disabled={true}
            >
              Login
            </Button>
          </Stack>
          <div
            className="text-[#666666] mt-5 mx-auto gap-5"
            onClick={() => setAuthType("register")}
          >
            Create an account
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
