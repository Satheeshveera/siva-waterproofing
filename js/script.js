// Service Data
const services = {
    1: {
        name: 'Terrace Waterproofing Treatment',
        icon: 'fas fa-building',
        color: 'icon-1',
        description: 'Professional waterproofing treatment for terraces to prevent water seepage and damage. Our expert team uses premium materials and advanced techniques to provide long-lasting protection for your roof. We offer comprehensive solutions tailored to your specific needs.',
        features: [
            'High-quality sealant application',
            'Weather-resistant protection',
            'Quick-drying formula',
            '5-year warranty included'
        ]
    },
    2: {
        name: 'Heat Insulations Coating',
        icon: 'fas fa-sun',
        color: 'icon-2',
        description: 'Thermal insulation coatings to reduce heat transfer and improve energy efficiency. Keep your property cool and comfortable while reducing energy costs. Our heat-reflective coatings are eco-friendly and durable.',
        features: [
            'Energy cost reduction up to 40%',
            'UV protection',
            'Eco-friendly materials',
            'Long-lasting performance'
        ]
    },
    3: {
        name: 'External Protective Coating',
        icon: 'fas fa-shield-alt',
        color: 'icon-3',
        description: 'Protective coatings for external surfaces to ensure durability and aesthetic appeal. Enhance and protect your building exterior from harsh weather conditions and UV rays.',
        features: [
            'UV resistant coating',
            'Weather protection',
            'Color retention',
            'Easy maintenance'
        ]
    },
    4: {
        name: 'Structural Repairs & Rehabilitation',
        icon: 'fas fa-hammer',
        color: 'icon-4',
        description: 'Comprehensive structural repairs and rehabilitation services for buildings. Restore your property to its original condition with our expert repair solutions.',
        features: [
            'Concrete crack repair',
            'Foundation strengthening',
            'Professional consultation',
            'Quality assurance'
        ]
    },
    5: {
        name: 'PU Injection for Concrete Seepage',
        icon: 'fas fa-syringe',
        color: 'icon-5',
        description: 'Advanced PU injection technique to stop concrete seepage and moisture problems. Effective solution for basement flooding and water intrusion issues.',
        features: [
            'Advanced injection technology',
            'Permanent sealing',
            'Non-invasive process',
            'Quick results'
        ]
    },
    6: {
        name: 'Water Proofing Coatings',
        icon: 'fas fa-droplet',
        color: 'icon-6',
        description: 'Specialized water-resistant coatings to protect surfaces from water damage. Advanced polymer-based protection solutions for all types of surfaces.',
        features: [
            'Water-resistant barrier',
            'Flexible coating',
            'Breathable formula',
            'Multi-surface application'
        ]
    },
    7: {
        name: 'Tank Waterproofing Treatment',
        icon: 'fas fa-cube',
        color: 'icon-7',
        description: 'Complete waterproofing solution for water tanks and reservoirs. Ensure safe, clean water storage for years to come with our professional treatment.',
        features: [
            'Food-grade coating',
            'Bacteria resistant',
            'Leak prevention',
            'Durability assured'
        ]
    },
    8: {
        name: 'Epoxy Polyurethane Coating',
        icon: 'fas fa-paint-brush',
        color: 'icon-8',
        description: 'High-performance epoxy and polyurethane coating for terrace protection. Durable, flexible, and weather-resistant coating with superior adhesion.',
        features: [
            'Superior adhesion',
            'Flexible coating',
            'Fast curing',
            'Excellent durability'
        ]
    },
    9: {
        name: 'Epoxy Tile Grouts for Bathroom',
        icon: 'fas fa-bath',
        color: 'icon-9',
        description: 'Waterproof epoxy tile grouts specifically designed for bathroom applications. Mold-resistant and long-lasting grout solution for all tile types.',
        features: [
            'Mold and mildew resistant',
            'Water-proof grout',
            'Color-stable formula',
            'Easy to clean'
        ]
    },
    10: {
        name: 'Building Renovation',
        icon: 'fas fa-home',
        color: 'icon-10',
        description: 'Complete building renovation services to modernize and improve properties. Transform your space with expert renovation solutions including waterproofing.',
        features: [
            'Complete renovation planning',
            'Quality workmanship',
            'On-time delivery',
            'Professional team'
        ]
    }
};

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const target = document.querySelector(href);
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Open Service Modal
function openServiceModal(serviceId) {
    const service = services[serviceId];
    if (!service) return;

    const title = document.getElementById('serviceTitle');
    const name = document.getElementById('modalServiceName');
    const icon = document.getElementById('modalIcon');
    const desc = document.getElementById('modalServiceDesc');
    const features = document.getElementById('modalFeatures');
    const whatsappBtn = document.getElementById('whatsappServiceBtn');

    title.textContent = service.name;
    name.textContent = service.name;
    icon.innerHTML = `<i class="${service.icon}"></i>`;
    icon.className = `modal-icon ${service.color}`;
    desc.textContent = service.description;

    // WhatsApp button
    const whatsappMessage = `Hi Siva Waterproofing, I'm interested in ${service.name}. Can you provide more details?`;
    whatsappBtn.href = `https://wa.me/919843835767?text=${encodeURIComponent(whatsappMessage)}`;

    features.innerHTML = '<h5 class="fw-bold mt-4 mb-3">Key Features:</h5>';
    service.features.forEach(feature => {
        features.innerHTML += `<div class="mb-2"><i class="fas fa-check-circle text-success"></i> <span class="ms-2">${feature}</span></div>`;
    });

    const serviceModal = new bootstrap.Modal(document.getElementById('serviceModal'));
    serviceModal.show();
}

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Add animation to service cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.3s ease';
    observer.observe(card);
});

// Mobile menu close on link click
const navbarCollapse = document.querySelector('.navbar-collapse');
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
            document.querySelector('.navbar-toggler').click();
        }
    });
});

// Contact form with email notifications
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // Form will be submitted via Formspree
        // Show success message
        setTimeout(() => {
            alert('Thank you! Your inquiry has been sent. We will contact you soon.');
        }, 100);
    });
}