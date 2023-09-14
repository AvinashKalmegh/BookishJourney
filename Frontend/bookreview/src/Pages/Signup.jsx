import { useEffect, useState } from "react";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  FormHelperText,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "../Redux/Authentication/action";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signup = () => {
  
  const status = useSelector((store) => store.authReducer.signupStatus);
  console.log(status);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const location = useLocation();
// console.log(status.result);


  const signupHandler = (e) => {
    e.preventDefault();
    if(!name || !email || !password){
      alert("Please fill all the fields")
    }
    else{

      let userData = { name, email, password };
      dispatch(signup(userData));
        // console.log(status);
      
        
    
  
        
      
    }
      // console.log(res);
    // redirect the user once the login is successfull
  };

//   const handle = ()=>{
//     const signupHandler = (e) => {
//       e.preventDefault();
//       if(!name || !email || !password){
//         alert("Please fill all the fields")
//       }
//       else{
  
//         let userData = { name, email, password };
//         dispatch(signup(userData)).then(()=>{
//           console.log(status);
  
//         })
    
//   }
// }
//   }


useEffect(()=>{
  if(status == "User already registered"){
  
    alert("User already registered");
    
     navigate("/signin");
  }
  if(status == "Registration successful"){
            alert("Signup Successfull");
          navigate("/signin");
     }
},[status])
  

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      // backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Text color="gray.500" fontWeight={"600"}>Sign up to join Bookish Journey.</Text>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form>
            <Stack
              spacing={4}
              p="1rem"
            >
               <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input  type="text" placeholder="First Name" value={name} onChange={(e)=>setName(e.target.value)} />
                </InputGroup>
              </FormControl>
              
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.300" />}
                  />
                  <Input type="email" placeholder="email address" value={email} onChange={(e)=>setEmail(e.target.value)} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    // color="gray.300"
                    children={<CFaLock color="gray.300" />}
                  />
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    value={password} onChange={(e)=>setPassword(e.target.value)}
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                      {showPassword ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={0}
                type="submit"
                variant="solid"
                colorScheme="teal"
                width="full"
                onClick={(e)=>signupHandler(e)}
              >
                Sign up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        already have an account?{" "}
        <Link to="/signin">
        <span style={{"color":"teal"}}>Sign in</span>
        </Link>
      </Box>
    </Flex>
  );
};

export default Signup;
