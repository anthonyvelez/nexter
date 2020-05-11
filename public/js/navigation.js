const sidebar = document.querySelector('.sidebar');
let sideWidth = sidebar.offsetWidth;
const links = document.querySelectorAll('.nav-top__link');

sidebar.addEventListener('click', (event) => {
	if (sideWidth === 80) {
		sidebar.classList.add('sidebar__active');

		links.forEach((link) => {
			link.style.visibility = 'visible';
			link.style.opacity = '1';
		});

		sideWidth = 250;
	} else if (sideWidth === 250) {
		sidebar.classList.remove('sidebar__active');

		links.forEach((link) => {
			link.style.visibility = 'hidden';
			link.style.opacity = '0';
		});

		sideWidth = 80;
	}
});
