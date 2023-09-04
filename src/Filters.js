import './styles/Filters.scss'
import React from 'react';
import { Link } from "react-router-dom";

function Filters({filters, selectedFilter}) {
  return (
    <div className="Filters">
      {Object.keys(filters).map((filter, i) => {
        let selected = false;
        if ((!selectedFilter && i === 0) || selectedFilter === filter ) {
          selected = true;
        }
        return (
          <Link key={filter} className={`link dark ${selected ? "active" : ''}`} to={`/nos-produits/categorie/${filter}`} state={{ from: 'origin' }} >
            {filters[filter]}
          </Link>
          )
      })}
    </div>
  );
}

export default Filters;
