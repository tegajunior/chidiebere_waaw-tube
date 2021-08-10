const show = document.querySelector('#show');
console.log(show);

const sidebar = document.querySelector('.sidebar');

show.addEventListener('click', function () {
  sidebar.classList.toggle('guy__show');
});