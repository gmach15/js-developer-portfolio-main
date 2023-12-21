
async function fetchProfileData () {
    const url = 'https://raw.githubusercontent.com/gmach15/js-developer-portfolio-main/main/data/profile.json'
    const fetching = await fetch(url)
    return await fetching.json() 
}

