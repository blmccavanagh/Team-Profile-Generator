// const createTeamMember = require
function managerCard(manager) {
    return `
    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-2 border-gray-300 rounded-lg p-2 m-2">
    
    <h3 class="font-bold uppercase text-gray-600">${manager.getName()}</h3>

   <h5>${manager.getRole()}</h5>
    <p>ID: ${manager.getID()}</p>
    <p>Email: ${manager.getEmail()}</p>
    <p>Office Number: ${manager.getOfficeNumber()}</p>
    
    </div>
    `
}
/* <img src=${renderIcon(manager)}></img> */

function engineerCard(engineer) {
    return `
    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-2 border-gray-300 rounded-lg p-2 m-2">
    
    <h3 class="font-bold uppercase text-gray-600">${engineer.getName()}</h3>

   <h5>${engineer.getRole()}</h5>
    <p>ID: ${engineer.getID()}</p>
    <p>Email: ${engineer.getEmail()}</p>
    <p>GitHub: ${engineer.getGitHub()}</p>
    
    </div>
    `
}

function internCard(intern) {
    return `
    <div class="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-2 border-gray-300 rounded-lg p-2 m-2">
    
    <h3 class="font-bold uppercase text-gray-600">${intern.getName()}</h3>

   <h5>${intern.getRole()}</h5>
    <p>ID: ${intern.getID()}</p>
    <p>Email: ${intern.getEmail()}</p>
    <p>School: ${intern.getSchool()}</p>
    
    </div>
    `
}

function generateHTML(data) {
    let card = '';

    for (let i = 0; i < data.length; i++) {
        if (data[i].getRole() === 'Manager') {
            card += managerCard(data[i]);
        } else if (data[i].getRole() === 'Engineer') {
            card += engineerCard(data[i]);
        } else {
            card += internCard(data[i]);
        }
    }

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://unpkg.com/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
        <link href="style.css" rel="stylesheet">
        <title>Team Profile Generator</title>
    </head>
    
    <body class="leading-normal tracking-normal mt-12">
    
        <header>
    
            <h1>
                My Team
            </h1>
    
        </header>

        <main
        class="flex flex-row flex-wrap flex-grow m-2 border-transparent rounded-lg shadow-xl">
                ${card}
            </main>

            <footer id="footer" class="handwriting shadow px-4 shadow-2xl"><span class="glow">Made by </span><span>B.</span>
                <section class="grid grid-cols-4 lg:grid-cols-8 grid-rows-2 lg:grid-rows-1 gap-2">
                    <a href="https://blmccavanagh.github.io/Professional-Portfolio/"
                        alt="A styled personal website icon providing a hyperlink to Bridget McCavanagh's professional portfolio website."><img
                            class="object-scale-down" src="images/icons/portfolio.png"></a>
                    <a href="tel:+61-0466-265-845"
                        alt="A styled telephone Icon with a phone link to contact +61-466-265-845."><img
                            class="object-scale-down" src="images/icons/phone.PNG"></a>
                    <a href="mailto:b@justcallmeb.com" class="object-scale-down"><img src="images/icons/email.PNG"
                            alt="A styled email icon providing a email link to b@justcallmeB.com"></a>
                    <a href="https://www.instagram.com/exolvoppt" target=_blank class="object-scale-down"><img
                            src="images/icons/instagram.PNG"
                            alt="A styled Instagram.com icon providing a hyperlink to the website."></a>
                    <a href="https://twitter.com/blmccavanagh" class="object-scale-down"><img
                            src="images/icons/twitter.PNG"
                            alt="A styled Twitter.com icon providing a hyperlink to the website."></a>
                    <a href="https://www.linkedin.com/in/blmccavanagh"
                        alt="A styled Linkedin.com icon providing a hyperlink to the website." class="object-scale-down"><img
                            src="images/icons/linkedin.PNG"></a>
                    <a href="https://github.com/blmccavanagh" class="object-scale-down"><img
                            src="images/icons/github.PNG"
                            alt="A styled GitHub.com icon providing a hyperlink to the user profile on the website."></a>
                    <a href="download-items/resume.pdf" download="Bridget McCavanagh - Resume"
                        alt="A styled document icon providing a hyperlink to a resume document download."><img
                            class="object-scale-down" src="images/icons/resume.JPG"></a>
                    <br>
                </section>
            </footer>
    </body>
    
    </html>`
}

module.exports = generateHTML;