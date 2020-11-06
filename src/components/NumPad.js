function NumberSquare(props) {
  return (
    <button className="number-square">
      {props.value}
    </button>
  );
}

function NumPad() {
  return (
    <div className="numpad">
      <div className="numpad-row">
        <NumberSquare value={1} />
        <NumberSquare value={2} />
        <NumberSquare value={3} />
      </div>
      <div className="numpad-row">
        <NumberSquare value={4} />
        <NumberSquare value={5} />
        <NumberSquare value={6} />
      </div>
      <div className="numpad-row">
        <NumberSquare value={7} />
        <NumberSquare value={8} />
        <NumberSquare value={9} />
      </div>
      <div className="numpad-row">
        <NumberSquare value="+ -" />
        <NumberSquare value={0} />
        <NumberSquare value="." />
      </div>
    </div>
  );
}


export default NumPad;
