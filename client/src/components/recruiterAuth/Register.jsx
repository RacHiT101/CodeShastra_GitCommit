import React, { useState } from "react";
import RegisterImage from "../../assets/hr.png";
import axios from "axios";
import {
  InputGroup,
  Stack,
  InputLeftElement,
  Input,
  Checkbox,
  CheckboxGroup,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Select,
} from "@chakra-ui/react";
import {
  AddIcon,
  ChevronDownIcon,
  CloseIcon,
  EmailIcon,
  LockIcon,
  MinusIcon,
  PhoneIcon,
} from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";
import man from "../../assets/man.png";
import woman from "../../assets/woman.png";
import othergender from "../../assets/star.png";
import { useNavigate } from "react-router-dom";

const areasOfInterestOptions = [
  "Sales",
  "Data Entry",
  "Digital Marketing",
  "Web Development",
  "Graphic Design",
  "Marketing",
  "Human Resources (HR)",
  "General Management",
  "Social Media Marketing",
  "Finance",
  "Software Development",
  "Telecalling",
  "Market/Business Research",
  "Content Writing",
  "Accounts",
  "Project Management",
  "Operations",
  "Client Servicing",
  "Programming",
  "Teaching",
  "Data Science",
  "Video Making/Editing",
  "Interior Design",
  "Python/Django Development",
  "UI/UX Design",
  "Software Testing",
];

const Register = ({ setAuthType }) => {
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");

  const navigate = useNavigate();

  const handleRegister = () => {
    axios
      .post("http://localhost:5001/api/recruiters", {
        name: username,
        contact: phone,
        email,
        password,
        company,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/recruiter");
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
                <FaUser color="#D8E0E8" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="#D8E0E8" />
              </InputLeftElement>
              <Input
                type="tel"
                placeholder="Phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaUser color="#D8E0E8" />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Company Name"
                onChange={(e) => setCompany(e.target.value)}
              />
            </InputGroup>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <LockIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
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
              onClick={handleRegister}
            >
              Register
            </Button>
          </Stack>
          <div className="text-[#666666] mt-5 mx-auto flex items-center justify-center gap-3">
            <div className="text-xs">Already a Recruiter?</div>
            <div
              className="text-xs text-[#0049FC99] cursor-pointer hover:text-[#0049FC]"
              onClick={() => setAuthType("login")}
            >
              Sign In
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
