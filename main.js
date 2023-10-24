const portfolioBtn = document.querySelector(".btn_lab");
const portfolioList = document.querySelector(".img");
function togglePortfolioVisibility() {
  portfolioList.classList.toggle("hide");
}
portfolioBtn.addEventListener("click", togglePortfolioVisibility);