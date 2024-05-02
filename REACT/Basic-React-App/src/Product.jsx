import "./Product.css";
import Price from "./Price";

function Product({ title, idx }) {
  let oldPrice = ["1235", "567", "1267", "4560"];
  let newPrice = ["1500", "875", "1820", "8999"];
  let Description = [
    ["8,000 DPI", "5 programmable buttons"],
    ["intuitive surface", "designed for ipad pro"],
    ["designed for ipad pro", "intutive surface"],
    ["wireless", "optical orientation"],
  ];

  // let isDiscount = price >= 30000;
  // let styles = { backgroundColor: isDiscount ? "blue" : "Pink" };

  return (
    <div className="product">
      <h4> {title} </h4>
      <p>{Description[idx][0]}</p>
      <p>{Description[idx][1]}</p>
      <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
    </div>

    //   <div className="product" style={styles}>
    //     <h3> {title} </h3>
    //     <h5>Price: {price}</h5>
    //     {isDiscount && <p>Discount of : 5%</p>}
    //   </div>
  );

  // const list = features.map((feature) => <li>{feature}</li>);
  // if (price>30000) {

  //   return (
  //     <div className="product">
  //       <h3> {title} </h3>
  //       <h5>Price: {price}</h5>
  //       <p>Discount of 5%</p>
  //       {/* <p>{ features.map((feature) => <li>{feature}</li>)}</p> */}

  //     </div>
  //   );
  // }else{
  //   return (
  //     <div className="product">
  //       <h3> {title} </h3>
  //       <h5>Price: {price}</h5>
  //       {/* <p>{ features.map((feature) => <li>{feature}</li>)}</p> */}

  //     </div>
  //   );

  // }
}

export default Product;
