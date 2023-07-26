import { useState } from "react";
import BookItem from "./book-item";
import { initialBooks } from "./books";

export default function BookGrid() {
  const [mostLikedBook, setMostLikedBook] = useState("");
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [lastLikedBook, setLastLikedBook] = useState("");
  const [books, setBooks] = useState(initialBooks);

  const handleLike = (details) => {
    let { title, likes } = details;
    if (likes > numberOfLikes) {
      setMostLikedBook(title);
      setNumberOfLikes(likes);
    }
    setLastLikedBook(title);
  };

  const handleAddBook = () => {
    let book = { title: "works fine", author: "TZ" };
    let newBookArray = [];
    // let newBooksArray = [...books, book]

    for (let i = 0; i < books.length; i++) {
      let b = books[i];
      newBookArray.push(b);
    }
    newBookArray.push(book);
    setBooks(newBookArray);
  };

  return (
    <div>
      <div className="w-full flex flex-col">
        <div className="w-full my-5">
          <button
            type="button"
            onClick={handleAddBook}
            className="bg-blue-500 px-3 py-1 text-white rounded-md"
          >
            Add book
          </button>
        </div>
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

        <div className="my-10 italic text-xl">
          The last liked book is:{" "}
          <span className="text-2xl text-red-500">{lastLikedBook}</span>
        </div>
      </div>
    </div>
  );
}
