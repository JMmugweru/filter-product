import React from 'react'
import Button from './Button';

function Recommended({ handleClick }) {
    return (
      <>
        <div className="container mx-auto p-5 mt-16">
          <h2 className='text-3xl my-2 text-gray-900'>Recommended</h2>
          <div className="flex flex-wrap space-x-3 mt-3">
            <Button
              onClickHandler={handleClick}
              value=""
              title="All Products"
            />
            <Button onClickHandler={handleClick} value="Nike" title="Nike" />
            <Button
              onClickHandler={handleClick}
              value="Adidas"
              title="Adidas"
            />
            <Button onClickHandler={handleClick} value="Puma" title="Puma" />
            <Button onClickHandler={handleClick} value="Vans" title="Vans" />
          </div>
        </div>
      </>
    );
}

export default Recommended