import './styles/Shop.scss'
import ShopHeader from './ShopHeader';
import Filters from './Filters';
import React from 'react';
import Products from './Products';

function Shop() {
  return (
    <div className="Shop">
      <ShopHeader />
      <Filters />
      <Products />
    </div>
  );
}

export default Shop;
