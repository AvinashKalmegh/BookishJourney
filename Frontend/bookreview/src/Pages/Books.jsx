import React from 'react'
import Navbar from '../Components/Navbar'
import  Footer  from '../Components/Footer'
import { BooksList } from '../Components/BookList'
import {Box, Heading, Image} from "@chakra-ui/react";

const Books = () => {
  return (
    <div>
        <Box w={"100%"} mt={"72px"} mb={"30px"}>
       
        <Image src="https://www.bookswagon.com/bannerimages/81_inr.jpg?v=1.9" />
        <Heading mt={"40px"} mb={"60px"} fontFamily={"Fredoka"} fontSize={"4xl"} fontWeight={550}>From bestsellers to hidden gems, we review them all.</Heading>
        </Box>
        <BooksList/>
        <Heading mt={"100px"} mb={"70px"} fontFamily={"Fredoka"} fontSize={"4xl"} fontWeight={550}>We give books the review they deserve.</Heading>
    </div>
  )
}

export default Books