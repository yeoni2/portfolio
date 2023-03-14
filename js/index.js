let img0;
window.onload=function(){
    AOS.init();
    $("html, body").animate({ "scrollTop": "0" },100);
    for(i=0; i<4; i++) {
        this["img"+i]=document.getElementById("img"+i);
        this["img"+i].style.background="url(img/img"+i+".jpg)";
        this["img"+i].style.backgroundSize="100% 100%";
        this["img"+i].addEventListener("click",this["big_func"+i] );
    }
    // for(i=0; i<4; i++){
    //     this["detail"+i]=document.getElementById("detail"+i);
    //     this["img"+i].style.background="url(img/detail"+i+".jpg)";
    //     this["detail"+i].style.backgroundSize="100% 100%";
    //     this["detail"+i].addEventListener("click",this["detail_func"+i] );
    // }    
}
function big_func0() {
    comm_func(0)
}
function big_func1() {
    comm_func(1)
}
function big_func2() {
    comm_func(2)
}
function big_func3() {
    comm_func(3)
}
// function detail_func0(){
//     design_func(0)
// }
function comm_func(js) {
    let big, pic, close;
    big=document.querySelector(".big");
    pic=document.querySelector("#pic");
    close=document.querySelector(".close");

    big.style.display="block";
    pic.src="img/img"+js+".jpg";

    close.onclick=function(){
        big.style.display="none";
    }
}
// function design_func(js){
//     let closeup, end, deta;
//     closeup=document.querySelector(".closeup");
//     deta=document.querySelector("#deta");
//     end=document.querySelector(".end");

//     closeup.style.display="block";
//     deta.src="img/detail"+js+".jpg";
// }