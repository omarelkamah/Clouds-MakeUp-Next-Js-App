import About from "../components/About";
import Features from "../components/Features";
import Gift from "../components/Gift";
import Header from "../components/Header";
import Poster from "../components/Poster";
import Products from "../components/Products";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=blush"
  );
  // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: { products: data },
  };
};

export default function Home({ products }) {
  return (
    <div>
      <Header />
      <Products products={products} />
      <Poster />
      <About />
      <Features />
      <Gift />
    </div>
  );
}
