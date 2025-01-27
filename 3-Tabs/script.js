const tabsData = [
  {
    id: "tab1",
    title: "Tab 1",
    content: "You are currently in Tab 1",
  },
  {
    id: "tab2",
    title: "Tab 2",
    content: "You are currently in Tab 2",
  },
  {
    id: "tab3",
    title: "Tab 3",
    content: "You are currently in Tab 3",
  },
  {
    id: "tab4",
    title: "Tab 4",
    content: "You are currently in Tab 4",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  let activeTab = tabsData[1].id;

  function renderTabs() {
    const tabContainer = document.querySelector("#tabsContent");
    const contentContainer = document.querySelector("#containerContent");
    tabsData.forEach((tab) => {
      const tabButton = document.createElement("button");
      tabButton.textContent = tab.title;
      tabButton.className = "tabLinks";
      tabButton.setAttribute("data-id", tab.id); //Different ways of making use of id or custom attribute
      tabContainer.appendChild(tabButton);

      const contentDiv = document.createElement("div");
      contentDiv.innerHTML = `<h2>${tab.title}</h2><p>${tab.content}</p>`;
      contentDiv.className = "tabContent";
      contentDiv.id = tab.id; //Different ways of making use of id or custom attribute
      contentContainer.appendChild(contentDiv);
    });
    tabContainer.addEventListener("click", (event) => {
      // concept of event delegation
      if (event.target.matches(".tabLinks")) {
        let id = event.target.getAttribute("data-id");
        if (id !== activeTab) {
          //This is mandatory check which helps us to get rid of unnecessary api calls for config
          openTab(id);
          activeTab = id;
        }
      }
    });
  }

  function openTab(tabId) {
    const tabLinks = document.querySelectorAll(".tabLinks");
    const tabContents = document.querySelectorAll(".tabContent");

    tabLinks.forEach((link) => link.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    document.getElementById(tabId).classList.add("active");
    document
      .querySelector(`button[data-id="${tabId}"]`)
      .classList.add("active");
  }

  renderTabs();
  document.getElementById(activeTab).classList.add("active");
  document
    .querySelector(`button[data-id="${activeTab}"]`)
    .classList.add("active");
});
