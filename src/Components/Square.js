const Square = ({ onclick, value, index }) => {
  return (
    <button className="square-grid" onClick={() => onclick(index)}>
      {value}
    </button>
  );
};

export default Square;
