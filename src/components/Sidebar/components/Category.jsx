import Input from "@/components/Input";
import React from "react";

export default function Category({ handleChange }) {
  return (
    <div>
      <h1 className="text-3xl mb-5">Category</h1>
      <div className="">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value={"sneakers"}
          title={"Sneakers"}
          name={"test"}
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}
