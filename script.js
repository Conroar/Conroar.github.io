// --- LANGUAGE DATA ---
const langData = {
    en: {
        nav_home: "Home", nav_projects: "Projects", nav_art: "Art", nav_photo: "Photography", nav_video: "Video", nav_about: "About", nav_resume: "Resume",
        hero_sub: "GAMING • PHOTOGRAPHY • PROGRAMMING • 3D ART",
        home_journey_title: "Creative Journey",
        home_journey_text: "My journey is fueled by a passion for technology and visual arts. I blend innovative ideas with artistic expression across gaming, photography, and code.",
        home_game_title: "Game Design",
        home_game_text: "Prioritizing Efficiency and Quality. I create compelling narratives through immersive visuals and sound design.",
        about_bio: "Hello, and welcome to my corner of the internet! My name is Connor Boyer..."
    },
    zh: {
        nav_home: "首页", nav_projects: "项目", nav_art: "艺术", nav_photo: "摄影", nav_video: "视频", nav_about: "关于", nav_resume: "简历",
        hero_sub: "游戏 • 摄影 • 编程 • 3D艺术",
        home_journey_title: "创意之旅",
        home_journey_text: "我的旅程源于对技术和视觉艺术的热情。我将创新理念与艺术表达融合在游戏、摄影和代码中。",
        home_game_title: "游戏设计",
        home_game_text: "注重效率和质量。我通过沉浸式视觉和声音设计创造引人入胜的叙事。",
        about_bio: "你好，欢迎来到我的互联网角落！我叫Connor Boyer..."
    }
};

// --- NAVIGATION LOGIC ---
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });

    // Show the target section
    const target = document.getElementById(sectionId);
    if (target) {
        target.classList.add('active-section');
    }
    
    // Optional: Scroll to top
    window.scrollTo(0,0);
}

// --- ART SUB-NAVIGATION ---
function showArtSub(id) {
    document.querySelectorAll('.art-subsection').forEach(s => {
        s.classList.remove('active-subsection');
        s.style.display = 'none';
    });
    const target = document.getElementById(id);
    target.style.display = 'block';
    target.classList.add('active-subsection');

    document.querySelectorAll('.sub-nav-btn').forEach(b => b.classList.remove('active'));
    document.querySelector(`[onclick="showArtSub('${id}')"]`).classList.add('active');
}

// --- LANGUAGE SWITCHER ---
function setLanguage(lang) {
    document.querySelectorAll('[data-lang-key]').forEach(elem => {
        const key = elem.getAttribute('data-lang-key');
        if (langData[lang][key]) {
            elem.innerText = langData[lang][key];
        }
    });
}

// --- PROJECT MODAL LOGIC ---
function openProjectModal(button) {
    const card = button.closest('.project-card');
    const title = card.getAttribute('data-title');
    const tech = card.getAttribute('data-tech');
    const desc = card.getAttribute('data-desc');

    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-tech').innerText = tech;
    document.getElementById('modal-desc').innerText = desc;

    document.getElementById('project-modal').style.display = 'flex';
}

function closeProjectModal() {
    document.getElementById('project-modal').style.display = 'none';
}

// Close modal if clicking outside box
window.onclick = function(event) {
    const modal = document.getElementById('project-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// --- LIGHTBOX LOGIC ---
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);

document.querySelectorAll('.lightbox-trigger').forEach(img => {
    img.addEventListener('click', e => {
        lightbox.innerHTML = `<img src="${e.target.src}" class="lightbox-content">`;
        lightbox.classList.add('active');
    });
});

lightbox.addEventListener('click', () => {
    lightbox.classList.remove('active');
});