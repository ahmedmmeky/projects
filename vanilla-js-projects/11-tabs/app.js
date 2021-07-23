const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const idOfBtn = e.target.dataset.id;
  if (idOfBtn) {
    //remove active from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    //hide all articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const articleElement = document.getElementById(idOfBtn);
    articleElement.classList.add("active");
  }
});
