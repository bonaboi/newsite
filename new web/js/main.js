// Main JavaScript
(function() {
    'use strict';
    
    // Load saved data
    let siteData = {};
    try {
        const saved = localStorage.getItem('laylaxemmaData');
        if (saved) {
            siteData = JSON.parse(saved);
            applyData();
        }
    } catch (e) {
        console.log('No saved data');
    }
    
    function applyData() {
        if (!siteData.common) return;
        
        // Update contact info
        if (siteData.common.footerContact) {
            const footerContact = document.querySelector('.footer-section:last-child p');
            if (footerContact) {
                footerContact.innerHTML = siteData.common.footerContact.replace(/\n/g, '<br>');
            }
        }
        
        // Update Vanessa page if on it
        if (document.getElementById('vanessaName')) {
            if (siteData.vanessa) {
                document.getElementById('vanessaName').textContent = siteData.vanessa.name;
                document.getElementById('vanessaBio').textContent = siteData.vanessa.bio;
                document.getElementById('vanessaPhone').textContent = siteData.vanessa.phone;
                document.getElementById('vanessaEmail').textContent = siteData.vanessa.email;
                document.getElementById('vanessaLocation').textContent = siteData.vanessa.location;
                document.getElementById('vanessaImage').src = siteData.vanessa.image;
                document.getElementById('vanessaHero').style.backgroundImage = `url('${siteData.vanessa.hero}')`;
                
                // Update specialties
                const specialties = document.getElementById('vanessaSpecialties');
                if (specialties && siteData.vanessa.specialties) {
                    specialties.innerHTML = siteData.vanessa.specialties.map(s => `<span>${s}</span>`).join('');
                }
                
                // Update gallery
                const gallery = document.getElementById('vanessaGallery');
                if (gallery && siteData.vanessa.gallery) {
                    gallery.innerHTML = siteData.vanessa.gallery.map(url => 
                        `<img src="${url}" alt="Gallery" loading="lazy">`
                    ).join('');
                }
                
                // Update testimonials
                const testimonials = document.getElementById('vanessaTestimonials');
                if (testimonials && siteData.vanessa.testimonials) {
                    testimonials.innerHTML = siteData.vanessa.testimonials.map(t => `
                        <div class="testimonial-card">
                            <div class="name">${t.name}</div>
                            <div class="ter">${t.ter}</div>
                            <div class="text">"${t.text}"</div>
                        </div>
                    `).join('');
                }
            }
        }
        
        // Update Sophia page if on it
        if (document.getElementById('sophiaName')) {
            if (siteData.sophia) {
                document.getElementById('sophiaName').textContent = siteData.sophia.name;
                document.getElementById('sophiaBio').textContent = siteData.sophia.bio;
                document.getElementById('sophiaPhone').textContent = siteData.sophia.phone;
                document.getElementById('sophiaEmail').textContent = siteData.sophia.email;
                document.getElementById('sophiaLocation').textContent = siteData.sophia.location;
                document.getElementById('sophiaImage').src = siteData.sophia.image;
                document.getElementById('sophiaHero').style.backgroundImage = `url('${siteData.sophia.hero}')`;
                
                // Update specialties
                const specialties = document.getElementById('sophiaSpecialties');
                if (specialties && siteData.sophia.specialties) {
                    specialties.innerHTML = siteData.sophia.specialties.map(s => `<span>${s}</span>`).join('');
                }
                
                // Update gallery
                const gallery = document.getElementById('sophiaGallery');
                if (gallery && siteData.sophia.gallery) {
                    gallery.innerHTML = siteData.sophia.gallery.map(url => 
                        `<img src="${url}" alt="Gallery" loading="lazy">`
                    ).join('');
                }
                
                // Update testimonials
                const testimonials = document.getElementById('sophiaTestimonials');
                if (testimonials && siteData.sophia.testimonials) {
                    testimonials.innerHTML = siteData.sophia.testimonials.map(t => `
                        <div class="testimonial-card">
                            <div class="name">${t.name}</div>
                            <div class="ter">${t.ter}</div>
                            <div class="text">"${t.text}"</div>
                        </div>
                    `).join('');
                }
            }
        }
        
        // Update certification page
        if (document.getElementById('certImage')) {
            if (siteData.certification) {
                document.getElementById('certImage').src = siteData.certification.image;
                document.getElementById('certMainText').textContent = siteData.certification.mainText;
                
                const certList = document.getElementById('certList');
                if (certList && siteData.certification.list) {
                    certList.innerHTML = siteData.certification.list.map(item => `
                        <div class="cert-item">
                            <span class="cert-icon">✓</span>
                            <span>${item}</span>
                        </div>
                    `).join('');
                }
            }
        }
    }
    
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
    
    // Active nav highlighting
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            (currentPath === '/' && link.getAttribute('href') === '/')) {
            link.classList.add('active');
        }
    });
    
    // Fade in animations on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.feature-card, .therapist-card, .service-tag').forEach(el => {
        observer.observe(el);
    });
})();