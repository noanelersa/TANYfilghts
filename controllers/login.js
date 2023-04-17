const loginService = require("../services/login")



function renderHomePage(req, res) {  
  res.render("homeScreen")
}



function logout(req, res) {
  req.session.destroy(() => {
    res.redirect('/login');
  });
}

async function login(req, res) {
  const { username, password } = req.body

  const result = await loginService.login(username, password)
  if (result) {
    req.session.username = username
    res.redirect('/')
  }
  else
  return res.status(404).json({errors:['Username Not Found, Sign Up']})
}

async function register(req, res) {
  const { username, password } = req.body
  console.log(username + " " + password);

  try {
    await loginService.register(username, password)    
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