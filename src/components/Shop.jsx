import { shop } from "../lib/gingerbreadData";

export default function Shop({ onPurchase }) {
  return (
    <div className="shop-div">
      {shop.map((item, index) => (
        <ul key={index} onClick={() => onPurchase(item.cost, item.increase)}>
          <li>{item.name}</li>
          <li>{item.cost}</li>
          <li className="li-end">{item.increase}</li>
        </ul>
      ))}
    </div>
  );
}
