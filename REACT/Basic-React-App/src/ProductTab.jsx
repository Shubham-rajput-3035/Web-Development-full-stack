import Product from "./Product.jsx";

function ProductTab() {
  // let features = [<li> "Hii-teach"</li>, <li>"Durable" </li>, <li> "Fast"</li>];

  let styles = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={styles}>
      <Product title={"Logitech MX Master"} idx={0} />
      <Product title={"Apple Pencile(2nd Gen) "} idx={1} />
      <Product title={"Zebronics Zeb-transformer"} idx={2} />
      <Product title={"Petronics Toad 23"} idx={3} />

      {/* <Product title="Phone" price={20000} />
      <Product title="Laptop" price={65000} />
      <Product title="Pen" price={50} />  */}
    </div>
  );
}
export default ProductTab;
