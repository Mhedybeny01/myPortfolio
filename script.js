const canvas = document.getElementById("embersCanvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const embers = [];
const emberCount = 200;

// Ember particle settings
const emberSettings = {
  maxSize: 3,
  minSize: 1,
  maxSpeed: 4,
  minSpeed: 0.5,
  color: "rgba(75, 246, 72, 0.59)",
};

// Adjust canvas size on resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Ember particle class
class Ember {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = canvas.height + Math.random() * 100;
    this.size =
      emberSettings.minSize +
      Math.random() * (emberSettings.maxSize - emberSettings.minSize);
    this.speed =
      emberSettings.minSpeed +
      Math.random() * (emberSettings.maxSpeed - emberSettings.minSpeed);
    this.opacity = 1;
    this.fadeRate = Math.random() * 0.02 + 0.005;
    this.color = emberSettings.color;
  }

  update() {
    this.y -= this.speed;
    this.opacity -= this.fadeRate;
    if (this.opacity <= 0) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color.replace("0.7", this.opacity.toFixed(2)); // Adjust opacity
    ctx.fill();
  }
}

// Create initial embers
for (let i = 0; i < emberCount; i++) {
  embers.push(new Ember());
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  embers.forEach((ember) => {
    ember.update();
    ember.draw();
  });

  requestAnimationFrame(animate);
}

animate();

const home = document.querySelector(".home"),
  titleabout = document.querySelector(".titleabout"),
  titleabout2 = document.querySelector(".titleabout2"),
  titlepro = document.querySelector(".titlepro"),
  cartabout = document.querySelector(".cards"),
  ln1 = document.querySelector("#ln1"),
  ln2 = document.querySelector("#ln2"),
  home2 = document.querySelectorAll(".homes, .homes2"),
  about = document.querySelectorAll(".abouts,.abouts2"),
  projects = document.querySelectorAll(".projects,.projects2"),
  scrollMenu = document.querySelector(".scrollMenu"),
  titlecantact = document.querySelector(".titlecantact"),
  thanksuser = document.querySelector(".thanksuser"),
  titlesocialmedia = document.querySelector(".titlesocialmedia"),
  contacts = document.querySelectorAll(".contacts, .contacts2");

window.addEventListener("scroll", () => {
  if (window.scrollY > -15) {
    home.classList.add("active");
  } else {
    home.classList.remove("active");
  }

  // For titleabout section
  if (window.scrollY > 300) {
    titleabout.classList.add("active");
    scrollMenu.classList.add("active");
  } else {
    titleabout.classList.remove("active");
    scrollMenu.classList.remove("active");
  }

  if (window.scrollY > 484) {
    titleabout2.classList.add("active");
    titlepro.classList.add("active");
  } else {
    titleabout2.classList.remove("active");
    titlepro.classList.remove("active");
  }

  // For cartabout section
  if (window.scrollY > 410) {
    cartabout.classList.add("active");
    ln1.classList.add("active");
    ln2.classList.add("active");
  } else {
    cartabout.classList.remove("active");
    ln1.classList.remove("active");
    ln2.classList.remove("active");
  }

  if (window.scrollY > 4724) {
    titlecantact.classList.add("active");
    titlesocialmedia.classList.add("active");
  } else {
    titlecantact.classList.remove("active");
    titlesocialmedia.classList.remove("active");
  }

  if (window.scrollY > 4724) {
    thanksuser.classList.add("active");
  } else {
    thanksuser.classList.remove("active");
  }


  console.log(window.scrollY);
});

about.forEach((element) => {
  element.addEventListener("click", () => {
    window.scrollTo({
      top: 730,
      behavior: "smooth",
    });
  });
});

projects.forEach((element) => {
  element.addEventListener("click", () => {
    window.scrollTo({
      top: 2220,
      behavior: "smooth",
    });
  });
});

home2.forEach((element) => {
  element.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

contacts.forEach((element) => {
  element.addEventListener("click", () => {
    window.scrollTo({
      top: 4902,
      behavior: "smooth",
    });
  });
});
