// Show image popup when page loads
window.addEventListener('DOMContentLoaded', function() {
	var popup = document.getElementById('img-popup');
	if (popup) popup.style.display = 'flex';

	// Fade-in animation for all fade-in elements
	function revealSections() {
		document.querySelectorAll('.fade-in').forEach(el => {
			const rect = el.getBoundingClientRect();
			if (rect.top < window.innerHeight - 60) {
				el.classList.add('visible');
			}
		});
	}
	window.addEventListener('scroll', revealSections);
	window.addEventListener('resize', revealSections);
	revealSections();

	// Hide WhatsApp button when it meets the footer
	const whatsappBtn = document.querySelector('.whatsapp-float');
	const footer = document.querySelector('footer');
	if (whatsappBtn && footer && 'IntersectionObserver' in window) {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						whatsappBtn.classList.add('hide');
					} else {
						whatsappBtn.classList.remove('hide');
					}
				});
			},
			{
				root: null,
				threshold: 0.01
			}
		);
		observer.observe(footer);
	}
});
