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
            date: '2021-09-04',
            venue: 'Mutant Radio',
            location: 'OTB Berlin',
            type: 'Live'
        },
         {
            date: '2021-09-07',
            venue: 'Radio Bollwerk',
             location: 'with Dominik André',
            type: 'Live'
        },
        {
            date: '2021-09-18',
            venue: 'Horrorscope',
            location: 'Sameheads w/Alicia Carerra,Bogdan Orbita',
            type: 'Live'
        },
        {
            date: '2021-09-19',
            venue: 'VOODOOHOP',
            location: 'Gaswerksiedelung',
            type: 'Live'
        },
        {
            date: '2021-10-02',
             venue: 'Arkaoda',
            location: 'w/Andre Pahl,Mr.Monday',
            type: 'Live'
       },
         {
             date: '2021-10-03',
            venue: 'ZIEGRA KINDER',
            location: 'Ziegrastrasse',
            type: 'Live'
        },
         {
             date: '2021-10-16',
             venue: 'OTB',
            location: 'w/Sanja Cozma',
             type: 'Live'
        },
         {
            date: '2021-10-20',
             venue: 'Musicas dispares',
             location: 'Crack Bellmer',
             type: 'Live'
         },
         {
             date: '2021-10-30',
            venue: 'Marvin\'s Dream after party',
            location: 'MONOM w/voodoohop',
             type: 'Live'
        },
         {
             date: '2021-11-19',
            venue: 'Sameheads',
             location: 'w/DJ Sofa, Tako',
            type: 'Live'
        },
         {
            date: '2021-12-11',
            venue: 'Arkaoda',
            location: '(Live)w/Alicia Carrera,Diamin,So Far',
             type: 'Live'
        },
        {
            date: '2022-03-09',
            venue: 'HeadsRadio',
            location: '(Live)',
             type: 'Live'
        },
        {
            date: '2022-04-01',
            venue: 'Paloma bar',
           location: '',
            type: 'DJ'
        },
         {
            date: '2022-04-26',
            venue: 'Museum of Communication Berlin',
            location: 'Glitches#2',
            type: 'DJ'
        },
         {
            date: '2022-04-30',
            venue: 'Sameheads',
             location: 'Mutant Radio night',
            type: 'DJ'
        },
         {
             date: '2022-05-07',
            venue: 'OTB',
            location: '(Bordinstr.232)',
            type: 'DJ'
        },
         {
            date: '2022-05-25',
            venue: 'Loophole',
            location: 'ecoutes au vert',
           type: 'Live'
        },
        {
           date: '2022-06-03',
            venue: 'Alphonse Kreuzberg',
            location: '',
            type: 'DJ'
        },
        {
            date: '2022-06-06',
            venue: 'KaterBlau',
            location: '',
            type: 'DJ'
        },
         {
            date: '2022-06-24',
             venue: 'gArten',
            location: 'w/Harmony Molina, Chris Imler',
            type: 'DJ'
        },
        {
           date: '2022-07-03',
            venue: 'Fusion Festival',
           location: 'Karl Kutter',
             type: 'Live'
        },
        {
            date: '2022-07-08',
            venue: 'Pop im Ausland',
             location: '',
           type: 'Live'
        },
        {
           date: '2022-07-15',
            venue: 'Cosmic Gathering Chemnitz',
             location: '',
            type: 'Live'
        },
       {
            date: '2022-07-30',
            venue: 'Soukmachines',
             location: 'Paris',
             type: 'DJ'
        },
         {
            date: '2022-08-06',
            venue: 'Garbicz Festival',
            location: '(See Floor)in Poland',
            type: 'Live'
        },
        {
            date: '2022-08-11',
             venue: 'PANGEA Festival',
             location: '',
             type: 'Live'
        },
         {
            date: '2022-08-13',
            venue: 'Jonny Knuppel',
            location: '(Berlin)',
             type: 'Live'
        },
         {
            date: '2022-08-20',
            venue: 'Bucht der träumer',
            location: '(Helensee/Berlin)',
             type: 'Live'
        },
         {
           date: '2022-08-27',
            venue: 'Gaswerk Birthday party',
             location: '',
            type: 'DJ'
        },
         {
            date: '2022-09-03',
             venue: 'artists.unlimited',
            location: '(Bielefeld)',
            type: 'Live'
        },
         {
            date: '2022-09-16',
            venue: 'MULTITUDE Festival',
             location: '(Hannover)',
            type: 'Live'
        },
       {
            date: '2022-09-22',
             venue: 'SAMEHEADS for CUMGIRL8',
            location: '',
            type: 'DJ'
        },
         {
            date: '2022-10-03',
            venue: 'Mutant Radio',
            location: 'Streaming',
            type: 'DJ'
        },
         {
            date: '2022-10-07',
            venue: 'Arkaoda Berlin',
             location: '',
            type: 'DJ'
        },
        {
           date: '2022-10-29',
             venue: 'Kauz',
            location: '(Zurich)',
            type: 'Live'
        },
         {
             date: '2022-11-12',
            venue: 'Bonna Pot',
            location: '(Kawasaki/JPN)',
             type: 'DJ'
        },
         {
           date: '2022-11-26',
            venue: 'Nagomibar',
            location: '(Kobe/JPN)w/Thomash,Ground',
           type: 'DJ'
        },
         {
            date: '2022-12-03',
            venue: 'Ryukyu Folklore',
            location: '(Okinawa/JPN)',
            type: 'DJ'
        },
         {
            date: '2022-12-06',
            venue: 'SPREAD',
            location: '(Shimokitazawa/Tokyo)',
            type: 'Live'
        },
        {
            date: '2022-12-10',
            venue: 'Bar Bonobo',
            location: '(Tokyo)',
            type: 'DJ'
        },
         {
            date: '2023-02-03',
            venue: 'Ziegra Str.',
            location: '(Berlin)',
            type: 'DJ'
        },
         {
            date: '2023-02-23',
            venue: 'Golden Salon',
             location: '(Hamburg)',
             type: 'Live'
        },
        {
            date: '2023-02-24',
            venue: 'Kultur im Bunker',
            location: '(Bremen)',
             type: 'Live'
        },
         {
            date: '2023-02-26',
             venue: 'Narr Radio',
            location: '(Leeds,England)streaming',
             type: 'DJ'
        },
       {
             date: '2023-03-24',
            venue: 'Ziegra Str.',
            location: '(Berlin)',
            type: 'Live'
        },
        {
             date: '2023-03-25',
            venue: 'BEEK',
            location: '(Hamburg)',
            type: 'Live'
        },
        {
           date: '2023-03-31',
            venue: 'Arkaoda Berlin',
            location: '',
            type: 'DJ'
        },
         {
           date: '2023-04-09',
             venue: 'Klunkekranich Berlin',
             location: '',
            type: 'Live'
        },
        {
            date: '2023-04-15',
             venue: 'Sameheads Berlin',
            location: '',
            type: 'Live'
        },
         {
             date: '2023-05-05',
            venue: 'Urban Spree Berlin',
             location: '',
           type: 'Live'
        },
       {
           date: '2023-05-12',
            venue: 'TBA Geneva',
             location: '',
            type: 'Live'
        },
        {
           date: '2023-05-20',
             venue: 'KAOS Berlin',
           location: '',
             type: 'DJ'
        },
         {
            date: '2023-05-26',
             venue: 'Inport Export Munchen',
           location: '',
             type: 'Live'
        },
         {
           date: '2023-05-27',
             venue: 'City Club',
            location: '(AUGSBURG)',
             type: 'DJ'
        },
        {
            date: '2023-06-03',
             venue: 'Thomash\'s 🎉 🎂 Birthday `Pipeland\' Berlin',
            location: '(PM for the place)',
             type: 'DJ'
        },
         {
             date: '2023-07-01',
            venue: 'Fusion Velvet Soup',
             location: '',
           type: 'Live'
        },
         {
           date: '2023-07-07',
             venue: 'Light, Marzipan and Death',
            location: '(France)',
           type: 'Live'
        },
        {
             date: '2023-07-23',
            venue: 'Balearic Sunday/ Palaispalett',
             location: '(Dresden)',
             type: 'Live'
        },
        {
           date: '2023-07-30',
            venue: 'Zuckerzauber',
            location: '',
             type: 'DJ'
        },
         {
           date: '2023-08-12',
            venue: 'Arkaoda Berlin',
             location: 'Chill Mountain REC',
            type: 'Live'
        },
         {
           date: '2023-08-18',
            venue: 'Cosmic Deluxe',
             location: '(near Berlin)',
             type: 'Live'
        },
        {
            date: '2023-08-25',
           venue: 'SAMEHEADS',
           location: '(Berin)',
            type: 'DJ'
        },
        {
            date: '2023-09-01',
            venue: 'KaterBlau',
            location: '',
           type: 'Live'
        },
       {
           date: '2023-09-02',
            venue: 'Ziegra Strasse',
            location: '(Berlin)',
           type: 'Live'
        },
        {
           date: '2023-09-03',
            venue: 'Lusatia Festival',
            location: '(Germany)',
            type: 'DJ'
        },
         {
           date: '2023-09-14',
            venue: 'Goulash Disco',
           location: '(Croatia)',
            type: 'Live & DJ'
        },
         {
            date: '2023-10-19',
            venue: 'Genezarethkirche',
             location: '(Berlin)',
             type: 'Live'
        },
         {
            date: '2023-11-24',
             venue: 'Zentralwäscherei',
            location: '(Zurich,CH)',
             type: 'Live'
        },
         {
            date: '2023-11-25',
            venue: 'TomTom Klub',
            location: '(Biel,CH)',
             type: 'Live'
        },
        {
           date: '2023-12-01',
            venue: 'Sameheads',
             location: '(Berlin)',
           type: 'DJ'
        },
         {
           date: '2023-12-06',
           venue: 'Headsradio',
            location: '(Berlin)',
             type: 'Live'
        },
         {
           date: '2023-12-16',
            venue: 'Schleuse Zwei',
             location: 'Dusseldorf',
             type: 'Live'
         },
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