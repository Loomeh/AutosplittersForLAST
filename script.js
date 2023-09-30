document.addEventListener('DOMContentLoaded', function() {
    const autosplittersList = document.getElementById('autosplitters-list');
    const url = 'https://raw.githubusercontent.com/Wins1ey/LuaAutoSplitters/main/autosplitters.csv';

    fetch(url)
        .then(response => response.text())
        .then(data => {
            const rows = data.split('\n');
            rows.forEach(row => {
                const [name, link] = row.split(',');
                const listItem = document.createElement('li');
                const linkElement = document.createElement('a');
                linkElement.textContent = name;
                linkElement.href = link;
                listItem.appendChild(linkElement);
                autosplittersList.appendChild(listItem);
            });
        });
});
