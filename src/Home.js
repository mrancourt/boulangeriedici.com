import React from 'react';

function Home() {
  return (
    <div className="Home">
      <div className="section section-features text-light pain1">
        <div className="container grid-lg">
          <div className="columns">
            <div className="column col-6 col-mx-auto text-dark text-bold p-2" style={{backgroundColor: "rgba(255,255,255,.4)"}}>
              une entreprise fièrement établie dans le patrimoine de la Beauce depuis 22 ans.
              De père en fils, La Boulangerie d'ici vous offre des produits artisanal confectionnées avec amour.
            </div>
          </div>
        </div>
      </div>
      <div className="section section-features">
        <div className="container grid-xl centered">
          <h1 className="text-center">Pain Frais</h1>
          <p className="text-center container col-4 col-mx-auto">
            Nos produis sont disponnibles à plusieurs <a href="">points de ventes</a> dans la région. De ce fait, la vente au public est limitée. Par conte, il nous fera plaisir de vous servir lorsque nous sommes à la boulangerie.
          </p>
          <div className="columns features-showcase blur-animation">
            <div className="column col-10 col-mx-auto text-center">
              <div className="card animated fadeInUp faster">
                <div className="card-header bg-success">
                  <div className="card-title">
                    <h2>Ouvert</h2>
                  </div>
                </div>
                <div>
                  <img height="100" src={`${process.env.PUBLIC_URL}/images/pain2.jpg`} className="img-responsive" alt="chart2"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;