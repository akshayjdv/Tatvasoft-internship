

import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import { getAllBooks } from "../services/book.service";

import {
  BookCard,
  BookImage,
  BookName,
  BookSub,
  GridContainer,
} from './bookgridstyle';

const BookGrid = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getAllBooks();
        setBooks(response);
      } catch (error) {
        console.error("Error getting books:", error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <GridContainer>
      <Grid container spacing={2} className="book-grid">
        {books.map((book) => (
          <Grid item xs={4} sm={3} md={4} key={book.id} marginBottom="2vh">
            <BookCard elevation={3}>
              <BookImage
                src={book.base64image}
                alt={book.name}
                className="book-image"
              />
              <BookName variant="h6" style={{ fontSize: "1rem" }}>
                {book.name}
              </BookName>
              <BookSub variant="subtitle1">
                {book.description.slice(0, 30)}
              </BookSub>
              <BookSub variant="subtitle1">{book.price} ₹</BookSub>
              <Button variant="contained" color="secondary">
                Add to Cart
              </Button>
            </BookCard>
          </Grid>
        ))}
        {/* {books.map((book) => (
          <Grid item xs={4} sm={3} md={2} key={book.id} marginBottom="6vh">
            <BookCard elevation={3}>
              <BookImage
                src={book.base64image}
                alt={book.name}
                className="book-image"
              />
              <BookName variant="h6" style={{ fontSize: "1rem" }}>
                {book.name}
              </BookName>
              <BookSub variant="subtitle1">
                {book.description.slice(0, 30)}
              </BookSub>
              <BookSub variant="subtitle1">Rs. {book.price}</BookSub>
              <Button variant="contained" color="primary">
                Add to Cart
              </Button>
            </BookCard>
          </Grid>
        ))} */}
      </Grid>
    </GridContainer>
  );
};

export default BookGrid