/**
 * the function adds basic loading animations after fetching the data
 */

const loading = () => {
	let tl = gsap.timeline();
	tl.fromTo(document.body, { opacity: 0 }, { opacity:1 });
	tl.fromTo(
		'h1',
		{ opacity: 0 },
		{ opacity: 1, duration: 1.25, ease: 'linear' },
	);
	tl.fromTo(
		'.container',
		{ opacity: 0, scale: 0.95 },
		{ opacity: 1, scale: 1, duration: 1.1, ease: 'linear' },
	);
};

/**
 * buttonsFunction changes background of buttons on hover
 */

const buttonsFunction = () => {
	// mouseenter event
	const mouseEnterFunction = e => {
		let x = window
			.getComputedStyle(e.target)
			.getPropertyValue('background-color');
		if (x === 'rgb(0, 0, 0)') {
            gsap.to(e.target, { backgroundColor: 'rgb(61, 58, 58)', duration:.5, scale: 1.05 });
		}
		if (x === 'rgb(255, 255, 255)') {
            gsap.to(e.target, { backgroundColor: 'rgb(231, 220, 220)', duration: .5, scale: 1.05 });
		}
	};

	// mouseleave event
	const mouseLeaveFunction = e => {
		let x = window
			.getComputedStyle(e.target)
			.getPropertyValue('background-color');
		if (x === 'rgb(61, 58, 58)') {
			gsap.to(e.target, { backgroundColor: 'rgb(0, 0, 0)', duration: .5, scale: 1 });
		}
		if (x === 'rgb(231, 220, 220)') {
			gsap.to(e.target, { backgroundColor: 'rgb(255, 255, 255)', duration: .5, scale: 1 });
		}
	};

	// adding EventListeners
	let buttons = document.querySelectorAll('button');
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].addEventListener('mouseenter', mouseEnterFunction);
		buttons[i].addEventListener('mouseleave', mouseLeaveFunction);
	}
};

// functions loading and buttonsFunction are called after 1s because at first data has to be fetched
setTimeout(() => {
	loading();
	buttonsFunction();
}, 1000);
