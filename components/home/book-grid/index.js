import BookItem from "./book-item";

export default function BookGrid() {
  return (
    <div>
      <div id="book-grid" className="mt-20 grid grid-cols-3 w-full bg-red-100">
        <BookItem title="Game of thrones" author="George RR Martin"></BookItem>
        <BookItem title="Atomic Habits" author="James Clear"></BookItem>
        <BookItem title="Born a Crime" author="Trevor Noah"></BookItem>
      </div>
    </div>
  );
}
