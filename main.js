const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');



let pic1 = "https://picsum.photos/640/480?random=1"
let pic2 = "https://picsum.photos/640/480?random=2"
let pic3 = "https://picsum.photos/640/480?random=3"
let pic4 = "https://picsum.photos/640/480?random=4"
let pic5 = "https://picsum.photos/640/480?random=5"
let pic6 = "https://picsum.photos/640/480?random=6"
let pic7 = "https://picsum.photos/640/480?random=7"
let pic8 = "https://picsum.photos/640/480?random=8"
let pic9 = "https://picsum.photos/640/480?random=9"
let pic10 = "https://picsum.photos/640/480?random=10"
let pic11 = "https://picsum.photos/640/480?random=11"
let pic12 = "https://picsum.photos/640/480?random=12"
let pic13 = "https://picsum.photos/640/480?random=13"
let pic14 = "https://picsum.photos/640/480?random=14"
let pic15 = "https://picsum.photos/640/480?random=15"



 const images = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15];



for (const image of images) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    thumbBar.appendChild(newImage);
    newImage.addEventListener('click', e => displayedImage.src = e.target.src);
  }
  
  btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
      btn.setAttribute('class','light');
      btn.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
      btn.setAttribute('class','dark');
      btn.textContent = 'Darken';
      overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
  });





