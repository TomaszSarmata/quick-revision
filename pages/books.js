import Link from "next/link";

export default function BooksPage() {
  return (
    <div className="bg-green-100">
      Books Page{" "}
      <div>
        <Link href="/">Go to home page</Link>
      </div>{" "}
    </div>
  );
}
