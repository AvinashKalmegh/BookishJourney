'use client'

import {
  Box,
  Flex,
  Avatar,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightAddon,
  Hide,
  Show,
} from '@chakra-ui/react';
import { HamburgerIcon, MoonIcon, Search2Icon, SunIcon } from '@chakra-ui/icons';
import "./Navbar.css";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import MenuDrawer from './MenuDrawer';
import axios from 'axios';
import { getBooks, getSearch } from '../Redux/Books/action';
import Search from './Search';

interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate();
  const books = useSelector((store) => store.bookReducer.books);

  const [search, setSearch] = useState("");

  let istoken = JSON.parse(localStorage.getItem("token")) || null;

const dispatch = useDispatch()
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/signin")
  }

  const [searcharr, setSearchArr] = useState([]);
 const handleSearch = ()=>{
  let data = books.filter((el)=>{
    return el.title.toLowerCase().includes(search.toLocaleLowerCase());
  })
  // arr.push(data)
  setSearchArr(data);
  
}
console.log(searcharr);

  
  return (

    <Box className='nav' bg={useColorModeValue('gray.100', 'gray.900')} px={4} >
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Link to="/">
          <Box className='logo' fontFamily={"Fredoka"} fontWeight={"bold"} fontSize={{base:"2xl",md:"2xl",lg:"4xl"}}>Bookish Journey</Box>
        </Link>
        {/* {searcharr.length >0 ? <Search data={searcharr}/> : <></>} */}
        
        <Hide breakpoint='(max-width : 901px)'>
          <InputGroup w={"30%"} borderRadius={5} size="sm">
            <InputLeftElement
              pointerEvents="none"
              children={<Search2Icon color="gray.600" />}
            />
            <Input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search..." border="1px solid #949494" />

            <InputRightAddon
              p={0}
              border="none"
            >
              <Button onClick={handleSearch} size="sm" borderLeftRadius={0} borderRightRadius={3.3} border="1px solid #949494">
                Search
              </Button>
            </InputRightAddon>
          </InputGroup>


          <Flex alignItems={'center'} border={"0px solid red"} w={"33%"} justifyContent={"space-around"} fontWeight={"450"}>


            <Link to="/">
              <Text className='menu'>Home</Text>
            </Link>
            <Link to={"/dashboard"}>
              <Text className='menu'>Dashboard</Text>
            </Link>
            {istoken !== null ? <></> : <Link to={"/signin"}>
              <Text className='menu'>Signin</Text>
            </Link>}



            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'data:image/png;base64,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'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'data:image/png;base64,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'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Your Servers</MenuItem>
                  <MenuItem>Account Settings</MenuItem>
                  {istoken !== null ? <MenuItem onClick={logout}>Logout</MenuItem> : <></>}

                </MenuList>
              </Menu>
            </Stack>
          </Flex>
        </Hide>
        <Show breakpoint='(max-width : 900px)'>
          <MenuDrawer/>
          </Show>
      </Flex>
    </Box>

  )
}