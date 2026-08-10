let slide = [
  {
    image: "images/image1.jpg",
    title: "Image 1",
    description: "This is the Image 1",
  },
  {
    image: "images/image2.jpg",
    title: "Image 2",
    description: "This is the Image 2",
  },
  {
    image: "images/image3.jpg",
    title: "Image 3",
    description: "This is the Image 3",
  },
  {
    image: "images/image4.jpg",
    title: "Image 4",
    description: "This is the Image 4",
  },
];

let image = document.getElementById("img-slider");
let title = document.getElementById("heading");
let desc = document.getElementById("para");

let index = 0;

document.getElementById("nextBtn").addEventListener("click", function () {
  index++;
  if (index >= slide.length) {
    index = 0;
  }
  showImage();
});

document.getElementById("prevBtn").addEventListener("click", function () {
  index--;
  if (index < 0) {
    index = slide.length - 1;
  }
  showImage();
});

function showImage() {
  image.src = slide[index].image;
  title.innerText = slide[index].title;
  desc.innerText = slide[index].description;
}
