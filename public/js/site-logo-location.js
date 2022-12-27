function set_logo_position(){
    var h2_collection = document.getElementsByClassName("supporting-text");

    var h2 = h2_collection[0];

    var logo_collect = document.getElementsByClassName("site-logo");

    var logo = logo_collect[0];
    
    if (window.innerWidth > 950){
        logo.style.left = h2.offsetLeft - logo.clientWidth + "px";
        logo.style.top = h2.offsetTop + "px";
    } else {
        logo.style.left = h2.offsetLeft + "px";
        logo.style.top = h2.offsetTop + logo.clientWidth/2 + "px";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    set_logo_position();
  });

window.addEventListener('resize', function(){
    set_logo_position();
});