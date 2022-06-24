import About from "../components/About";
import Features from "../components/Features";
import Gift from "../components/Gift";
import Header from "../components/Header";
import Poster from "../components/Poster";
import Products from "../components/Products";

export default function Home() {
  return (
    <div>
      <Header />
      <Products />
      <Poster />
      <About />
      <Features />
      <Gift />
    </div>
  );
}
