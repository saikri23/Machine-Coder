const config = [
  {
    title: "Section 1",
    content: "Content for section 1",
  },
  {
    title: "Section 2",
    content: "Content for section 2",
  },
  {
    title: "Section 3",
    content: "Content for section 3",
  },
];

document.addEventListener("DOMContentLoaded", function () {
  const accContainer = document.querySelector("#acc-cont");

  config.forEach((item, index) => {
    const accItem = document.createElement("div");
    accItem.classList.add("acc-item");

    const accHeader = document.createElement("div");
    accHeader.classList.add("acc-header");
    accHeader.textContent = item.title;

    const accContent = document.createElement("div");
    accContent.classList.add("acc-content");
    accContent.innerHTML = `<p>${item.content}</p>`;

    accItem.appendChild(accHeader);
    accItem.appendChild(accContent);
    accContainer.appendChild(accItem);
    if (index === 0) {
      accItem.classList.add("active");
      accContent.style.display = "block";
    }
  });

  accContainer.addEventListener("click", (event) => {
    const header = event.target.closest(".acc-header"); //It will start searching the element it self and go up through ancestors until it finds one
    if (!header) return;
    const sectionItem = header.parentNode;
    const content = sectionItem.querySelector(".acc-content");
    const isActive = sectionItem.classList.contains("active");
    document.querySelectorAll(".acc-item").forEach((item) => {
      item.classList.remove("active");
      item.querySelector(".acc-content").style.display = "none";
    });

    if (!isActive) {
      sectionItem.classList.add("active");
      content.style.display = "block";
    }
  });
});
