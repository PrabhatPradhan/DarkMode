// let btn=document.querySelector(".btn");
// let body=document.querySelector("body");
// let text=document.querySelector(".text");
// const color =['black','red'];


// btn.addEventListener('click', function(){
// const colorIndex=parseInt(Math.random()*color.length);
// body.style.backgroundColor=color[colorIndex];

// text.style.color='white';





// })

const nightModeButton = document.getElementById('nightModeButton');
const stylesheet = document.getElementById('stylesheet');

let nightMode = false;

nightModeButton.addEventListener('click', function() {
    nightMode = !nightMode;

    if (nightMode) {
        stylesheet.href = 'night-mode.css'; // Change the stylesheet to night mode
        document.body.classList.add('night-mode'); // Add night mode class to body
    } else {
        stylesheet.href = 'styles.css'; // Change back to the default stylesheet
        document.body.classList.remove('night-mode'); // Remove night mode class from body
    }
});