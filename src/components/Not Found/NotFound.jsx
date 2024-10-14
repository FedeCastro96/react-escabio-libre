import NotFoundImg from "./NotFound.png";
const NotFound = () => {
  return (
    <div>
      <h1>Página no encontrada 🤔</h1>
      <p>
        Lo sentimos, la página que estás buscando no existe. ¡Tal vez ya tomaste
        demasiado!
      </p>
      <img src={NotFoundImg} alt="Not-found-logo" />
    </div>
  );
};

export default NotFound;
