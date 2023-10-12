let images = document.querySelectorAll(".img-tile");
let back = document.querySelector("html");

let selected = 0;
let selection = '';


// console.log(back);

console.log(images);

// back.addEventListener("click", exit);

for (let l = 0; l < images.length; l++) {
    images[l].addEventListener("click", viewImage);
}


function viewImage() {
    console.log(this);
    // console.log(++selected);
    if (selected == 0) {
        this.classList.add("active-img");
        selected = 1;
    }
    else {
        this.classList.remove("active-img");
        selected = 0;
    }
    let selection = this;

    // console.log(selection);

    // selected = images.this;
    // selected = 1;
}

// console.log(selected);

function exit() {
    selection.classList.remove("active-img");
    selected = 0;
}