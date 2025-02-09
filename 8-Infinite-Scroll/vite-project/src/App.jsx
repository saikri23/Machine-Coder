import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState();

  async function fetchProducts() {
    setIsLoading(true);
    try {
      const res = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${page * 10}`
      );
      const data = await res.json();
      setPage((pvs) => pvs + 1);
      console.log("sai", page);
      setProducts((pvsProds) => [...pvsProds, ...data.products]);
      setTotalProducts(data.total);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  function throttle(cb, d) {
    let flag = true;
    return function (...args) {
      if (flag) {
        cb(...args);
        setTimeout(() => {
          flag = true;
        }, d);
        flag = false;
      }
    };
  }

  const handleScroll = throttle(() => {
    if (
      window.scrollY + window.innerHeight + 700 >= document.body.scrollHeight &&
      !isLoading &&
      page * 10 <= totalProducts
    ) {
      fetchProducts();
    }
  }, 100);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Infinite Scrolling</h1>
      {products.length > 0 && (
        <div className="product">
          {products.map((product, i) => {
            return (
              <div key={i} className="product__single">
                <img src={product.thumbnail} alt={product.title} />
                <span>{product.title}</span>
              </div>
            );
          })}
        </div>
      )}
      {isLoading && <h2>Loading...</h2>}
    </div>
  );
}

export default App;
