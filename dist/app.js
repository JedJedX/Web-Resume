const myResume = {
    personal: {
        name: "Jedsada Chimnok",
        position: "Frontend Developer",
        email: "jedsada.omsin@gmail.com",
        image: "./assets/profile.jpg",
        phone: "063-516-3985",
        location: "Bang Phlat, Bangkok",
        about: "Hello everyone who's viewing my web resume. I created this web resume to assess my own capabilities in writing my own resumes. More importantly, I enjoy working on fontend development and learning how it works. I won't stop developing my fontend skills, so I'll be updating this regularly."
    },
    education: {
        university: "Suan Sunandha Rajabhat University",
        major: "Computer Science",
        gpa: 3.56
    },
    project: {
        gamejam: "IcecreamPanic",
    },
    skills: {
        programming: ["Java", "Python", "JavaScript", "TypeScript"],
        frontend: ["React.js", "HTML", "CSS"],
        tools: ["Git/GitHub", "Figma", "VS Code"]
    },
    Contact: {
        lindid: ["aom2011.46"],
        egmail: ["jedsada.omsin@gmail.com"],
    },
    socialmedia: {
        facebook: ["https://web.facebook.com/aom.casnova.5/?locale=th_TH"],
        instagram: ["https://www.instagram.com/jao_ch1m.avi/"],
    },
};
function render() {
    const appElement = document.getElementById('app');
    if (appElement) {
        appElement.innerHTML = `
            <div class="header">
                <img src="${myResume.personal.image}" alt="Jedsada Profile" class="profile-img">
                <h1>${myResume.personal.name}</h1>
                <p class="position">${myResume.personal.position}</p>
            </div>

            <div class="section">
                <h2>About Me</h2>
                <p>${myResume.personal.about}</p>
            </div>

            <div class="section">
                <h2>Education</h2>
                <h3><p>${myResume.education.university}</p></h3>
                <p>GPA: ${myResume.education.gpa}</p>
            </div>
            <div class="section">
                <h2>Projects</h2>
                <div class="contact-grid">
                    <div class="contact-item">
                        <p>${myResume.project.gamejam} : "developing"</p>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Skills</h2>
                    <div class="skill-group"
                        <h3>Programming</h3>
                        <div class="skill-tags">
                            ${myResume.skills.programming.map(s => `<span class="tag">${s}</span>`).join('')}
                        </div>
                    </div>
                    <div class="skill-group">
                        <h3>Frontend</h3>
                        <div class="skill-tags">
                            ${myResume.skills.frontend.map(s => `<span class="tag">${s}</span>`).join('')}
                        </div>
                    </div>

                    <div class="skill-group">
                        <h3>Tools</h3>
                        <div class="skill-tags">
                            ${myResume.skills.tools.map(s => `<span class="tag">${s}</span>`).join('')}
                        </div>
                    </div>
                    
                    <div class="section contact-section">
                            <h2>Contact</h2><br>
                            <div class="contact-grid">
                                <div class="contact-item">
                                    <h3>Email : </h3> 
                                    <p>${myResume.Contact.egmail[0]}</p> 
                                </div>
                                <div class="contact-item">
                                    <h3>Line ID : </h3> 
                                    <a href="https://line.me/ti/p/~${myResume.Contact.lindid}" target="_blank">${myResume.Contact.lindid}</a>
                                </div>
                                <div class="contact-item">
                                    <h3>Facebook : </h3> 
                                    <a href="${myResume.socialmedia.facebook}" target="_blank">Jedsada Chimnok</a>
                                </div>
                            </div>
                        </div>
                    </div>
        `;
    }
}
render();
export {};
