import './App.css';
import products from './products.js';
import ProductCard from './ProductCard.js';

function App() {
  return (
    <div>
      <h1>Cakes Factory</h1>
      <p>The best homemade cakes and pastries in Kuwait 🇰🇼</p>
      <img src='https://www.expedit.eu/media/11173/bakery-solutions03.jpg?mode=crop&heightratio=0.4845360824742268041237113402&width=1110' class='image'/>
      <h1>Our Products</h1>
      <div className='products-list'>
        {products.map((product) => (
          <ProductCard image={product.image} name={product.name} price={product.price}/>
        ))}
      </div>
    </div>
  );
}

export default App;
