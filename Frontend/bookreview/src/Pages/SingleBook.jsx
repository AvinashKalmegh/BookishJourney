import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BookCard } from "../Components/BookCard";
import { Box, Flex } from "@chakra-ui/react";
import ReviewDetail from "../Components/ReviewDetail";
import styled from "styled-components";
import StarRating from "../Components/StarRating";

const SingleBook = () => {
  const { id } = useParams();
  const books = useSelector((store) => store.bookReducer.books);
  const [book, setBook] = useState({});

  // fetch request
  // store

  useEffect(() => {
    let bookData = books.find((el) => el.id === +id);
    bookData && setBook(bookData);
  }, []);

  return (
    <Flex  gap={2} w={"95%"} m={"auto"} mt={"120px"}>
      <BookCard book={book} />
      <ReviewDetail book={book}/>
    </Flex>

  );
};


export default SingleBook;



const DivWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  margin-top: 120px;
  justify-content: center;
  border:1px solid red;
  width:100%;

`;


