import Input from '@/components/Input';
import React from 'react'

export default function Price({ handleChange }) {
    return (
      <>
        <div className="ml-5">
          <h1 className="text-3xl mt-5 mb-3">Price</h1>

          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test2" />
            <span className="checkmark"></span>All
          </label>

          <Input
            handleChange={handleChange}
            value={50}
            title="$0 - 50"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={100}
            title="$50 - $100"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={150}
            title="$100 - $150"
            name="test2"
          />

          <Input
            handleChange={handleChange}
            value={200}
            title="Over $150"
            name="test2"
          />
        </div>
      </>
    );
}
