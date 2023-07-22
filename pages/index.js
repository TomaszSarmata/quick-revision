import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    alert("you clicked the button!");
    router.push("/books");
  };

  return (
    <div className="w-full py-10 bg-red-100">
      Hello{" "}
      <button className="bg-blue-500 px-2 py-1 rounded" onClick={handleClick}>
        Click me
      </button>
      <div>
        <Link href="/books">Go to books page</Link>
      </div>
    </div>
  );
}
