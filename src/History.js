import React from 'react'
import './styles/History.scss'
import Collage from './Collage';
import HeaderHistory from './HeaderHistory';

function History() {
  return (
    <div className="History">

      <HeaderHistory />
      
      <div className="summary-section">
        <div className="side-text"> </div>

        <Collage
          images={[
            "/images/history-image1.png",
            "/images/history-image2.png",
            "/images/history-image3.png",
          ]}
        />

        <div className="summary-text">
          La Boulangerie d’ici,
          fondée en 1997 par
          mon Père Jean-Marc
          Rancourt et ma mère
          Louise Boily.
          <br/>
        </div>
      </div>
      <div className="history-main">
        <h3>Some Welcome Title</h3>

        <p>
          Envie de changement, Jean-Marc a décidé d’aller suivre une formation de 3 jour dans une boulangerie dans la ville de Sherbrooke, qui est malheureusement fermé à ce jour. Revenu à St-philibert, il a acheté un pétrin, un four et quelque fourniture de boulangerie.
        </p>

        <h4>
          Petit à petit il acquit de l’expérience et de nouveau client.
        </h4>

        <p>
          Après 22 ans (2019) de fabrication de pains fait avec amour et passion, il cède la boulangerie a son fils Étienne Rancourt.
        </p>

        <p>
          Depuis 2019 lors de mon acquisition de la boulangerie, je me suis mis comme objectif de vous offrir le meilleur pain qui soit avec des ingrédients naturel tout en le faisant avec cœur et passion.
        </p>

        <p>
          A ce jour la boulangerie d’ici dessert dans 19 point de vente dans 9 ville et village.
        </p>
      </div>

    </div>
  )
}

export default History
