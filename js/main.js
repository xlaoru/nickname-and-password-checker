let userNickname = document.getElementById('nickname')
let userPassword = document.getElementById('password')
let submitBtn = document.getElementById('submit')
let mainOut = document.getElementById('out')

let nicknames = ['vasya', 'ilya', 'elena', 'dima']
let passwords = ['2346', '9235', '0324', '7294']

submitBtn.addEventListener('click', function () {
  let nicknameValue = userNickname.value
  let passwordValue = userPassword.value
  mainOut.textContent = nicknameValue + ' ' + passwordValue

  for (let i = 0; i < passwords.length && i < nicknames.length; i++) {
    console.log(nicknames[i], passwords[i])
    if (nicknameValue === nicknames[i] && passwordValue === passwords[i]) {
      userNickname.style.border = '2.5px solid green'
      userPassword.style.border = '2.5px solid green'
      break
    }
    if (nicknames.length === nicknames.length || passwords.length === passwords.length && passwordValue !== passwords[i] || nicknameValue !== nicknames[i]) {
      userNickname.style.border = '2.5px solid red'
      userPassword.style.border = '2.5px solid red'
    }
  }
})