import Bio from "@/components/home/bio";
import BookGrid from "@/components/home/book-grid";
import Hero from "@/components/home/hero";

export default function Home() {
  return (
    <div>
      <Hero name="Tomasz"></Hero>

      <Bio text="I am a bootcamp student"></Bio>

      <BookGrid></BookGrid>

      <a href="/example">Counter Example</a>
    </div>
  );
}
