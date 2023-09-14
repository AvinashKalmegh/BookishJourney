import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BookCard } from "../Components/BookCard";
import { Box, Flex } from "@chakra-ui/react";
import ReviewDetail from "../Components/ReviewDetail";
import styled from "styled-components";
import StarRating from "../Components/StarRating";
import Reviews from "../Components/Reviews";
import { getBooks, getSpecificBooks } from "../Redux/Books/action";
import axios from "axios";

const SingleBook = () => {
  const {id} = useParams();
  
  const dispatch = useDispatch();
  const books = useSelector((store) => store.bookReducer.books);
  // const reviews = useSelector((store) => store.bookReducer.reviews);
  const [book, setBook] = useState({});
  const [review, setReview] = useState([]);

  let url = "https://tiny-skirt-hen.cyclic.app";


const getPertData = async()=>{
  try {
     axios.get(`${url}/api/book/${id}`)
    .then((res)=>{
      setBook(res.data.bookData);
      setReview(res.data.reviews);
    })
  } catch (error) {
    console.log(error);
  }
}
  // console.log(book);
  useEffect(()=>{
    getPertData();
  },[]);

  // fetch request
  // store

  // useEffect(() => {
  //   let bookData = books.find((el) => el._id === id);
  //   bookData && setBook(bookData);
  
  //   console.log(bookData);
  // }, []);

  // useEffect(() => {
  //    dispatch(getSpecificBooks(id));
  //    console.log(books,"params");
  // }, []);

  return (
    <>
    <Flex flexDirection={{base:"column",md:"row", lg:"row"}} justifyContent={{base:"center",md:"center",lg:"center"}} alignItems={{base:"center",md:"normal",lg:"normal"}}  gap={2} w={"95%"} m={"auto"} mt={"120px"}>
      <BookCard book={book} />
      <ReviewDetail book={book} review={review}/>
    </Flex>
      <Reviews review={review} book={book} />
    </>

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


