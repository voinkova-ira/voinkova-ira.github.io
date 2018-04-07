window.onload = function(){
    var wallFloor = document.getElementById('room').querySelector(".room-wall--y--floor");
        wallCell = document.getElementById('room').querySelector(".room-wall--y--cell");
        wallBehind = document.getElementById('room').querySelector(".room-wall--z--behind");
        wallLeft = document.getElementById('room').querySelector(".room-wall--x--left");
        wallRight = document.getElementById('room').querySelector(".room-wall--x--right");

    wallFloor.addEventListener('mouseover', moveTop);
    wallCell.addEventListener('mouseover', moveDown);
    wallBehind.addEventListener('mouseover', moveBehind);
    wallLeft.addEventListener('mouseover', moveRight);
    wallRight.addEventListener('mouseover', moveLeft);

    var rotateAngle = 90;
        skew = 6;
    const translateZ = -700;
    var translateShift = 51;

    function moveRight(event){
        wallLeft.style.transform = 'rotateY('+ (rotateAngle - skew) +'deg)';
        wallRight.style.transform = 'rotateY('+ (-rotateAngle - skew) +'deg)';
        wallFloor.style.transform = 'rotateX('+ rotateAngle +'deg) skewX('+ (-skew) +'deg)';
        wallCell.style.transform = 'rotateX('+ (-rotateAngle) +'deg) skewX('+ (skew) +'deg)';
        wallBehind.style.transform = 'translateZ('+ translateZ +'px) translateX('+ translateShift +'px)';
    }
    function moveLeft(event){
        wallLeft.style.transform = 'rotateY('+ (rotateAngle + skew) +'deg)';
        wallRight.style.transform = 'rotateY('+ (-rotateAngle + skew) +'deg)';
        wallFloor.style.transform = 'rotateX('+ rotateAngle +'deg) skewX('+ (skew) +'deg)';
        wallCell.style.transform = 'rotateX('+ (-rotateAngle) +'deg) skewX('+ (-skew) +'deg)';
        wallBehind.style.transform = 'translateZ('+ translateZ +'px) translateX('+ ( -translateShift) +'px)';
    }
    function moveDown(event){
        wallFloor.style.transform = 'rotateX('+ (rotateAngle - skew) +'deg)';
        wallCell.style.transform = 'rotateX('+ (-rotateAngle - skew) +'deg)';
        wallLeft.style.transform = 'rotateY('+ rotateAngle +'deg) skewY('+ (-skew) +'deg)';
        wallRight.style.transform = 'rotateY('+ (-rotateAngle) +'deg) skewY('+ skew +'deg)';
        wallBehind.style.transform = 'translateZ('+ translateZ +'px) translateY('+ ( -translateShift) +'px)';
        console.log('hddd');

    }
    function moveTop(event){
        wallFloor.style.transform = 'rotateX('+ (rotateAngle + skew) +'deg)';
        wallCell.style.transform = 'rotateX('+ (-rotateAngle + skew) +'deg)';
        wallLeft.style.transform = 'rotateY('+ rotateAngle +'deg) skewY('+ skew +'deg)';
        wallRight.style.transform = 'rotateY('+ (-rotateAngle) +'deg) skewY('+ (-skew) +'deg)';
        wallBehind.style.transform = 'translateZ('+ translateZ +'px) translateY('+ translateShift +'px)';
        console.log('hy');

    }
    function moveBehind(event){
        wallFloor.style.transform = 'rotateX('+ rotateAngle +'deg)';
        wallCell.style.transform = 'rotateX('+ (-rotateAngle) +'deg)';
        wallLeft.style.transform = 'rotateY('+ rotateAngle +'deg)';
        wallRight.style.transform = 'rotateY('+ (-rotateAngle) +'deg)'
        wallBehind.style.transform = 'translateZ('+ translateZ +'px) translateY(0) translateX(0)';
    }
}