const mehmet = document.querySelectorAll(".sutun");

mehmet.forEach((sutun) => {
  sutun.addEventListener("click", () => {
    hasan();
    sutun.classList.add("active");

    // console.log(123);
  });
  //   console.log(panels);
});
// hasanali gelio
function hasan() {
  mehmet.forEach((sutun) => {
    sutun.classList.remove("active");
  });
}

// const hasan = [1, 2, 3];
// hasan.forEach((hasan) => {
//   console.log(hasan);
// });
// var
// let const