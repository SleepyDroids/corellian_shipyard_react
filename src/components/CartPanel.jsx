import { useMemo } from "react";
// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.

export default function CartPanel({ cart, show, clearCart }) {

    // The reason I needed useMemo was because in my addToCart function, React was rendering the previous state of cart total
    // and when I'd add a different ship to the cart, it didn't "add" together the previous render so totals were showing up as "57" instead of adding 5 + 7 per quantity of a ship
    // useMemo caches that calculation so it stays consistent and like useEffect, it needed a dependency of cart
    // so whenever I am adding to cart, the reducer is taking the previous quantity of ship and then adding the new ship quantity (it is also initialized to 0)
const totalQuantity = useMemo(() => {
    return cart.reduce((quantity, ship) => quantity + ship.quantity, 0);
  }, [cart]);

  return (
    <div id="cart-panel" className={!show ? "visible" : ""}>
      {cart.length > 0
        ? cart.map((item) => {
            return (
              <div className="cart-item" key={item.url}>
                {item.name} <br />
                ₹ {item.cost_in_credits === "unknown"
                  ? "Contact dealer"
                  : Number(item.cost_in_credits * item.quantity)}
                <br />
                Quantity: {item.quantity}
              </div>
            );
          })
        : "Cart is currently empty."}
      <p>Cart ({totalQuantity || 0})</p> <br />
      {cart.length > 0 && (
        <button onClick={clearCart}>Clear cart</button>
      )}
    </div>
  );
}