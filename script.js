document.querySelector('#menu').addEventListener('click', function() {
    document.querySelector('.left').classList.toggle('active');
    document.querySelector('.right').classList.toggle('active');
    document.querySelector('#close').classList.toggle('active');
})

document.querySelector('#close').addEventListener('click', function() {
    document.querySelector('.left').classList.toggle('active');
    document.querySelector('.right').classList.toggle('active');
    document.querySelector('#close').classList.toggle('active');
})

if(/Android [4-6]/.test(navigator.appVersion)) {
    window.addEventListener("resize", function() {
       if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
          window.setTimeout(function() {
             document.activeElement.scrollIntoViewIfNeeded();
          },0);
       }
    })
}
  