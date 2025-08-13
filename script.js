const darkModeButton = document.getElementById('darkMode');
const nameInput = document.getElementById('nameInput');
const numberInput = document.getElementById('numberInput');
const users = document.querySelector('.users');
const addButton = document.getElementById('addButton');

function addUser() {
    if (nameInput.value.trim() == '' || numberInput.value.trim() == '') {
        alert('Введите имя и номер!');
        return;
    }

    let user = document.createElement('li');
    user.classList.add('user');

    user.innerHTML = `
        <div class="user">
            <img class="userImg" src="Group 232.png" alt="">
            <div class="name">
                <h2>${nameInput.value}</h2>
                <p>${numberInput.value}</p>
            </div>
            <div class="buttons">
                <button class="editButton"><img src="tabler_edit.png" alt=""></button>
                <button class="deleteButton"><img src="Vector (6).png" alt=""></button>
            </div>
        </div>
    `;

    users.appendChild(user);
    
    nameInput.value = '';
    numberInput.value = '';
}

addButton.addEventListener('click', addUser);

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function addUser() {
    if (!nameInput.value || !numberInput.value) return alert('Введите имя и номер!');

    let user = document.createElement('div');
    user.className = 'user';
    user.innerHTML = `
        <img class="userImg" src="Group 232.png">
        <div class="name">
            <h2>${nameInput.value}</h2>
            <p>${numberInput.value}</p>
        </div>
        <div class="buttons">
            <button class="editButton"><img src="tabler_edit.png"></button>
            <button class="deleteButton"><img src="Vector (6).png"></button>
        </div>
    `;

    user.querySelector('.deleteButton').onclick = () => user.remove();
    user.querySelector('.editButton').onclick = () => {
        let h2 = user.querySelector('h2');
        let p = user.querySelector('p');
        h2.textContent = prompt('Имя:', h2.textContent) || h2.textContent;
        p.textContent = prompt('Номер:', p.textContent) || p.textContent;
    };

    users.appendChild(user);
    nameInput.value = numberInput.value = '';
}

