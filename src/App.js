import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import OrderForm from './OrderForm';
import { OrderProvider } from './OrderContext';

function App() {
  return (
    <OrderProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/order/:id" element={<OrderForm />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;
