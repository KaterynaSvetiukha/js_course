function tabs(tabsSelector, tabsContentSelector, activeClass) {
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector);

  function hideTabContent() {
    tabsContent.forEach((tab) => {
      tab.classList.add("hide");
      tab.classList.remove("show", "fade");
    });

    tabs.forEach((tab) => {
      tab.classList.remove(activeClass);
    });
  }

  function showTabContent(i = 0) {
    // i = 0 по умолчанию
    if (i >= 0 && i < tabsContent.length) {
      tabsContent[i].classList.add("show", "fade");
      tabsContent[i].classList.remove("hide");
      tabs[i].classList.add(activeClass);
    }
  }

  hideTabContent();
  showTabContent(); // Показать первый элемент по умолчанию

  tabs.forEach((tab, i) => {
    tab.addEventListener("click", () => {
      hideTabContent();
      showTabContent(i);
    });
  });
}

export default tabs;
