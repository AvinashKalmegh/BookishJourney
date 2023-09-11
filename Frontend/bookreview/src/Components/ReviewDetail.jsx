import { Button, Card, CardBody, CardFooter, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import "./BookCard.css";
import { ChevronDownIcon } from '@chakra-ui/icons';
import StarRating from './StarRating';


const ReviewDetail = ({book}) => {

  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  h={"100%"}
  className='bookCard'
  border={"3px solid rgba(168, 242, 210, 0.8)"}   
  boxShadow="rgba(168, 242, 210, 0.8) 0px 30px 60px -12px inset,rgba(168, 242, 210, 0.8) 0px 18px 36px -18px inset"
  pl={5}
>
 

  <Stack>
    <CardBody textAlign={"left"}>
      <Heading size='xl'>Title : {book.book_name}</Heading>

      <Heading mt={4} size="md">
        Author : {book.author}
      </Heading>
      <Heading mt={2} size="md">
        Category : {book.category}
      </Heading>
      <Heading mt={2} size="md">
        Year : {book.release_year}
      </Heading>
      <Text fontWeight={600} mt={2} size="2xl" w={"60%"}>
        Description : A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.
      </Text>
      <Text fontWeight={600} mt={2} size="2xl">
        Reviews : 4.2
      </Text>
    </CardBody>

    <CardFooter>
    </CardFooter>
  </Stack>
</Card>
  )
}

export default ReviewDetail




