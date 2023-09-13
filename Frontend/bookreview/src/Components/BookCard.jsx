import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Image, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./BookCard.css";

export const BookCard = ({ book }) => {
    let isDetail =  window.location.pathname;
    
    return (

        <Card className="bookCard" border={"3px solid rgba(168, 242, 210, 0.8)"}  maxW='sm' boxShadow="rgba(168, 242, 210, 0.8) 0px 30px 60px -12px inset,rgba(168, 242, 210, 0.8) 0px 18px 36px -18px inset" >
            
            {isDetail === "/" ?  <CardBody>
                <Link to={`/books/${book._id}`}>
                    <Image
                        src={book.url}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        margin={"auto"}
                    />
                </Link>
                <Stack mt='6' spacing='3'>
                    <Heading size='md'>{book.title}</Heading>
                    <Heading fontWeight={500} size='md'>Author: {book.author}</Heading>
                </Stack>
            </CardBody> :
            
            <CardBody>
            <Link to={`/books/${book.id}`}>
                <Image
                    src={book.url}
                    alt='Green double couch with wooden legs'
                    borderRadius='lg'
                    margin={"auto"}
                    h={"100%"}
                />
            </Link>
        </CardBody>}
            
          
            <Divider />

            {isDetail === "/" ?  <CardFooter>
                <ButtonGroup spacing='2'>
                    {/* <Link to={`/books/${book.id}/edit`}> */}
                        <Button variant='solid' backgroundColor="rgba(117, 250, 181, 0.8)">
                            Edit Book
                        </Button>
                    {/* </Link> */}
                    <Link to={`/books/${book.id}`}>

                <Button variant='ghost' colorScheme='blue'>
                        View Details
                    </Button>
                    </Link>
                    
                </ButtonGroup>
            </CardFooter> :
            
            <CardFooter justifyContent={"center"}>

             <Link to={`/books/${book.id}/edit`}>
                        <Button variant='solid' backgroundColor="rgba(117, 250, 181, 0.8)">
                            Edit Book
                        </Button>
                    </Link>
            </CardFooter> }
        </Card>

    );
};



