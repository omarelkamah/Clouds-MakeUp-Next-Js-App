import React from "react";
import Product from "../../components/product/Product";

export const getStaticPaths = async () => {
  const res = await fetch(
    "https://makeup-api.herokuapp.com/api/v1/products.json"
  );
  const products = await res.json();

  console.log(products);
  const paths = products.map((product) => {
    return {
      params: { categoryName: String(product.category) },
    };
  });

  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const cateName = context.params.categoryName;
  const res = await fetch(
    `https://makeup-api.herokuapp.com/api/v1/products.json?product_category=${cateName}`
  );
  const products = await res.json();

  return { props: { products, cateName } };
};

const CategoryPage = ({ products }) => {
  console.log(products);
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image_link}
          price={product.price}
          category={product.category}
        />
      ))}
    </div>
  );
};

export default CategoryPage;
