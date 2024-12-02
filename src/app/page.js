"use client";

import Card from "@/components/Card";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Recommended from "@/components/Recommended";
import Sidebar from "@/components/Sidebar/page";
import products from "@/db/data";
import { useState } from "react";
import { RiMenuUnfold2Fill } from "react-icons/ri";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [open,setOpen]=useState(true)

  // ----------- Sidebar Toggle -----------
  const toggleSidebar = () => {
    setOpen(!open);
  }
  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <main className="flex gap-5 relative">
      <div className="">
        <button
          onClick={toggleSidebar}
          className="text-2xl font-semibold hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 absolute top-5 left-10"
        >
          <RiMenuUnfold2Fill />
        </button>
        {open && (
          <Sidebar
            handleChange={handleChange}
            open={open}
            toggleSidebar={toggleSidebar}
          />
        )}
      </div>
      <div className='w-full'>
        <Navbar query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleClick} />
        <Products result={result} />
      </div>
    </main>
  );
}
