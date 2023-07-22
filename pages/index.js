import BookGrid from "@/components/home/book-grid";

export default function Home() {
  return (
    <div>
      <div className="text-6xl text-purple-700 text-center font-bold italic">
        Tomasz
      </div>
      <div className="text-center text-gray-700">I am a bootcamp student</div>

      <BookGrid></BookGrid>
    </div>
  );
}
