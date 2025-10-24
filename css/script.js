//BOUTON DARK-MODE//
function myFunction() {
  var element = document.body;

  element.classList.toggle("dark-mode");
}

//ANIMATION HEADER//
class TxtRotate {
  constructor(el, toRotate, period) {
    this.toRotate = JSON.parse(toRotate);
    this.el = el;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.loopNum = 0;
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];
    this.txt = fullTxt.substring(
      0,
      this.txt.length + (this.isDeleting ? -1 : 1)
    );

    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

    let delta = this.isDeleting ? 100 : 175 - Math.random() * 100;

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => this.tick(), delta);
  }
}

window.onload = () => {
  document.querySelectorAll(".txt-rotate").forEach((el) => {
    const toRotate = el.getAttribute("data-rotate");
    const period = el.getAttribute("data-period");
    if (toRotate) new TxtRotate(el, toRotate, period);
  });

  const css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.head.appendChild(css);
}

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
      card.classList.toggle('active');
  });
});
