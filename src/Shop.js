import './styles/Shop.scss'
import ShopHeader from './ShopHeader';
import Filters from './Filters';
import React from 'react';
import Products from './Products';
import Menu from './Menu';
import { useParams } from 'react-router-dom';
import allProducts from './data/products.json';
import { groupBy } from './helpers';

const filters = {
  "tous": "Tous",
  "pains-au-levain": "Pains au levain",
  "pains-a-la-levure": "Pains à la levure",
  "baguettes": "Baguettes",
  "petits-pains": "Petits pains",
}

function Shop() {
  let { filter } = useParams();

  let products = []
  if (Object.keys(filters).includes(filter)) {
    products = groupBy(allProducts, "categorie")[filter] || allProducts;
  } else {
    products = Object.values(allProducts)
  }

  return (
    <div className="Shop">
      <Menu activeTab="nos-produits" height={0} />
      <ShopHeader />
      <Filters filters={filters} selectedFilter={filter} />

      <Products products={products} />
    </div>
  );
}

export default Shop;
