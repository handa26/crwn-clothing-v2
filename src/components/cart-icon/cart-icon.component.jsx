import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import { CartIconContainer, ShoppingIcon, ItemCount } from "./cart-icon.styles";

const CartIcon = () => {
  const { toggleCart, setToggleCart, cartCount } = useContext(CartContext);

  const toggleHandler = () => {
    setToggleCart(!toggleCart);
  };

  return (
    <CartIconContainer onClick={toggleHandler}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
