// Checks when you pass #about so that it can remove the hidden class and add an animation one.

function animateAbout() {
    elementAboutShouldAnimate = false;

    const elementParagraph = document.getElementById('about-paragraph');
    elementParagraph.classList.remove('text-hidden');
    elementParagraph.classList.add('about-paragraph-animation');

    const elementSkills = document.getElementById('skills-container');
    elementSkills.classList.remove('text-hidden');
    elementSkills.classList.add('about-skills-animation');

    const skillArray = document.getElementsByClassName('skill');
    for (let i = 0; i < skillArray.length; i++) {
        skillArray[i].classList.add('about-skills-animation');
    }
}

function addScrollListener() {
    document.addEventListener('scroll', function(e) {

        const elementAbout = document.getElementById('about');
        const scrollBottom = window.scrollY + window.innerHeight;
        const elementAboutCenter = elementAbout.offsetTop + (elementAbout.offsetHeight/2);
    
        if (scrollBottom > elementAboutCenter && elementAboutShouldAnimate) {
            animateAbout();
        };
    })
}

// Smooths transition from current position to hyperlink.
function smoothHyperLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    }); 
}

// Generates and creates elements for #skills
function createSkillsList() {
    const skillListClass = ['html5', 'css3-alt', 'js', 'react', 'angular', 'node-js', 'git-alt', 'npm', 'sass'];
    const skillList = ['HTML', 'CSS', 'JavaScript', 'React', 'Angular', 'Node.js', 'Git', 'npm', 'Sass'];
    const elementSkill = document.getElementById('skills-container');

    skillListClass.forEach((skill, index) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('skill');

        const newIcon = document.createElement('i');
        newIcon.classList.add('fab');
        newIcon.classList.add('fa-' + skill.toLowerCase());
        newIcon.classList.add('fa-3x');
        newDiv.appendChild(newIcon);

        const newTitle = document.createElement('h3');
        newTitle.textContent = skillList[index];
        newDiv.appendChild(newTitle);

        elementSkill.appendChild(newDiv);
    });
}

function checkWindowWidth() {
    if (window.innerWidth < 730) {
        animateAbout();
    }
    else {
        window.addEventListener('resize', function(e) {
            if (elementAboutShouldAnimate && window.innerWidth < 730) {
                animateAbout();
            };
        });
    }
}

let elementAboutShouldAnimate = true; // To stop adding and removing from #about

function initializeScript() {
    checkWindowWidth();
    addScrollListener();
    smoothHyperLinks();
    createSkillsList();
}

initializeScript();