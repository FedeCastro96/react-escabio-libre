import PropTypes from "prop-types";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <ul>
        <li>🍻</li>
        <li>🍷</li>
        <li>🍸</li>
        <li>🥂</li>
        <li>🍾</li>
        <li>🍶</li>
        <li>🍹</li>
      </ul>
    </div>
  );
};

ItemListContainer.propTypes = {
  greeting: PropTypes.string.isRequired,
  // no entiendo bien que hace esta linea, pero me saltaba un error y esta fue la solución propuesta por el chat.
};

export default ItemListContainer;
