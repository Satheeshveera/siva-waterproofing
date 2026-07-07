// ========================================
// Document Ready
// ========================================

$(document).ready(function() {
    // Initialize
    initMobileMenu();
    initFormSubmit();
    initScrollEffects();
});

// ========================================
// Mobile Menu Toggle
// ========================================

function initMobileMenu() {
    const hamburger = $('.hamburger');
    const navLinks = $('.nav-links');

    hamburger.on('click', function() {
        navLinks.toggleClass('active');
        hamburger.toggleClass('active');
    });

    // Close menu when a link is clicked
    navLinks.find('a').on('click', function() {
        navLinks.removeClass('active');
        hamburger.removeClass('active');
    });
}

// ========================================
// Form Submit Handler
// ========================================

function initFormSubmit() {
    $('#inquiryForm').on('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = {
            name: $('#name').val(),
            phone: $('#phone').val(),
            email: $('#email').val(),
            service: $('#service').val(),
            message: $('#message').val()
        };

        // Validate form
        if (!validateForm(formData)) {
            return;
        }

        // Show success message
        showFormSuccess();

        // Handle form submission
        handleFormSubmission(formData);

        // Reset form after delay
        setTimeout(function() {
            document.getElementById('inquiryForm').reset();
        }, 500);
    });
}

// ========================================
// Form Validation
// ========================================

function validateForm(data) {
    if (!data.name.trim()) {
        showAlert('Please enter your name', 'error');
        return false;
    }

    if (!data.phone.trim()) {
        showAlert('Please enter your phone number', 'error');
        return false;
    }

    // Basic phone validation
    const phoneRegex = /^[0-9\s\-\+\(\)]+$/;
    if (!phoneRegex.test(data.phone)) {
        showAlert('Please enter a valid phone number', 'error');
        return false;
    }

    if (!data.email.trim()) {
        showAlert('Please enter your email address', 'error');
        return false;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showAlert('Please enter a valid email address', 'error');
        return false;
    }

    if (!data.service) {
        showAlert('Please select a service', 'error');
        return false;
    }

    if (!data.message.trim()) {
        showAlert('Please enter a message', 'error');
        return false;
    }

    return true;
}

// ========================================
// Handle Form Submission
// ========================================

function handleFormSubmission(formData) {
    // Create email subject and body
    const emailSubject = `Inquiry from ${formData.name} - ${formData.service}`;
    const emailBody = `
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service: ${formData.service}

Message:
${formData.message}
    `.trim();

    // Create mailto link for email
    const mailtoLink = `mailto:info@sivawaterproofing.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    setTimeout(function() {
        window.location.href = mailtoLink;
    }, 1000);
}

// ========================================
// Show Form Success
// ========================================

function showFormSuccess() {
    const successMsg = $('<div class="success-message">✓ Your inquiry has been submitted successfully! We will contact you soon.</div>');
    
    $('.inquiry-form').prepend(successMsg);
    
    successMsg.fadeIn().delay(4000).fadeOut(function() {
        $(this).remove();
    });

    // Scroll to message
    $('html, body').animate({
        scrollTop: $('.inquiry-form').offset().top - 100
    }, 500);
}

// ========================================
// Show Alert
// ========================================

function showAlert(message, type) {
    const alertClass = type === 'error' ? 'alert-error' : 'alert-success';
    const alertMsg = $(`<div class="alert ${alertClass}">${message}</div>`);
    
    $('.inquiry-form').prepend(alertMsg);
    
    alertMsg.fadeIn().delay(3000).fadeOut(function() {
        $(this).remove();
    });
}

// ========================================
// Scroll Effects
// ========================================

function initScrollEffects() {
    // Smooth scroll for anchor links
    $('a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        
        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 1000);
        }
    });

    // Fade in elements on scroll
    $(window).on('scroll', function() {
        fadeInOnScroll();
    });
}

// ========================================
// Fade In On Scroll
// ========================================

function fadeInOnScroll() {
    $('.service-card, .feature, .gallery-item, .info-item').each(function() {
        const elementPos = $(this).offset().top;
        const elementHeight = $(this).outerHeight();
        const viewportHeight = $(window).height();
        const scrollPos = $(window).scrollTop();

        if (scrollPos + viewportHeight > elementPos && scrollPos < elementPos + elementHeight) {
            $(this).addClass('fade-in');
        }
    });
}

// ========================================
// Call Company
// ========================================

function callCompany() {
    window.location.href = 'tel:+919876543210';
}

// ========================================
// Format Phone Number
// ========================================

function formatPhoneNumber(phone) {
    // Remove all non-digit characters
    let cleaned = phone.replace(/\D/g, '');
    
    // Format as (XXX) XXX-XXXX
    let formatted = cleaned.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');
    
    return formatted;
}