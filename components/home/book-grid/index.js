import BookItem from "./book-item";
import { books } from "./books";

export default function BookGrid() {
  return (
    <div>
      <div id="book-grid" className="mt-20 grid grid-cols-3 w-full bg-red-100">
        {books.map((book) => {
          return <BookItem title={book.title} author={book.author}></BookItem>;
        })}
      </div>
    </div>
  );
}
