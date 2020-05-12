const sidebar = document.querySelector('.sidebar');
let sideWidth = sidebar.offsetWidth;
let sideHeight = 0;
const links = document.querySelectorAll('.nav-top__link');
const navBtn = document.querySelector('.nav-top__btn');
const mobile = window.matchMedia('(max-width: 1200px)');

if (mobile.matches) {
	navBtn.addEventListener('click', (event) => {
		if (sideHeight === 0) {
			sidebar.classList.add('sidebar__mobile');

			links.forEach((link) => {
				link.style.visibility = 'visible';
				link.style.opacity = '1';
			});

			sideHeight = 120;
		} else if (sideHeight === 120) {
			sidebar.classList.remove('sidebar__mobile');

			links.forEach((link) => {
				link.style.visibility = 'hidden';
				link.style.opacity = '0';
			});

			sideHeight = 0;
		}
	});
} else if (!mobile.matches) {
	navBtn.addEventListener('click', (event) => {
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
}

//false buttons
const falseBtns = document.querySelectorAll('#false');

falseBtns.forEach((btn) => {
	btn.addEventListener('click', () => {
		event.preventDefault();
	});
});
