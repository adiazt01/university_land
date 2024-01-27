export function toggleClasses(element, addClasses, removeClasses) {
	element.classList.add(...addClasses);
	element.classList.remove(...removeClasses);
}

export function toggleLinkClasses(links, addClass, removeClass) {
	links.forEach((link) => {
		link.classList.add(addClass);
		link.classList.remove(removeClass);
	});
}
