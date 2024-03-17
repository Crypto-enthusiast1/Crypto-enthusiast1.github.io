'use strict'
document.addEventListener('DOMContentLoaded', () => {
	const button_brg = document.querySelector('.hamburger');
	const menu_nav = document.querySelector('.menu');

	button_brg.addEventListener('click', () => {
		menu_nav.classList.toggle('active');
		button_brg.classList.toggle('hamburger_active');

	});

	document.addEventListener('click', (e) => {
		if (!menu_nav.contains(e.target) && !button_brg.contains(e.target)) {
			menu_nav.classList.remove('active');
			button_brg.classList.remove('hamburger_active');
		}
	});
});