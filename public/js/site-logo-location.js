function set_logo_position(){
    var h2_collection = document.getElementsByClassName("fw1 f5 f3-l white-80 measure-wide-l center lh-copy mt3 mb4");

    var h2 = h2_collection[0];

    var logo_collect = document.getElementsByClassName("site-logo");

    var logo = logo_collect[0];

    logo.style.left = h2.offsetLeft;

    console.log(logo.offsetLeft);
    console.log(h2.offsetLeft);
}

document.addEventListener("DOMContentLoaded", () => {
    set_logo_position;
  });