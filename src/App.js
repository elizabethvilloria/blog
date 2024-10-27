import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Post from './Post';
import OrderForm from './OrderForm';
import OrderConfirmation from './OrderConfirmation';
import { OrderProvider } from './OrderContext';
import Navigation from './Navigation';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import TipsAndTricks from './TipsAndTricks';

function App() {
  return (
    <OrderProvider>
      <Router>
        <div className="app-container">
          <Navigation />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/post/:id" element={<Post />} />
              <Route path="/order/:id" element={<OrderForm />} />
              <Route path="/order-confirmation" element={<OrderConfirmation />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/tips" element={<TipsAndTricks />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </OrderProvider>
  );
}

export default App;
