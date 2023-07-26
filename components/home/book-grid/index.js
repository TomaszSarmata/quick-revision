import { useState } from "react";
import BookItem from "./book-item";
import { books } from "./books";

export default function BookGrid() {
  const [mostLikedBook, setMostLikedBook] = useState("");
  const [numberOfLikes, setNumberOfLikes] = useState(0);

  const handleLike = (details) => {
    let { title, likes } = details;
    if (likes > numberOfLikes) {
      setMostLikedBook(title);
      setNumberOfLikes(likes);
    }
  };

  return (
    <div>
      <div className="w-full flex flex-col">
        <div
          id="book-grid"
          className="mt-20 grid grid-cols-3 w-full bg-red-100"
        >
          {books.map((book) => {
            return (
              <BookItem
                title={book.title}
                author={book.author}
                onLike={handleLike}
              ></BookItem>
            );
          })}
        </div>
        <div className="my-10 italic text-xl">
          The most liked book is: {mostLikedBook}
        </div>
      </div>
    </div>
  );
}
