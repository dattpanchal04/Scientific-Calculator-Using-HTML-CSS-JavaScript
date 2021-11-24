// Javascript here!

var screen = document.querySelector('#screen');
var btn = document.querySelectorAll('.btn')
var sound = new Audio('click.wav');

for(item of btn){
    item.addEventListener('click', (e)=>{
        btnText = e.target.innerText;
        sound.play();

        if(btnText == "X"){
            btnText = "*";
        }
        if(btnText == "÷"){
            btnText = "/";
        }

        screen.value += btnText;
    })
}

function sin(){
    screen.value = Math.sin(screen.value);
    sound.play();
}
function cos(){
    screen.value = Math.cos(screen.value);
    sound.play();
}
function tan(){
    screen.value = Math.tan(screen.value);
    sound.play();
}
function pow(){
    screen.value = Math.pow(screen.value, 2);
    sound.play();
}
function sqrt(){
    screen.value = Math.sqrt(screen.value, 2);
     sound.play();
}
function log(){
    screen.value = Math.log(screen.value);
     sound.play();
}
function pi(){
    screen.value = 3.142857;
     sound.play();
}
function e(){
    screen.value = 2.718281828459045;
     sound.play();
}
function fact(){
    var i, num, f;
    f = 1;
    num = screen.value;
    for(i=1; i<=num; i++){
        f = f*i;
    }
    i= i - 1;
    screen.value = f;
    sound.play();
}

function backspc(){
    screen.value = screen.value.substr(0, screen.value.length-1);
    sound.play();
}