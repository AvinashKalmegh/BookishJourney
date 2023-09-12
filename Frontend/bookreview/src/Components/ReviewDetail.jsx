import { Button, Card, CardBody, CardFooter, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import "./BookCard.css";
import "./ReviewDetail.css";
import { ChevronDownIcon } from '@chakra-ui/icons';
import StarRating from './StarRating';


const ReviewDetail = ({book,review}) => {
// let bookData = book.bookData;
// let title 
// console.log(book);
let avgRating = 0;
if(review.length>1){
  let sum = 0;
  for(let i=0;i<review.length;i++){

    sum = sum + review[i].rating;
  }
   let total = review.length;
   avgRating =  sum/total;
}
else if(review.length<1){
  avgRating = 0;
}
else{
avgRating = review[0].rating;
}
   

    // console.log((avgRating.toFixed(2)));

  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  h={"100%"}
  className='bookCard'
  id='reviewdetail'
  border={"3px solid rgba(168, 242, 210, 0.8)"}   
  boxShadow="rgba(168, 242, 210, 0.8) 0px 30px 60px -12px inset,rgba(168, 242, 210, 0.8) 0px 18px 36px -18px inset"
  pl={5}
>
 

  <Stack>
    <CardBody  textAlign={"left"}>
      <Heading size='xl'>Title : {book.title} </Heading>

      <Heading mt={4} size="md">
        Author : {book.author}
      </Heading>
      {/* <Heading mt={2} size="md">
        Category : {book.category}
      </Heading>
      <Heading mt={2} size="md">
        Year : {book.release_year}
      </Heading> */}
      <Text fontWeight={600} mt={2} size="2xl" w={"60%"}>
        Description : A book is a medium for recording information in the form of writing or images, typically composed of many pages (made of papyrus, parchment, vellum, or paper) bound together and protected by a cover.
      </Text>
        <StarRating avgRating={avgRating}/>
    
      
    </CardBody>

    <CardFooter>
    </CardFooter>
  </Stack>
</Card>
  )
}

export default ReviewDetail




