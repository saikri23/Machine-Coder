document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector(".app");

  let products = [];
  let page = 1;

  async function fetchProducts() {
    let res = await fetch("https://dummyjson.com/products?limit=100");
    let data = await res.json();

    if (data && data.products) {
      products = data.products;
      console.log(products);
      render();
    }
  }

  function render() {
    const prodCont = document.createElement("div");
    prodCont.classList.add("product");

    const pagination = document.createElement("div");
    pagination.classList.add("pagintion");

    pagination.addEventListener("click", (event) => {
      console.log(event);
      let target = event.target;
      if (target.nodeName === "BUTTON") {
        if (target.innerText === "◀️") {
          selectPageHandler(page - 1);
        } else if (target.innerText === "▶️") {
          selectPageHandler(page + 1);
        } else {
          selectPageHandler(+target.innerText);
        }
      }
    });

    if (products.length > 0) {
      products.slice(page * 10 - 10, page * 10).forEach((product) => {
        const prodElement = document.createElement("div");
        prodElement.classList.add("product_single");
        prodElement.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}" />
            <span>${product.title}</span>`;
        prodCont.appendChild(prodElement);
      });

      //Previous button
      if (page > 1) {
        const pvsBtn = createPaginationButton("◀️");
        pagination.appendChild(pvsBtn);
      }

      //Pagination buttons
      for (let i = 0; i < products.length / 10; i++) {
        const paginationBtn = createPaginationButton(i + 1, page === i + 1);
        pagination.appendChild(paginationBtn);
      }

      //next button
      if (page < products.length / 10) {
        const nxtBtn = createPaginationButton("▶️");
        pagination.appendChild(nxtBtn);
      }
    }
    app.innerHTML = "";
    app.append(prodCont);
    app.append(pagination);
  }

  const createPaginationButton = (text, isSelected = false) => {
    const btn = document.createElement("button");
    btn.textContent = text;
    if (isSelected) {
      btn.classList.add("selected");
    }
    return btn;
  };
  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage > 0 &&
      selectedPage <= products.length / 10 &&
      selectedPage !== page
    ) {
      page = selectedPage;
      render();
    }
  };

  fetchProducts();
});
