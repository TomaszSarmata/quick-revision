export default function BookItem({ title, author }) {
  return (
    <div>
      {" "}
      <div id="book1" className="bg-green-100 p-4">
        <p className="title mb-4 text-center text-xl font-medium">{title}</p>
        <p className="author text-sm text-gray-700 text-center">{author}</p>
      </div>
    </div>
  );
}
