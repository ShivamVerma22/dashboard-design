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
  