import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/Books/action";
import { BookCard } from "./BookCard";

import styled from "styled-components";
import { useLocation, useSearchParams } from "react-router-dom";

export const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((store) => store.bookReducer.books);
  const location = useLocation();
  const [searchParams] = useSearchParams();

  // console.log(books);
  useEffect(() => {
   
    dispatch(getBooks());

  }, [location.search]);
  return (
    <DivWrapper>
      {books.length > 0 &&
        books.map((el) => {
          return <BookCard key={el._id} book={el} />;
        })}
    </DivWrapper>
  );
};

const DivWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 20px;
  width: 90%;
  margin: auto;

  @media screen and (max-width : 609px){
    grid-template-columns: repeat(1,1fr);
  }

  @media screen and (min-width : 609px) and (max-width : 869px){
    grid-template-columns: repeat(2,1fr);
  }

  @media screen and (min-width : 870px) and (max-width : 1314px){
    grid-template-columns: repeat(3,1fr);
  }
`;

// conditional css

// module.css
