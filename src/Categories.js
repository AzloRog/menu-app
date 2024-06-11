import React from 'react';

const Categories = ({categories ,onClick}) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => (
        <button 
        key={index}
        className="filter-btn"
        type="button" 
        onClick={() => onClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
};

export default Categories;
