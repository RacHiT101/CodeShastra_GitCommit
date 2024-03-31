import React, { useState } from "react";
import RegisterImage from "../../assets/signup.png";
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
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [gender, setGender] = useState("");
  const [languages, setLanguages] = useState([]);
  const [studentType, setStudentType] = useState({
    type: "",
    course: "",
    name: "",
    stream: "",
    startyear: "",
    endyear: "",
  });
  const [areasOfInterest, setAreasOfInterest] = useState([]);

  const [showSubType, setShowSubType] = useState(false);
  const [filteredAreasOfInterestOptions, setFilteredAreasOfInterestOptions] =
    useState(areasOfInterestOptions);

  const handleClick = (area) => {
    setAreasOfInterest((prevAreas) => [...prevAreas, area]);
    setFilteredAreasOfInterestOptions((prevOptions) =>
      prevOptions.filter((option) => option !== area)
    );
  };
  const navigate = useNavigate();

  const handleRegister = () => {
    axios
      .post("http://localhost:5001/api/register", {
        name: username,
        contact: phone,
        email,
        skills: areasOfInterest,
        course: studentType.course,
        password,
        degree: studentType.name,
        location: city,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        navigate("/");
      })
      .then(() => {
        onClose();
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
              onClick={onOpen}
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
      <Modal
        blockScrollOnMount={false}
        size={"4xl"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter your details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <div className="-mb-3 flex text-sm flex-col w-full">
                <label className="font-semibold">Current City</label>
                <div className="text-xs text-gray-400">
                  To connect you with the opportunities closer to you
                </div>
              </div>
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Cuurent Location"
                  onChange={(e) => setCity(e.target.value)}
                />
              </InputGroup>
              <div className="-mb-3 flex text-sm flex-col w-full">
                <label className="font-semibold">Gender</label>
              </div>
              <div className="flex items-center gap-2 w-full">
                <div
                  className={`w-fit px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer
                    ${
                      gender === "male" &&
                      "bg-[#0049FC20] border-2 border-[#0049FC]"
                    }
                  `}
                  onClick={() => setGender("male")}
                >
                  <img src={man} alt="man" className="w-5 h-5 rounded-full" />
                  Male
                </div>
                <div
                  className={`w-fit px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer ${
                    gender === "female" &&
                    "bg-[#0049FC20] border-2 border-[#0049FC]"
                  }`}
                  onClick={() => setGender("female")}
                >
                  <img
                    src={woman}
                    alt="woman"
                    className="w-5 h-5 rounded-full"
                  />
                  Female
                </div>
                <div
                  className={`w-fit px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer  ${
                    gender === "other" &&
                    "bg-[#0049FC20] border-2 border-[#0049FC]"
                  }`}
                  onClick={() => {
                    setGender("other");
                  }}
                >
                  <img
                    src={othergender}
                    alt="man"
                    className="w-5 h-5 rounded-full"
                  />
                  Other
                </div>
              </div>
              <div className="-mb-3 flex text-sm flex-col w-full">
                <label className="font-semibold">Type</label>
              </div>
              <div className="flex items-center gap-2 w-full">
                <div
                  className={`w-fit px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer ${
                    studentType.type === "college" &&
                    `bg-[#0049FC20] border-2 border-[#0049FC]`
                  }`}
                  onClick={() => {
                    setShowSubType(true);
                    setStudentType({ ...studentType, type: "college" });
                  }}
                >
                  College student
                </div>
                <div
                  className={`w-fit px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer ${
                    studentType.type === "fresher" &&
                    `bg-[#0049FC20] border-2 border-[#0049FC]`
                  }`}
                  onClick={() => {
                    setShowSubType(true);
                    setStudentType({ ...studentType, type: "fresher" });
                  }}
                >
                  Fresher
                </div>
                <div
                  className={`w-fit px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer ${
                    studentType.type === "working" &&
                    `bg-[#0049FC20] border-2 border-[#0049FC]`
                  }`}
                  onClick={() => {
                    setShowSubType(true);
                    setStudentType({ ...studentType, type: "working" });
                  }}
                >
                  Working professional
                </div>
                <div
                  className={`w-fit px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer ${
                    studentType.type === "school" &&
                    `bg-[#0049FC20] border-2 border-[#0049FC]`
                  }`}
                  onClick={() => {
                    setShowSubType(true);
                    setStudentType({ ...studentType, type: "school" });
                  }}
                >
                  School student
                </div>
                <div
                  className={`w-fit px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer ${
                    studentType.type === "woman" &&
                    `bg-[#0049FC20] border-2 border-[#0049FC]`
                  }`}
                  onClick={() => {
                    setShowSubType(true);
                    setStudentType({ ...studentType, type: "woman" });
                  }}
                >
                  Woman returning to work
                </div>
              </div>
              {showSubType && (
                <>
                  <div className="-mb-3 flex text-sm flex-col w-full">
                    <label className="font-semibold">Course</label>
                  </div>
                  <div className="flex items-center gap-2 w-full">
                    <div
                      className={`w-fit min-w-16 justify-center px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer ${
                        studentType.course === "btech" &&
                        `bg-[#0049FC20] border-2 border-[#0049FC]`
                      }`}
                      onClick={() =>
                        setStudentType({ ...studentType, course: "btech" })
                      }
                    >
                      BTech
                    </div>
                    <div
                      className={`w-fit min-w-16 justify-center px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer ${
                        studentType.course === "be" &&
                        `bg-[#0049FC20] border-2 border-[#0049FC]`
                      }`}
                      onClick={() =>
                        setStudentType({ ...studentType, course: "be" })
                      }
                    >
                      BE
                    </div>
                    <div
                      className={`w-fit min-w-16 justify-center px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer ${
                        studentType.course === "bcom" &&
                        `bg-[#0049FC20] border-2 border-[#0049FC]`
                      }`}
                      onClick={() =>
                        setStudentType({ ...studentType, course: "bcom" })
                      }
                    >
                      BCom
                    </div>
                    <div
                      className={`w-fit min-w-16 justify-center px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer ${
                        studentType.course === "mba" &&
                        `bg-[#0049FC20] border-2 border-[#0049FC]`
                      }`}
                      onClick={() =>
                        setStudentType({ ...studentType, course: "mba" })
                      }
                    >
                      MBA
                    </div>
                    <div
                      className={`w-fit min-w-16 justify-center px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer ${
                        studentType.course === "ba" &&
                        `bg-[#0049FC20] border-2 border-[#0049FC]`
                      }`}
                      onClick={() =>
                        setStudentType({ ...studentType, course: "ba" })
                      }
                    >
                      BA
                    </div>
                  </div>
                  <div className="w-fit px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer text-[#0049FC]">
                    Find more courses
                    <ChevronDownIcon />
                  </div>
                  <div className="-mb-3 flex text-sm flex-col w-full">
                    <label className="font-semibold">College Name</label>
                  </div>
                  <InputGroup>
                    <Input
                      type="text"
                      placeholder="Eg. DJ Sanghvi College of Engineering"
                    />
                  </InputGroup>
                  <div className="-mb-3 flex text-sm flex-col w-full">
                    <label className="font-semibold">Stream</label>
                  </div>
                  <InputGroup>
                    <Input type="text" placeholder="Eg. Computer Science" />
                  </InputGroup>
                  <div className="flex w-full gap-3">
                    <div className="-mb-3 flex text-sm flex-col w-full">
                      <label className="font-semibold">Start Year</label>
                      <Select placeholder="Choose Year">
                        {[...Array(20)].map((_, i) => (
                          <option key={i}>{2024 - i}</option>
                        ))}
                      </Select>
                    </div>
                    <div className="-mb-3 flex text-sm flex-col w-full">
                      <label className="font-semibold">End Year</label>
                      <Select placeholder="Choose Year">
                        {[...Array(10)].map((_, i) => (
                          <option key={i}>{2027 - i}</option>
                        ))}
                      </Select>
                    </div>
                  </div>
                </>
              )}
              <div className="-mb-3 mt-3 flex text-sm flex-col w-full">
                <label className="font-semibold">Areas of Interest</label>
              </div>
              {areasOfInterest.length > 0 && (
                <div className="flex flex-wrap w-full gap-3">
                  {areasOfInterest.map((area) => (
                    <div
                      className="w-fit min-w-16 justify-center px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 bg-[#0049FC50] cursor-pointer"
                      onClick={() => {
                        setAreasOfInterest(
                          areasOfInterest.filter((option) => option !== area)
                        );
                        setFilteredAreasOfInterestOptions([
                          ...filteredAreasOfInterestOptions,
                          area,
                        ]);
                      }}
                    >
                      {area}
                      <CloseIcon w={2} h={2} />
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap w-full gap-3">
                {filteredAreasOfInterestOptions.map((area) => (
                  <div
                    className="w-fit min-w-16 justify-center px-3 flex gap-2 items-center py-2 rounded-3xl border-2 border-gray-300 hover:bg-[#0049FC20] cursor-pointer"
                    onClick={() => handleClick(area)}
                  >
                    {area}
                    <AddIcon w={3} h={3} />
                  </div>
                ))}
              </div>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button
              backgroundColor={"#0049FC"}
              color={"white"}
              mr={3}
              onClick={() => {
                if (!username || !email || !password)
                  return alert("Please fill all the details");
                handleRegister();
              }}
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Register;
