import BookItem from "./book-item";

const books = [
  { title: "Game of thrones", author: "George RR Martin" },
  { title: "Atomic Habits", author: "James Clear" },
  { title: "Born a Crime", author: "Trevor Noah" },
];

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
