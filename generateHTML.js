function generateHTML(data) {
    return `<h3 class='cardHeader'>${data.name}</h3>
    <img src=${renderIcon(data)}>
    <h5>${data.title}</h5>
    <p>ID: ${data.id}</p>`
}

module.exports = generateHTML;