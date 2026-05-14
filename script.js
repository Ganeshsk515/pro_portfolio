const header = document.querySelector('.site-header');
const resumeBtn = document.querySelector('.resume-btn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    header.classList.add('header-scrolled');
  } else {
    header.classList.remove('header-scrolled');
  }
});

if (resumeBtn) {
  resumeBtn.addEventListener('click', () => {
    window.open('https://example.com/your-resume.pdf', '_blank');
  });
}
