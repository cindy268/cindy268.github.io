// Switch Theme
function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    const icon = document.querySelector('.toggle-ball i');
    
    html.setAttribute('data-theme', newTheme);
    
    if(newTheme === 'dark') {
        icon.classList.replace('fa-sun', 'fa-moon');
    } else {
        icon.classList.replace('fa-moon', 'fa-sun');
    }
}

// Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

window.addEventListener("scroll", reveal);




// Toggle Hamburger Menu
function toggleMenu() {
    const nav = document.getElementById('navMenu');
    const icon = document.querySelector('.hamburger i');
    
    nav.classList.toggle('active');
    
    // Animasi ganti icon bars ke times (X)
    if(nav.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
    }
}

// Tambahan: Tutup menu otomatis kalau user klik di luar menu (opsional)
document.addEventListener('click', function(event) {
    const nav = document.getElementById('navMenu');
    const hamburger = document.querySelector('.hamburger');
    if (!nav.contains(event.target) && !hamburger.contains(event.target)) {
        nav.classList.remove('active');
        document.querySelector('.hamburger i').classList.replace('fa-times', 'fa-bars');
    }
});





// Back to Home
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Simple Project Slider Dot Logic
const dots = document.querySelectorAll('.dot-ind');
const scrollContainer = document.getElementById('projectScroll');

scrollContainer.addEventListener('scroll', () => {
    const scrollLeft = scrollContainer.scrollLeft;
    const width = scrollContainer.offsetWidth;
    const index = Math.round(scrollLeft / width);
    
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
});

// Initial reveal check
reveal();

function openCert(src) {
    const modal = document.getElementById("certModal");
    const modalImg = document.getElementById("imgFull");
    modal.style.display = "flex";
    modalImg.src = src;
}

function closeModal() {
    document.getElementById("certModal").style.display = "none";
}