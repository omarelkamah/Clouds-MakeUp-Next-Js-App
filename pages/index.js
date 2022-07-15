import About from "../components/About";
import Features from "../components/ui/Features";
import Gift from "../components/home/Gift";
import Header from "../components/home/Header";
import Poster from "../components/ui/Poster";
import Products from "../components/product/Products";

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
