import React from "react";

function Products({ result }) {
  return (
    <>
      <section className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5 px-8 sm:px-2 place-content-center">
        {result}
      </section>
    </>
  );
}

export default Products;
