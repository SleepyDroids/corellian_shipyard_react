import { useMemo } from "react";
import { useNavigate } from "react-router";

import { X } from "lucide-react"

export default function Cart({ cart, clearCart, handleRemove }) {
  let navigate = useNavigate();
  const totalQuantity = useMemo(() => {
    return cart.reduce((acc, ship) => acc + ship.quantity, 0);
  }, [cart]);

  return (
    <>
      <div className="cart-page">
        {cart.length > 0
          ? cart.map((item) => {
              return (
                <div className="cart-page-item" key={item.url}>
                  {item.name} <br />
                  ₹ {item.cost_in_credits === "unknown"
                    ? "Contact dealer"
                    : Number(item.cost_in_credits * item.quantity)}
                  <br />
                  Quantity: {item.quantity} 
                  <br />
                  <button onClick={() => handleRemove(item.name)}><X size={22} /></button>
                </div>
              );
            })
          : "Cart is currently empty."}

        <div className="cart-page-footer">
          <p>Starships Total: {totalQuantity || 0}</p>
          {cart.length > 0 && (
            <button onClick={clearCart}>Clear cart</button>
          )}
        </div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}
