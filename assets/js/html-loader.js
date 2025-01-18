const templates = [
    'contact-me.html',
    'about-me.html',
    'projects.html',
    'competences.html',
    'attributes.html',

];

function loadTemplate(templateUrl, targetId) {
    fetch(templateUrl)
        .then(response => response.text())
        .then(data => {
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = data;
            const template = tempDiv.querySelector('template').content;
            const target = document.querySelector(targetId);
            target.appendChild(document.importNode(template, true));
        })
        .catch(error => console.error('Error loading template:', error));
}

document.addEventListener('DOMContentLoaded', () => {
    templates.forEach(template => {
        loadTemplate(`/templates/${template}`, '#templates-container');
    });
});
