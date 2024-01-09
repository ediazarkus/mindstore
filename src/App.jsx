import Navbar from './Componets/Navbar/Navbar';
import Product from './Componets/ProductList/Product';
import Cart from './Componets/CartShop/Cart';
import { AppBody, AppContainer } from './AppStyles';
import { useState } from 'react';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (term) => {
    setSearchTerm(term);
  };

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, cantidad: 1 }]);
    }
  };

  const handleRemoveItem = (itemId) => {
    const targetProduct = cartItems.find((item) => item.id === itemId);

    if (targetProduct) {
      if (targetProduct.cantidad > 1) {
        const updatedCartItems = cartItems.map((item) =>
          item.id === itemId ? { ...item, cantidad: item.cantidad - 1 } : item
        );
        setCartItems(updatedCartItems);
      } else {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        setCartItems(updatedCartItems);
      }
    }
  };

  const handleAddItem = (itemId) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, cantidad: item.cantidad + 1 } : item
    );

    setCartItems(updatedCartItems);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <AppContainer>
      <Navbar onInputChange={handleInputChange} />
      <AppBody>
        <Product searchTerm={searchTerm} addToCart={addToCart} />
        <Cart
          cartItems={cartItems}
          onRemoveItem={handleRemoveItem}
          handleAddItem={handleAddItem}
          handleClearCart={handleClearCart}
        />
      </AppBody>
    </AppContainer>
  );
}

export default App;
