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

  console.log(searchTerm);
  return (
    <AppContainer>
      <Navbar onInputChange={handleInputChange} />
      <AppBody>
        <Product searchTerm={searchTerm} />
        <Cart />
      </AppBody>
    </AppContainer>
  );
}

export default App;
