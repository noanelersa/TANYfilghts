const loginService = require("../service/login")
const userService = require('../service/user')



function renderHomePage(req, res) {  
  res.render("homeScreen", {username: req.session.username, userType: req.session.userType})
}

function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/');
  });
}

async function login(req, res) {
  const { username, password } = req.body
  const result = await loginService.login(username, password)
  if (result) {
    req.session.username = String(username).includes("Airport-") ? username.substring(8) : String(username).includes("Admin-") ? username.substring(6) : username;
    req.session.userType = result;
    res.redirect('/');
  }
  else
  return res.status(404).json({errors:['Username Not Found, Sign Up']})
}

async function register(req, res) {
  const { username, password, email ,firstname, lastname, age} = req.body

  try {
    await loginService.register(username, password ,firstname, lastname, email, age)
    req.session.username = username
    res.redirect('/')
  }
  catch (e) {
    return res.status(404).json({errors:['Username Already Taken']})

  }    
}

module.exports = {
  login,
  register,
  logout,
  renderHomePage
}