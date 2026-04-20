const myResume = {
    personal: {
        name: "Jedsada Chimnok",
        position: "Frontend Developer",
        email: "jedsada.omsin@gmail.com",
        phone: "063-516-3985",
        location: "Bang Phlat, Bangkok",
        about: "I am eager to develop my skills in UX Research, Wireframing, and Prototyping..."
    },
    education: {
        university: "Suan Sunandha Rajabhat University",
        major: "Computer Science",
        gpa: 3.56
    },
    skills: {
        programming: ["Java", "Python", "JavaScript", "TypeScript"],
        frontend: ["React.js", "HTML", "CSS"],
        tools: ["Git/GitHub", "Figma", "VS Code"]
    }
};
function render() {
    const appElement = document.getElementById('app');
    if (appElement) {
        appElement.innerHTML = `
            <div class="header">
                <h1>${myResume.personal.name}</h1>
                <p class="position">${myResume.personal.position}</p>
            </div>

            <div class="section">
                <h2>About Me</h2>
                <p>${myResume.personal.about}</p>
            </div>

            <div class="section">
                <h2>Education</h2>
                <p>${myResume.education.university}</p>
                <p>GPA: ${myResume.education.gpa}</p>
            </div>

            <div class="section">
                <h2>Skills</h2>
                <div class="skill-tags">
                    ${myResume.skills.programming.map(s => `<span class="tag">${s}</span>`).join('')}
                </div>
            </div>
        `;
    }
}
render();
export {};
