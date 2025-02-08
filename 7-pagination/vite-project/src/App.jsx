import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(products.length / 10);

  const fetchProducts = async () => {
    let res = await fetch("https://dummyjson.com/products?limit=100");
    let data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      console.log(products);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handlePageSelect = (selectedPage) => {
    if (
      selectedPage > 0 &&
      selectedPage <= totalPages &&
      page !== selectedPage
    ) {
      setPage(selectedPage);
    }
  };

  return (
    <div>
      {products.length > 0 && (
        <div className="products">
          {products.slice(page * 10 - 10, page * 10).map((prod) => {
            return (
              <span key={prod.id} className="products__single">
                <img src={prod.thumbnail} alt={prod.title} />
                <span>{prod.title}</span>
              </span>
            );
          })}
        </div>
      )}

      <div className="pagination">
        <span
          className={page === 1 ? "disable" : 0}
          onClick={() => handlePageSelect(page - 1)}
        >
          ◀️
        </span>
        {[...Array(totalPages)].map((_, index) => (
          <span
            key={index}
            className={page === index + 1 ? "selected" : ""}
            onClick={() => handlePageSelect(index + 1)}
          >
            {index + 1}
          </span>
        ))}
        <span
          className={page === totalPages ? "disable" : 0}
          onClick={() => handlePageSelect(page + 1)}
        >
          ▶️
        </span>
      </div>
    </div>
  );
}

export default App;
