export default function CartPanel({ cart, ships, setCart }) {
  return (
    <div className="cart-panel">
      {cart.length > 0
        ? cart.map((item) => {
            const duplicateShip = ships.findIndex(
              (ship) => ship.url !== item.url
            );
            let quantity = 1;
            console.log(duplicateShip);
quantity += duplicateShip

            return (
              <div className="cart-item" key={item.url}>
                {item.name} <br />
                {item.cost_in_credits === "unknown"
                  ? "Contact dealer"
                  : item.cost_in_credits} <br />
                  {/* Quantity: {quantity} */}
              </div>
            );
          })
        : "Cart is currently empty."}

      <p>Cart ({cart.length})</p> <br />
      
      {cart.length > 0 && <button onClick={() => setCart([])}>Clear cart</button>}
      
    </div>
  );
}
