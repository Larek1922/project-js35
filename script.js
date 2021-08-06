// fetch('https://webheroschool.github.io/lar1')
fetch('https://api.github.com/users/')
  .then(res => res.json())
  .then(json => {
 document.querySelector('.avatar_url').innerHTML += `<img src=${json.avatar_url}alt="">`;
 document.querySelector('.login').innerHTML += json.login;
 document.querySelector('.bio').innerHTML += json.bio;
 document.querySelector('.url').innerHTML += json.url;
 
    let bio = document.createElement('div');
    bio.className = 'bio';
    bio.innerHTML = json.bio;
    if (json.bio === null) {
      document.body.append('Нет информации о пользователе');
    } 
})

// можно получить url при помощи window.location.href и вырезать оттуда нужный фрагмент с ником и его уже вставить в url запроса fetch

// body.append(name);

//    name.addEventListener("click", () => window.location = 'https://api.github.com/users/');

// window.location.href = 'https://api.github.com/users/lar1';
// append(name);
name.addEventListener("click", () => window.location = 'https://github.com/?username=${getNameFromUrl(https://api.github.com/users/lar1)}');