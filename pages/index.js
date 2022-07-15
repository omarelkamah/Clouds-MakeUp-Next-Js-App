import About from "../components/About";
import Features from "../components/Features";
import Gift from "../components/Gift";
import Header from "../components/Header";
import Poster from "../components/Poster";
import Products from "../components/Products";

// export const getStaticProps = async (co) => {
//   const res = await fetch(
//     "https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=blush"
//   );
//   const data = await res.json();

//   // console.log(co);
//   return {
//     props: { products: data },
//   };
// };

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
