const onPopulateWithStarProducts = () => {
  const grid_article = document.getElementById("grid-article");

  const image_collection = [
    { src: "assets/product_1.jpg", alt: "Product 1", item: "1" },
    { src: "assets/product_2.jpg", alt: "Product 2", item: "2" },
    { src: "assets/product_3.jpg", alt: "Product 3", item: "3" },
    { src: "assets/product_4.jpg", alt: "Product 4", item: "4" },
  ];

  const onAppendElement = (image) => {
    const new_element = `
      <div class="product_container">
        <h3>Product ${image.item}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          ultricies, nunc nec vehicula ultricies, nunc nec vehicula.
        </p>
        <div class="product_image_container">
          <img src=${image.src} alt=${image.alt} />
        </div>
      </div>
    `;
    grid_article.innerHTML += new_element;
  };

  image_collection.forEach((image) => {
    onAppendElement(image);
  });
};

const onDisplayImageAbout = () => {
  let current = 0;
  const images = document.querySelectorAll(".about_us_img_container img");
  const buttons = document.querySelectorAll(".about_us_img_container button");
  // current image is set to 0
  const left = buttons[0];
  const right = buttons[1];

  right.addEventListener("click", () => {
    if (current === 1) {
      images[1].style.display = "none";
      images[0].style.display = "";
      current = 0;
    } else {
      images[0].style.display = "none";
      images[1].style.display = "";
      current = 1;
    }
  });
  left.addEventListener("click", () => {
    if (current === 1) {
      images[1].style.display = "none";
      images[0].style.display = "";
      current = 0;
    } else {
      images[0].style.display = "none";
      images[1].style.display = "";
      current = 1;
    }
  });
};

const onGetCurrentLocation = () => {
  const location = window.location.pathname;
  const a = document.getElementById(location);
  a.classList.add("active");
  if (location === "/") {
    onPopulateWithStarProducts();
  }
  console.log(location);
  if (location === "/projects/one/pages/about.html") {
    onDisplayImageAbout();
  }
};

onGetCurrentLocation();
