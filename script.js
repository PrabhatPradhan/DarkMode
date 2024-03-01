// let btn=document.querySelector(".btn");
// let body=document.querySelector("body");
// let text=document.querySelector(".text");
// const color =['black','red'];


// btn.addEventListener('click', function(){
// const colorIndex=parseInt(Math.random()*color.length);
// body.style.backgroundColor=color[colorIndex];

// text.style.color='white';


var content = document.getElementsByTagName('body')[0];
        var darkMode = document.getElementById('dark-change');
        darkMode.addEventListener('click', function(){
            darkMode.classList.toggle('active');
            content.classList.toggle('night');
        })

