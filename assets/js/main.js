
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

    const position = document.getElementById('profile.position')
    position.innerText = profileData.position

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    phone.href = `tell:${profileData.phone}`

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

}   

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softskills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')
}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
        hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')
}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')
}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project => {
        return `
        <li>
            <h3 ${project.github ? 'class="github"': ''}">${project.name}</h3>
            <a href="${project.url}" target="_blank">${project.url}</a>
            </li>`
    }).join('')
}

function updateExperience(profileData) {
    const experience = document.getElementById('profile.experience')
    experience.innerHTML = profileData.experience.map(experience => {
        return `
        <li>
            <h3 class="title">${experience.name}</h3>
            <span class="period">${experience.period}</span>
            <p>${experience.description}</p>
        </li>`
    }).join('')
}

function updateEducation(profileData) {
    const education = document.getElementById('profile.education')
    education.innerHTML = profileData.education.map(course => {
        return `
        <li>
            <h3 class="title">${course.course}</h3>
            <span class="period"><a href="${course.url}" target="_blank">${course.institute}</a></span>
            <p class= "date-period">
                ${course.period}
            </p>
            <p>
                ${course.description}
            </p>
        </li>`
    }).join('')
}

(async function (){
    const profileData = await fetchProfileData()    
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateExperience(profileData)
    updateEducation(profileData)     
})()