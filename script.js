console.log("This file is connected");

var name="Ruby";
console.log(name);

var year = 2024;
console.log(year);

var tried = false;
console.log(tried);

var sum = 1 + 2;
console.log(sum);

var diff = sum - 1;
console.log(diff);

var product = sum * diff;
console.log(product);

var divide = product / 2;
console.log(divide);

function add(num1,num2){
    var sum = num1 + num2;
    console.log(sum);
}

add(10,10);
add(100,200);
add(123,456);

function add3(num1,num2,num3){
    var sum = num1 + num2 + num3;
    console.log(sum);
}

add3(1,2,3);

function subtracts1(num1,num2){
    var diff = num1 - num2;
    console.log(diff);
}

subtracts1(3,1);

function multiplies1(num1){
    var product = num1 * num1;
    console.log(product);
}

multiplies1(3,3);

function divides1(num1,num2){
    var divide = num1 / num2;
    console.log(divide);
}

divides1(6,2);

window.onload = function(){
    var width = window.innerWidth;
    var height = window.innerHeight;


console.log("This file is conected");
$(".bubble").css("font-size","100px");
$(".bubble").css("background","purple");

function growBubble(){
    $(this).css("font-size","300px");
}

$(".bubble").click(growBubble);

function inflateFish(){
    $('.pufferfish').attr('src','p-fish-2.png');
}

$('.pufferfish').click(inflateFish);


function swimAway(){
    var bottomPos = Math.random() * 800;
    var leftPos = Math.random() * 1000;
    $('.clownfish').css('bottom',bottomPos);
    $('.clownfish').css('left',leftPos);
}

$('.clownfish').hover(swimAway);

setInterval(swimAway,1000);

var blue = 205;
var red = 0;
var green = 0;

function swimDeeper(){
    $('body').css('background','rgb('+red+',169,'+blue+')');
    blue = Math.random()*225;
    red = Math.random()*225;
    green = Math.random()*225;
}

//$(window).scroll(swimDeeper);


function danceOne(){
    $('.starfish').attr('scr','starfish2.png');
}

function dance(){
    if(event.key == 'q'){
        $('.starfish').attr('src','starfish2.png');
    } else if (event.key == 'w'){
        $('.starfish').attr('src','starfish3.png');
    } else if (event.key == 'w'){
        $('.starfish').attr('src','starfish1.png');
    }
}

$(window).keypress(danceOne);

var age = 20;

if (age > 18){
    alert("You are not welcome on this page");
} else {
    alert("You are welcome this page");
}

$(window).keypress(dance);

function showBox(){
    $('.info-window').toggleClass('hidden');
}
}
