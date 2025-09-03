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
});
