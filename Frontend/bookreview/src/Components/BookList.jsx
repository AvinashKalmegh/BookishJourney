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
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  grid-gap: 20px;
  width: 90%;
  margin: auto;
`;

// conditional css

// module.css
