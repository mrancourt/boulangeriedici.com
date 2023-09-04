import './styles/Filters.scss'
import React from 'react';

function Filters({filters, selectedFilter}) {
  return (
    <div className="Filters">
      {Object.keys(filters).map((filter, i) => {
        let selected = false;
        if (!selectedFilter && i === 0 || selectedFilter === filter ) {
          selected = true;
        }
        return <a className={`link dark ${selected ? "active" : ''}`} href={`/nos-produits/filters/${filter}`}>{filters[filter]}</a>
      })}
    </div>
  );
}

export default Filters;
