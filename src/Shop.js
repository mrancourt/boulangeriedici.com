import React from 'react';
import Menu from './Menu';
import ShopHeader from './ShopHeader';
import Products from './Products';
import Filters from './Filters';
import { useParams } from 'react-router-dom';
import { groupBy } from './helpers';
import allProducts from './data/products.json';
import './styles/Shop.scss'

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
      <div className="section">
        <div className="hide-on-mobile">
          <Filters filters={filters} selectedFilter={filter} />
        </div>
        <Products products={products} />
      </div>
    </div>
  );
}

export default Shop;
