let shop = document.querySelector(".curs");
let body = document.querySelector("html");

let back = document.querySelector(".back");
const elem2 = document.querySelector(".circel2");
const elem3 = document.querySelector(".circel3");
const elem4 = document.querySelector(".circel4");
document.addEventListener("mousemove", function (e){
    let y = e.clientY;
    let x = e.clientX;
    shop.style.left = `${x}px`;
    shop.style.top = `${y}px`;
});
const elem = document.querySelector(".circel");

elem.addEventListener("mouseenter", edit);
elem.addEventListener("mouseout", edit2);
window.onmousedown = function(){
    is_active = true;
    handler();
};
window.onmouseup = function(){
    is_active = false;
    handler();
};
function handler(){
    if(is_active === true){
        shop.style.scale='1.6';
    }else if(is_active === false){
        shop.style.scale='1';
    }
};

back.addEventListener("mouseenter", () => {
    is_active = true;
    handler();
    body.style.backgroundColor="white"
    back.style.display='none';
});
back.addEventListener("mouseout", () => {
    is_active = false;
    handler();
});
function edit(e){
    is_active = true;
    handler();
    elem.style.scale="1.2";
    elem2.style.scale="1.1";
    elem3.style.scale="1.2";
    elem4.style.scale="1.2";
    body.style.backgroundColor="black"
    back.style.display='flex';
}
function edit2(e){
    elem2.style.scale="1.0";
    elem3.style.scale="1.0";
    elem4.style.scale="1.0";
    elem.style.scale="1.0";
    is_active = false;
    handler();
}

document.addEventListener("mousemove", parallax);


    function parallax(e) {
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let speed = 3;
        const x = ((window.innerWidth/2) - _mouseX*speed)/50;
        const y = ((window.innerHeight/2) - _mouseY*speed)/50;
        console.log("Right: ", x, "left: ", y)
        elem.style.right = `${x}`;
        elem.style.top = `${y}`;
        elem4.style.right = `${x*-1.3}`;
        elem4.style.top = `${y*0.8}`;
        elem3.style.right = `${x*-0.5}`;
        elem3.style.top = `${y*0.5}`;
        elem2.style.right = `${x*0.3}`;
        elem2.style.top = `${y*0.3}`;
    };