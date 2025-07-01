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

let mctext= ["Sam Worthington","Zoe Saldaña","Britain Dalton","Sigourney Weaver","Stephen Lang","Jack Champion","Cliff Curtis","Kate Winslet"]
let ctext= ["Jake Sully","Neytiri","Lo'ak","Kiri","Miles Quaritch","Miles Socorro","Tonowari","Ronal"]

for (let i = 1; i <= 8; i++) {
    let imgElement = document.getElementById(`img${i}`);
    let textElement = document.getElementById(`text${i}`);

    imgElement.addEventListener("mouseover", () => {
        imgElement.src=`imgs/c${i}.jpg`;
        textElement.innerHTML=ctext[i-1];
    });
    imgElement.addEventListener("mouseout", () => {
        imgElement.src=`imgs/mc${i}.jpg`;
        textElement.innerHTML=mctext[i-1];
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
  
    window.addEventListener("scroll", () => {
      const scrollTop = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = Math.min(scrollTop / maxScroll, 1);
  
      const startColor = [16, 38, 77];
      const endColor = [140, 14, 15];
  
      const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * scrollPercent);
      const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * scrollPercent);
      const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * scrollPercent);
  
      header.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      header.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    });
  });