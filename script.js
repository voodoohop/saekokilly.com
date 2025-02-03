document.addEventListener('DOMContentLoaded', () => {
    // Add any interactive elements or dynamic content here
    const listenButtons = document.querySelectorAll('.album button');
    listenButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Could link to streaming platforms
            window.open('https://open.spotify.com/artist/saeko-killy', '_blank');
        });
    });

    const tourTicketButtons = document.querySelectorAll('.tour-date button');
    tourTicketButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Could link to ticket sales
            alert('Ticket sales coming soon!');
        });
    });

    // Add interactivity for performance section if needed
    const performanceDetails = document.querySelector('.performance-details');
    performanceDetails.addEventListener('click', () => {
        alert('Interested in booking Saeko Killy? Contact her management for details.');
    });

    // Glitch effect for links
    const glitchLinks = document.querySelectorAll('.glitch-link');
    glitchLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.animation = 'glitch-skew 0.5s infinite linear alternate-reverse';
        });
        link.addEventListener('mouseleave', () => {
            link.style.animation = 'none';
        });
    });

    // Add pulsing effect to circuit overlays
    const circuitElements = document.querySelectorAll('.circuit-overlay');
    circuitElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.animation = 'circuit-pulse 0.5s infinite alternate';
        });
        element.addEventListener('mouseout', () => {
            element.style.animation = 'none';
        });
    });

    // Synth-like hover effects
    const hoverElements = document.querySelectorAll('.glitch-container, .glitch-link');
    hoverElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.color = 'var(--secondary-color)';
            element.style.textShadow = '2px 2px 0 var(--accent-color)';
        });
        element.addEventListener('mouseout', () => {
            element.style.color = '';
            element.style.textShadow = 'none';
        });
    });

    // Past events data structure
    const pastEvents = [
        {
            date: '2023-12-16',
            venue: 'Schleuse Zwei',
            location: 'Dusseldorf',
            type: 'Live'
        },
        // ... more past events
    ];

    // Handle past events toggle
    const pastEventsToggle = document.querySelector('.past-events-toggle');
    const pastEventsContainer = document.querySelector('.past-events');

    if (pastEventsToggle && pastEventsContainer) {
        pastEventsToggle.addEventListener('click', () => {
            const isHidden = pastEventsContainer.classList.contains('hidden');
            
            if (isHidden) {
                pastEventsContainer.classList.remove('hidden');
                pastEventsToggle.textContent = 'Hide Past Events';
                
                // Populate past events if not already done
                if (!pastEventsContainer.querySelector('.past-events-grid')) {
                    const pastEventsGrid = document.createElement('div');
                    pastEventsGrid.className = 'past-events-grid';
                    
                    // Add past events in reverse chronological order
                    pastEvents.reverse().forEach(event => {
                        const eventEl = document.createElement('div');
                        eventEl.className = 'tour-date';
                        eventEl.innerHTML = `
                            <h3>${new Date(event.date).toLocaleDateString('en-US', {
                                year: '2-digit',
                                month: 'short',
                                day: 'numeric'
                            })}</h3>
                            <p>${event.location}</p>
                            <p>${event.type} @ ${event.venue}</p>
                        `;
                        pastEventsGrid.appendChild(eventEl);
                    });
                    
                    pastEventsContainer.appendChild(pastEventsGrid);
                }
            } else {
                pastEventsContainer.classList.add('hidden');
                pastEventsToggle.textContent = 'Show Past Events';
            }
        });
    }

    // Image Carousel for Hero Section
    const heroImageCarousel = document.querySelector('.hero-image-carousel');
    if (heroImageCarousel) {
        const heroImages = heroImageCarousel.querySelectorAll('img');
        let currentImageIndex = 0;

        function cycleImages() {
            heroImages[currentImageIndex].classList.remove('active');
            currentImageIndex = (currentImageIndex + 1) % heroImages.length;
            heroImages[currentImageIndex].classList.add('active');
        }

        // Change image every 5 seconds
        setInterval(cycleImages, 5000);
    }

    // Add hover effects for performance types
    const performanceTypes = document.querySelectorAll('.performance-type');
    performanceTypes.forEach(type => {
        type.addEventListener('mouseenter', () => {
            type.style.transform = 'translateY(-5px)';
            type.style.boxShadow = '0 10px 20px rgba(0, 255, 255, 0.2)';
        });
        
        type.addEventListener('mouseleave', () => {
            type.style.transform = 'translateY(0)';
            type.style.boxShadow = 'none';
        });
    });
    
    // Initialize Leaflet map
    const mapElement = document.getElementById('map');
    if (mapElement) {
      const map = L.map('map', {
          zoomControl: false,
        });
        map.setView([50, 10], 3); // Centered on Europe

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);

      // Tour Locations (add latitude and longitude)
        const tourLocations = [
            { location: "Milano, Italy", lat: 45.4642, lng: 9.1900, date: 'Mar 21, 24' },
            { location: "Faenza, Italy", lat: 44.2880, lng: 11.8829, date: 'Mar 23, 24' },
            { location: "Strasbourg, France", lat: 48.5734, lng: 7.7521, date: 'Mar 29, 24' },
            { location: "Berlin, Germany", lat: 52.5200, lng: 13.4050, date: 'Apr 4, 24' },
            { location: "Amsterdam, Netherlands", lat: 52.3676, lng: 4.9041, date: 'Apr 20, 24' },
            { location: "Berlin, Germany", lat: 52.5200, lng: 13.4050, date: 'Apr 25, 24' }
        ];

       tourLocations.forEach(loc => {
          L.marker([loc.lat, loc.lng]).addTo(map)
          .bindPopup(`<b>${loc.location}</b><br>${loc.date}`);
      });
    }
});