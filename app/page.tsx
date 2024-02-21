import Hero from "./components/hero";
import Navbar from "./components/navbar";
import SearchBar from "./components/searchBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SearchBar />
    </>
  );
}
