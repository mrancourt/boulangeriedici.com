import './styles/Copyright.scss'

function Copyright() {
  return (
    <div className="Copyright">
      © Boulangerie D'ici {new Date().getFullYear()}. Tous droits réservés.
    </div>
  );
}

export default Copyright;
