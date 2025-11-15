export default function CartPanel({ cart, ships }) {
  return (
    <div className="cart-panel">
      {cart.length > 0 ?
        cart.map((item) => {
          return (
            <div className="cart-item" key={item.url}>
              {item.name} <br />
              {item.cost_in_credits}
            </div>
          );
        }) : "Cart is currently empty."}

      <p>Cart ({cart.length})</p>
    </div>
  );
}
