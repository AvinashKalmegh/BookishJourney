import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { Button, Drawer, DrawerBody, DrawerContent,Text, DrawerHeader, DrawerOverlay, Radio, RadioGroup, Stack, useDisclosure, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const MenuDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')

    const navigate = useNavigate();
    
    let istoken = JSON.parse(localStorage.getItem("token")) || null;
    // console.log(istoken);
    const logout = () => {
        localStorage.removeItem("token");
        navigate("/signin")
      }
  return (
    <>
        
      
        <HamburgerIcon onClick={onOpen} fontSize={38}/>
        
        <Drawer size={"xs"} placement={placement} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
          <Flex pr={8} justifyContent={"space-between"} alignItems={"center"}>
          <Box ml={5} className='logo' fontFamily={"Fredoka"} fontWeight={"bold"} fontSize={"4xl"}>BJ</Box>
          <CloseIcon fontSize={20} onClick={onClose} />
          </Flex>
          <DrawerHeader fontSize={"2xl"} borderBottomWidth='1px'>Menu <Link to="/">
        </Link></DrawerHeader>
            
            
            
            <DrawerBody>
                <Link to={"/"}>
              <Text mt={5} fontSize={"xl"} onClick={onClose}>Home</Text>
                </Link>
                <Link to={"/dashboard"}>
              <Text mt={5} fontSize={"xl"} onClick={onClose}>Dashboard</Text>
                </Link>
                {istoken !== null ? <Text onClick={logout} mt={5} fontSize={"xl"}>Logout</Text> :
                
                <Link to={"/signin"}>
              <Text mt={5} fontSize={"xl"} onClick={onClose}>Signin</Text>
                </Link>
                }
              
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
  )
}

export default MenuDrawer



