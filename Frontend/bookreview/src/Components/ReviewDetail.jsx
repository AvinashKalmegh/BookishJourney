import { Button, Card, CardBody, CardFooter, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import "./BookCard.css";
import "./ReviewDetail.css";
import { ChevronDownIcon } from '@chakra-ui/icons';
import StarRating from './StarRating';


const ReviewDetail = ({book,review}) => {

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
   

    

  return (
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  h={"100%"}
  className='bookCard'
  id='reviewdetail'
  border={"3px solid rgba(168, 242, 210, 0.8)"}   
  
  pl={5}
>
 

  <Stack>
    <CardBody  textAlign={"left"}>
      <Heading size='xl'>Title : {book.title} </Heading>

      <Heading mt={4} size="md">
        Author : {book.author}
      </Heading>
      <Text fontWeight={600} mt={2} size="2xl" w={{base:"%",sm:"80%",lg:"60%"}}>
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




