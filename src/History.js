import React from 'react'
import Collage from './Collage';
import HeaderHistory from './HeaderHistory';
import './styles/History.scss'
import Menu from './Menu';

function History() {
  return (
    <div className="History">
      <Menu activeTab="notre-histoire" height={0} />
      <HeaderHistory />

      {/* TODO: rename that shitty name */}
      <div className="section">
      <div className="summary-section">
        <div className="side-text"> </div>

        {/*TODO: fix collage mobile and whatnot */}
        <Collage
          images={[
            "/images/history-image1.png",
            "/images/history-image2.png",
            "/images/history-image3.png",
          ]}
          styles={[
            {top: 1200, zIndex: 1},
            {top: 1200, zIndex: 2},
            {top: 1200, zIndex: 3}
          ]}
        />

        <div className="summary-text">
          La Boulangerie d’ici,
          fondée en 1997 par
          mon père Jean-Marc
          Rancourt et ma mère
          Louise Boily.
          <br/>
        </div>
      </div>
      <div className="history-main">
        <h3>Du rang des carreaux, à  Saint-Côme</h3>

        <p>
          Fondée en 1997 par Jean-Marc Rancourt et Louise Boily, la Boulangerie d'ici raconte une histoire de passion familiale. Poussé par l'envie de nouveauté, Jean-Marc s'est formé lors d'un stage de trois jours dans une boulangerie de Sherbrooke, qui, malheureusement, n'existe plus aujourd'hui. De retour à Saint-Philibert, armé d'un pétrin, d'un four et de quelques fournitures essentielles, il a commencé son aventure.
        </p>

        <h4>
          Petit à petit, il acquit de l’expérience et attira de nouveaux clients.
        </h4>

        <p>
          Avec le temps, l'expérience s'est accumulée, et avec elle, une clientèle fidèle et croissante. Après 22 ans de dévouement, de pain confectionné avec amour et passion, Jean-Marc a confié les rênes de la boulangerie à son fils, Étienne Rancourt.
        </p>

        <p>
          Depuis cette transition en 2019, je m'engage, en tant qu'Étienne, à perpétuer cet héritage. Je me suis donné pour mission de vous proposer le meilleur pain, élaboré à partir d'ingrédients naturels et façonné avec cœur et passion. Aujourd'hui, la Boulangerie d'ici est fière de servir ses délices dans 23 points de vente répartis dans 11 villes et villages.
        </p>

      </div>

      </div>
    </div>
  )
}

export default History
