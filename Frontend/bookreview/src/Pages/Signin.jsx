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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { signin } from "../Redux/Authentication/action";

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const Signin = () => {

  const istoken = useSelector((store) => store.authReducer.token);
  console.log(istoken);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const loginHandler = (e) => {
    e.preventDefault();
    // console.log(location.state);
    if(!email || !password){
      alert("Please fill all the fields")
    }
    else{
      let userData = { email, password };
      dispatch(signin (userData))
      // .then(() => {
          // if(istoken){
            
          //   if(location.state == null){
          //     localStorage.setItem("token",JSON.stringify(istoken));
          //     navigate("/");
          //   }
          //   else{
          //     localStorage.setItem("token",JSON.stringify(istoken));
      
          //     navigate(location.state, { replace: true });
          //   }
          // }
          // else{
          //   alert("Wrong Credentials !!!")
          // }

          
      //   });
      // }

     
    // redirect the user once the login is successfull
  };
}

useEffect(()=>{
    if(istoken == "Signin successful"){
          
            if(location.state == null){
              localStorage.setItem("token",JSON.stringify(istoken));
              navigate("/");
            }
            else{
              navigate(location.state, { replace: true });
            }
    }
    else if(istoken == "Please signup first"){
      alert("Wrong Credentials !!!")
      return;
    }

},[istoken])


  const [showPassword, setShowPassword] = useState(false);

  const handleShowClick = () => setShowPassword(!showPassword);

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
        <Heading color="teal.400">Welcome Back</Heading>
        <Text color="gray.500" fontWeight={"600"}>Sign in to continue.</Text>
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
                onClick={loginHandler}
              >
                Login
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New user?{" "}
        <Link to="/signup">
          <span style={{"color":"teal"}}>Sign up</span>
        </Link>
      </Box>
    </Flex>
  );
};

export default Signin;
