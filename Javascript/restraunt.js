 let nav = document.querySelector('.navigation-wrap');
window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}
// document.getElementById('.navigation-wrap', addEventListener("scroll", function(){
//     if(document.documentElement.scrollTop > 20){
//         nav.classList.add("scroll-on");
//     }
//     else{
//         nav.classList.remove("scroll-on");
//     }
// }))
      




