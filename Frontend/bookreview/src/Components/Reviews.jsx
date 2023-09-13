import React, { useEffect, useState } from 'react';
import { Box, Button, Input, Image, Heading, Text, Flex } from "@chakra-ui/react";
import "./Reviews.css";
import StarRating from './StarRating';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../Redux/Reviews/action';
import axios from 'axios';
import "./StarRating.css";
import { DeleteIcon } from '@chakra-ui/icons';



const Reviews = ({ review, book }) => {
  //  let reviewData = review.reviews;
  const { id } = useParams();
  console.log(book._id);
  const getPertData = async (id) => {
    try {
      axios.get(`http://localhost:3500/api/book/${id}`)
        .then((res) => {

        })
    } catch (error) {
      console.log(error);
    }
  }
  //  console.log(review);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const [comment, setComment] = useState("");

  // console.log(rating);

  const handleChange = (e) => {
    setComment(e.target.value)
  }
  // let bookId = review[0].bookId;
  // console.log(bookId);
  const commentHandler = async () => {
    try {
      if (comment.length < 1) {
        alert("Please write something in comment and give a star !!!")
      }
      else {

        let obj = {
          rating,
          comment,
          bookId: book._id
        }
        // console.log(obj)
        await axios.post("http://localhost:3500/api/review/addReview", obj)
          .then(() => window.location.reload())
          .catch((err) => console.log(err))

      }

    } catch (error) {
      console.log(error);
    }
  }



  return (
    <Box className='reviews' >
      <Box p={2} pt={4} pl={8} h={"300px"} w={"40%"} border={"0px solid black"}>
        <Text fontSize={20} fontWeight={"bold"}>"Your voice matters! Share your experience, inspire others, and help us grow together. Leave a review today!"</Text>
        <div className="star-rating">
          {[...Array(5)].map((star, index) => {
            index += 1;
            return (
              <button
                type="button"
                key={index}
                className={index <= (hover || rating) ? "on" : "off"}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
            );
          })}
        </div>
        <Input mt={3} mb={5} type="description" placeholder='add your review here' value={comment} onChange={handleChange} />
        <Button onClick={commentHandler} backgroundColor={"rgba(117, 250, 181, 0.8)"}>Add Review</Button>
      </Box>
      <Box
        maxH="300px"
        overflowY="auto"
        p="2"
        border="0px solid #ccc" h={"300px"} w={"60%"}>
        <Heading mb={4}>See All the reviews...</Heading>
        {review.length > 0 && review.map((el) => {
          return (
            <Box w={"90%"} fontSize={20} m={"auto"} mt={3} border={"0px solid blue"}>
              <Text p={4} w={"100%"} textAlign={"left"} fontFamily={"Fredoka"} border={"2px solid rgba(168, 242, 210, 0.8)"} boxShadow={"rgba(168, 242, 210, 0.8) 2.4px 2.4px 3.2px"}>
                <Flex justifyContent={"space-between"}>
                  <Text>{el.comment}</Text>
                  <Text>Ratings: {el.rating}</Text>

                </Flex>
              </Text>
            </Box>

          )
        })}
      </Box>
    </Box>
  )
}

export default Reviews