import './styles/Shop.scss'
import ShopHeader from './ShopHeader';
import Filters from './Filters';
import React from 'react';
import Products from './Products';
import Menu from './Menu';
import { useParams } from 'react-router-dom';

const filters = {
  "tous": "Tous",
  "pains-au-levain": "Pains au levain",
  "pains-a-la-levure": "Pains à la levure",
  "baguettes": "Baguettes",
  "petits-pains": "Petits pains",
}

function Shop() {
  let { filter, product } = useParams();

  return (
    <div className="Shop">
      <Menu activeTab="nos-produits" height={0} />
      <ShopHeader />
      <Filters filters={filters} selectedFilter={filter} />
      <Products />
    </div>
  );
}

export default Shop;
