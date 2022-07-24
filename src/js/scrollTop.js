const scrollBtn = document.getElementById("scroll-top");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    scrollBtn.classList.remove('scroll-top_show');
  } else {
    scrollBtn.classList.add('scroll-top_show');
  }
}

scrollBtn.onclick = () => {
    window.scrollTo(0, 0);
}