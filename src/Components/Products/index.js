import Eye from "@/icons/eye";
import React from "react";
import Container from "../Container";
import db from "../../../DB/db.json";
import Product from "./Product";

const Products = () => {
  return (
    <section className="flex items-center bg-[#f5f3f3] pb-4">
      <Container>
        <div className="flex justify-center py-4">
          <h1 className="uppercase text-[50px] font-extrabold">Dairy products</h1>
        </div>
        <div className="grid grid-cols-6 gap-8">
          {db.map((product) => (
            <Product project={product} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Products;
