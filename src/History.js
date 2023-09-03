import React from 'react'
import './styles/History.scss'

function History() {
  return (
    <div className="History">

      <img src='./images/history-background.png' alt='' style={{width: '100%'}} />
      
      <div className="summary-section">
        <div className="side-text">

        </div>
        <div className="summary-collage">
          <img className="summary-image-1" src='/images/history-image1.png' alt='Image 1' />
          <img className="summary-image-2" src='/images/history-image2.png' alt='Image 2' />
          <img className="summary-image-3" src='/images/history-image3.png' alt='Image 3' />
        </div>
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
