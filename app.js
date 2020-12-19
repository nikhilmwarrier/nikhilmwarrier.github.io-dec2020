function cancelLoader(loaderSelector, delay) {
  const loader = document.querySelector(loaderSelector);
  loader.classList.add("loader");
  setTimeout(() => {
    loader.style.display = "none";
    loader.remove();
  }, delay);
}
