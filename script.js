const nav = document.querySelector('nav');
const mobilNav = document.querySelector('nav.mobil-nav');
const mobilIcon = document.querySelector('.mobil-icon');
const close = document.querySelector('.close-icon');
const mobilMenu = document.querySelector('.mobil-menu-container');

window.addEventListener('scroll', () => {
	if (window.scrollY > 60) {
		nav.classList.add('scrolled');
		mobilNav.classList.add('scrolled');
	} else {
		nav.classList.remove('scrolled');
		mobilNav.classList.remove('scrolled');
	}
});

mobilIcon.addEventListener('click', () => {
	mobilMenu.classList.add('active');
});

close.addEventListener('click', () => {
	mobilMenu.classList.remove('active');
});
