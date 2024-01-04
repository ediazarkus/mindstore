import Navbar from './Componets/Navbar/Navbar';
import Product from './Componets/ProductList/Product';
import Cart from './Componets/CartShop/Cart';
import { AppBody, AppContainer } from './AppStyles';

function App() {
  return (
    <AppContainer>
      <Navbar />
      <AppBody>
        <Product />
        <Cart />
      </AppBody>
    </AppContainer>
  );
}

export default App;
