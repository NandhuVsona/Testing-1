document.addEventListener("DOMContentLoaded", () => {
  const isdark = JSON.parse(localStorage.getItem("mode"));
  let container = document.querySelector(".container");
  console.log(isdark);
  if (isdark == "Dark") {
    container.classList.add("dark");
  }
  else{
    container.classList.remove("dark");
  }

  let searchBar = document.querySelector(".search");

  let hampage = document.querySelector(".hampage");

  // searchBar.addEventListener("input", (e) => filterData(e.target.value));

  function filterData(searchTerm) {
    let profile = document.querySelectorAll(".profile");
    profile.forEach((list) => {
      if (list.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        list.parentElement.classList.remove("hide_list");
        list.parentElement.classList.add("show_list");
      } else {
        list.parentElement.classList.add("hide_list");
      }
    });
  }

  let menu = document.querySelector(".menu");
  let options = document.querySelector(".options");
  let closebtn = document.querySelector(".close");
  let filterOptions = document.querySelector(".filter-options");
  // menu.addEventListener("click", menuClose);
  // closebtn.addEventListener("click", menuClose);
  function optionController() {
    options.classList.toggle("hide");
    menu.classList.toggle("hide");
    closebtn.classList.toggle("hide");
  }
  // function menuClose() {
  //   if (!filterOptions.classList.contains("hide")) {
  //     filterOptions.classList.toggle("hide");
  //   }
  //   optionController();
  // }

  // let filter = document.querySelector(".filter");
  // filter.addEventListener("click", showDept);
  function showDept() {
    if (!options.classList.contains("hide")) {
      optionController();
    }

    filterOptions.classList.toggle("hide");
  }

  // let isClick = document.querySelectorAll(".options ul a");
  // isClick.forEach(option =>{
  //   option.addEventListener('click',menuClose)
  // })
});

let theme = document.querySelector(".theme");
theme.addEventListener("click", changeTheme);
function changeTheme() {
  let container = document.querySelector(".container");
  container.classList.toggle("dark");
  if (container.classList.contains("dark")) {
    localStorage.setItem("mode", JSON.stringify("Dark"));
  }
  else{
    localStorage.setItem("mode", JSON.stringify("Light"));
  }
}
