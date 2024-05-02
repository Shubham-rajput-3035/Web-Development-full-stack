export default function Price({ oldPrice, newPrice }) {
  let oldStyles = {
    textDecorationLine: "Line-through",
  };
  let newStyle = {
    fontWeight: "bold",
  };

  let styles = {
    backgroundColor: "#e0c367",
    height: "30px",
    width: "180px",
    borderRadius: "20px",
  };
  return (
    <div style={styles}>
      <span style={oldStyles}> {oldPrice} </span>
      &nbsp;
      <span style={newStyle}> {newPrice} </span>
    </div>
  );
}
