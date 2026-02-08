function getUser() {
  return JSON.parse(localStorage.getItem("currentUser"));
}

function requireLogin() {
  if (!getUser()) window.location.href = "login.html";
}

function getData(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}

function setData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function isAdmin() {
  let users = getData("users");
  let current = getUser();
  return users.length > 0 && current && users[0].username === current.username;
}
