function highlight(event) {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => link.classList.remove("active"));
    event.target.classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", highlight);
    });

    const sections = document.querySelectorAll("section");
    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute("id");
            }
        });

        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});

const holder = document.querySelectorAll(".img-holder");
const card = document.querySelectorAll(".cards");

for(let i=0; i<4; i++)
{
    card[i].addEventListener('mouseenter', () => {
    holder[i].style.transform = "translateY(-10px)";
    });

    card[i].addEventListener('mouseleave', () => {
    holder[i].style.transform = "translateY(0px)";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
  
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = scroll / maxScroll ;
      console.log(scrollPercent);
  
      const startColor = [11, 28, 60];
      const endColor = [31, 77, 79];
  
      const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollPercent);
      const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollPercent);
      const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollPercent);
  
      header.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${Math.max(0.8,1-(scrollPercent*0.2/0.35))})`;
    });
});


const openSigninBtn = document.querySelector('#signinBtn');
const popup = document.getElementById('signinPopup');
const closeBtn = document.getElementById('closeSigninPopup');

openSigninBtn.onclick = () => {
  popup.style.display = 'flex';
};

closeBtn.onclick = () => {
  popup.style.display = 'none';
};

window.onclick = (e) => {
  if (e.target === popup) {
    popup.style.display = 'none';
  }
};
