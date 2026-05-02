// Basic auth using localStorage (demo only)
function _usersKey(){ return 'bh_users_v3'; }
function _sessionKey(){ return 'bh_session_v3'; }

function loadUsers(){ return JSON.parse(localStorage.getItem(_usersKey())||'{}'); }
function saveUsers(u){ localStorage.setItem(_usersKey(), JSON.stringify(u)); }

function registerUser({name,email,password}){
  const users = loadUsers();
  if(!email || !password) throw new Error('Email and password required');
  if(users[email]) throw new Error('Account already exists');
  users[email] = {name,email,password};
  saveUsers(users);
  // set session
  localStorage.setItem(_sessionKey(), JSON.stringify({email,name}));
}

function loginUser({email,password}){
  const users = loadUsers();
  if(!users[email] || users[email].password !== password) throw new Error('Invalid credentials');
  localStorage.setItem(_sessionKey(), JSON.stringify({email,name:users[email].name}));
}

function logoutUser(){
  localStorage.removeItem(_sessionKey());
  renderAuthArea();
}

function currentUser(){
  return JSON.parse(localStorage.getItem(_sessionKey())||'null');
}

// render auth area in header
function renderAuthArea(){
  const el = document.getElementById('auth-area');
  if(!el) return;
  const user = currentUser();
  if(user){
    el.innerHTML = `<div class="auth-badge"><div class="avatar">${user.name.split(' ').map(n=>n[0]).slice(0,2).join('').toUpperCase()}</div><div style="display:flex;flex-direction:column"><strong>${user.name}</strong><button id="logoutBtn" class="btn ghost" style="margin-top:6px">Logout</button></div></div>`;
    const btn = document.getElementById('logoutBtn');
    if(btn) btn.addEventListener('click', logoutUser);
  } else {
    el.innerHTML = `<div class="auth-guest"><a href="login.html">Login</a></div>`;
  }
}

document.addEventListener('DOMContentLoaded', ()=>renderAuthArea());
