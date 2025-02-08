import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();

  const fetchProducts = async () => {
    let res = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${(page - 1) * 10}`
    );
    let data = await res.json();

    if (data && data.products) {
      setProducts(data.products);
      setTotalPages(Math.ceil(data.total / 10));
      console.log(products);
    }
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

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
          {products.map((prod) => {
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
          className={page === 1 ? "disable" : ""}
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
