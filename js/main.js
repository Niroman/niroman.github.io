// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
        navToggle.classList.toggle('active');
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            if (window.innerWidth <= 968) {
                navMenu.style.display = 'none';
                navToggle.classList.remove('active');
            }
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.style.color = '';
            });
            if (navLink) {
                navLink.style.color = 'var(--primary-color)';
            }
        }
    });
});

// Skills Filter Functionality
const skillTabs = document.querySelectorAll('.skill-tab');
const skillCategories = document.querySelectorAll('.skill-category');

skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        skillTabs.forEach(t => t.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Get selected category
        const category = tab.getAttribute('data-category');

        // Filter skill categories
        skillCategories.forEach(cat => {
            if (category === 'all') {
                cat.classList.remove('hidden');
            } else if (cat.getAttribute('data-category') === category) {
                cat.classList.remove('hidden');
            } else {
                cat.classList.add('hidden');
            }
        });
    });
});

// Engineering Section Toggle
const engineeringTabs = document.querySelectorAll('.engineering-tab');
const challengesContent = document.getElementById('challenges-content');
const initiativesContent = document.getElementById('initiatives-content');

engineeringTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        engineeringTabs.forEach(t => t.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Get selected type
        const type = tab.getAttribute('data-type');

        // Toggle content
        if (type === 'challenges') {
            challengesContent.classList.remove('hidden');
            initiativesContent.classList.add('hidden');
        } else {
            challengesContent.classList.add('hidden');
            initiativesContent.classList.remove('hidden');
        }
    });
});

// Profile Photo Alternating (every 5 minutes)
const photo1 = document.getElementById('photo1');
const photo2 = document.getElementById('photo2');
let currentPhoto = 1;

function switchPhoto() {
    if (currentPhoto === 1) {
        photo1.classList.remove('active');
        photo2.classList.add('active');
        currentPhoto = 2;
    } else {
        photo2.classList.remove('active');
        photo1.classList.add('active');
        currentPhoto = 1;
    }
}

// Switch every 5 minutes (300000 milliseconds)
setInterval(switchPhoto, 300000);

// Modal functionality for journey achievements
const achievements = {
    qualcomm: {
        title: 'Senior Cellular Systems Test Engineer',
        company: 'Qualcomm (2021 - Present)',
        items: [
            'Lead 5G NR and LTE modem validation across multiple device platforms',
            'Developed Python automation frameworks reducing test execution time by 40%',
            'Implemented QuickSight dashboards for real-time performance monitoring',
            'Collaborated with cross-functional teams to resolve critical system issues'
        ]
    },
    federated: {
        title: 'Software Engineer - Wireless Algorithm Development',
        company: 'Federated Wireless (2019 - 2021)',
        items: [
            'Developed optimization algorithms for CBRS base station deployment',
            'Simulated interference patterns for 6GHz wireless channels',
            'Built Matlab tools for antenna performance analysis',
            'Contributed to network planning for dense deployment areas'
        ]
    }
};

function openModal(company) {
    const modal = document.getElementById('achievementModal');
    const data = achievements[company];

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalCompany').textContent = data.company;

    const list = document.getElementById('modalAchievements');
    list.innerHTML = '';
    data.items.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('achievementModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('achievementModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}
