import { useMemo } from "react";
// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

export default function CartPanel({ cart, ships, setCart }) {

  const totalQuantity = useMemo(() => {
    return cart.reduce((acc, ship) => acc + ship.quantity, 0);
  }, [cart]);

  return (
    <div className="cart-panel">
      {cart.length > 0
        ? cart.map((item) => {
            return (
              <div className="cart-item" key={item.url}>
                {item.name} <br />
                {item.cost_in_credits === "unknown"
                  ? "Contact dealer"
                  : item.cost_in_credits}
                <br />
                Quantity: {item.quantity}
              </div>
            );
          })
        : "Cart is currently empty."}
      <p>Cart ({totalQuantity || 0})</p> <br />
      {cart.length > 0 && (
        <button onClick={() => setCart([])}>Clear cart</button>
      )}
    </div>
  );
}

// {cart.length > 0 ? cart.map((item) => {
//         let count = 0;
//         return count += Number(item.quantity);
//       }) : 0 }
