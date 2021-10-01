import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';

const OrderReview = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemove = (key) => {
    const newCard = cart.filter((product) => product.key !== key);
    setCart(newCard);
    removeFromDb(key);
  };

  return (
    <div className='shop-container'>
      <div className='product-container'>
        {cart.map((product) => (
          <ReviewItem
            key={product.key}
            product={product}
            handleRemove={handleRemove}
          ></ReviewItem>
        ))}
      </div>
      <div className='shop-container'>
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default OrderReview;