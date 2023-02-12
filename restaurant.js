let nav = document.getElementById("navbar")
window.onscroll = function() {
    scroll()
};

function scroll() {
    if (document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20) {
        nav.style.backgroundColor = "#0f172b";
    }
    else {
        nav.style.backgroundColor = "transparent";
    }
}
function openSidebar(){
    let a = document.getElementById("mySidebar").classList.toggle("sidebar-show");
    // let b = document.getElementById("content");
    // console.log
    // if (document.getElementById("mySidebar").style.display == "block") {
    //     console.log(a)
    // }
    // else{
    //     console.log("raheel")
    // }
} 