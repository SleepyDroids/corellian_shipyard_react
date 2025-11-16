import { useMemo } from "react";
import { useNavigate } from "react-router";

import { X, Minus, Plus } from "lucide-react";

export default function Cart({
  cart,
  clearCart,
  handleRemove,
  increase,
  decrease,
}) {
  const navigate = useNavigate();
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
                  {item.name} <br />₹{" "}
                  {item.cost_in_credits === "unknown"
                    ? "Contact dealer"
                    : Number(item.cost_in_credits * item.quantity)}
                  <div className="item-qtn">
                    <button className="btn-qtn" onClick={() => decrease(item)}>
                      <Minus size={15} />
                    </button>
                    <span className="item-qtn-num">{item.quantity}</span>
                    <button className="btn-qtn" onClick={() => increase(item)}>
                      <Plus size={15} />
                    </button>
                  </div>
                  <button onClick={() => handleRemove(item.name)}>
                    <X size={22} />
                  </button>
                </div>
              );
            })
          : "Cart is currently empty."}

        <div className="cart-page-footer">
          <p>Starships Total: {totalQuantity || 0}</p>
          {cart.length > 0 && <button onClick={clearCart}>Clear cart</button>}
        </div>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
    </>
  );
}
