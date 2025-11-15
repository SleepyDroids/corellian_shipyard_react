import { useMemo } from "react";
import { useNavigate } from "react-router";

export default function Cart({ cart, setCart }) {
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
                  {item.cost_in_credits === "unknown"
                    ? "Contact dealer"
                    : item.cost_in_credits}
                  <br />
                  Quantity: {item.quantity}
                </div>
              );
            })
          : "Cart is currently empty."}

        <div className="cart-page-footer">
          <p>Cart Total: {totalQuantity || 0}</p>
          <button onClick={() => setCart([])}>Clear cart</button>
        </div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}
