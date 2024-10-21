import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import OrderForm from './OrderForm';
import OrderConfirmation from './OrderConfirmation';
import { OrderProvider } from './OrderContext';
import Navigation from './Navigation';
import About from './About';

function App() {
  return (
    <OrderProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/order/:id" element={<OrderForm />} />
          <Route path="/order-confirmation" element={<OrderConfirmation />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;
