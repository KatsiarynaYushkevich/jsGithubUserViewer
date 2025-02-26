const form = document.querySelector("form");
const userInput = document.querySelector(".user_input");
const user = document.querySelector(".user");
const next_videos = document.querySelector(".next_videos");

function addUserInfo(userInfo) {
  user.innerHTML = `
  <img src="${userInfo.avatar_url}"></img>  
  <div class="user_info">
  <p>${userInfo.login}</p>
  <p>Дата регистрации: ${new Date(userInfo.created_at).toLocaleString()}</p>
  <p>Ссылка на профиль: ${userInfo.html_url}</p>
  <p>Репозиториев: ${userInfo.public_repos}</p>
  </div>
  `;
}

// function showUsersInfo(users) {
//   users.forEach((el) => {
//     user.innerHTML += `
//      <p>${el.name}</p>
//   `
//   });
// }

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getUser();
  // getJsonplaceholderUsers();
  userInput.value = "";
});

const getUser = async () => {
  try {
    const response = await fetch(
      `https://api.github.com/users/${userInput.value}`
    );
    if (!response.ok) {
      throw new Error("Ошибка статус-кода");
    }
    const userInfo = await response.json();
    addUserInfo(userInfo);
  } catch (error) {
    console.error(error);
  }
};

// const getJsonplaceholderUsers = async () => {
//   try {
//     const users = await fetch(`https://jsonplaceholder.typicode.com/users`);
//     if (!users.ok) {
//       throw new Error("Ошибка статус-кода");
//     }
//     const jsonplaceholderUsers = await users.json();
//     showUsersInfo(jsonplaceholderUsers);
//   } catch (error) {
//     console.error(error);
//   }
// };
