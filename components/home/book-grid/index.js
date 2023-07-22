export default function BookGrid() {
  return (
    <div>
      <div id="book-grid" className="mt-20 grid grid-cols-3 w-full bg-red-100">
        <div id="book1" className="bg-green-100 p-4">
          <p className="title mb-4 text-center text-xl font-medium">
            Game of thrones
          </p>
          <p className="author text-sm text-gray-700 text-center">
            George RR Martin
          </p>
        </div>

        <div id="book2">
          <p className="title">Atomic Habits</p>
          <p className="author">James Clear</p>
        </div>

        <div id="book3">
          <p className="title">Born a Crime</p>
          <p className="author">Trevor Noah</p>
        </div>
      </div>
    </div>
  );
}
