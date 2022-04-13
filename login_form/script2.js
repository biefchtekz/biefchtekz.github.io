let usersArray = [] // Масив з даними користувачів
function saveData(){ // Збереження форми
    let userName = document.getElementById('name').value
    let userPasswd = document.getElementById('password').value
    let userEmail = document.getElementById('email').value
    if (userName != '' && userPasswd != '' && userEmail != ''){
        usersArray.push([userName, userPasswd, userEmail])
        listUpdate()
    }
}
function listUpdate(){ // Ононвлення списку
    let finalData =''
    for (let i=0; i<usersArray.length;i++){
        let currentUserData = usersArray[i]
         finalData +=
            `<div class="list_data">\n` +
            `     <div class="user_data">\n` +
            `          <label class="list_num">${i+1}</label>\n` +
            `          <label class="list_login">${currentUserData[0]}</label>\n` +
            `          <label class="list_password">${currentUserData[1]}</label>\n` +
            `          <label class="list_email">${currentUserData[2]}</label>\n` +
            `          <label class="list_edit"><button class="setting_button edit-button" onclick="editUser(${i})">Edit</button></label>\n` +
            `          <label class="list_delete"><button class="setting_button delete-button" onclick="deleteUser(${i})">Delete</button></label>\n` +
            `     </div>\n` +
            `</div>`
    }
    document.getElementById('userForm').reset()
    document.getElementById('userList').innerHTML = finalData
}
function editUser(num){ // Редагування користувача зі списку
    let currentUser = usersArray[num]
    document.getElementById('name').value = currentUser[0]
    document.getElementById('password').value = currentUser[1]
    document.getElementById('email').value = currentUser[2]
    document.getElementById('saveEditButton').innerText = 'Edit user'
    document.getElementById('saveEditButton').setAttribute('onclick', `saveEditedUser(${num})`)
}
function saveEditedUser(num){ // Збереження відредагованого користувача зі списку
    let currentUser = []
    currentUser[0] = document.getElementById('name').value
    currentUser[1] = document.getElementById('password').value
    currentUser[2] = document.getElementById('email').value
    usersArray[num] = currentUser
    document.getElementById('saveEditButton').innerText = 'Add user'
    document.getElementById('saveEditButton').setAttribute('onclick', `saveData()`)
    listUpdate()
}
function deleteUser(num){ // Видалення користувача зі списку
    usersArray.splice(num, 1)
    listUpdate()
}