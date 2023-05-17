const { Router } = require('express');
const UsersModel = require('../models/user.model');
const { hashPassword, comparePassword } = require('../utils/bcrypt');
const passport = require('passport');
const { STRATEGY_REGISTER } = require('../utils/constants');
const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email == 'adminCoder@coder.com' && password == '123456') {
    const userAdmin = {
      first_name: 'Admin',
      last_name: 'Coder',
      age: '2',
      email,
      password,
      role: 'admin',
    };
    req.session.user = userAdmin;
  }
  const user = await UsersModel.findOne({ email });
  const isValidPassword = await comparePassword(password, user.password);
  if (user && isValidPassword) {
    req.session.user = { ...user, role: 'user' };
    res.send(user);
  } else {
    res.status(401).send('Email o contraseña incorrectos');
  }
});

router.post(
  '/register',
  passport.authenticate(STRATEGY_REGISTER),
  async (req, res) => {
    res.send(req.user);
  }
);

router.post('/forgot-password', async (req, res) => {
  const { email, } = req.body;
  try {
    const user = await UsersModel.findOne({ email });

    if (user) {
      req.cokkies
      //TODO: enviar correo para actualizar contraseña
      //http://localhost:8080/forgot-password-2/

      res.cookie('token',true,{
        expires: new Date(Date.now() + 1000*60*60),
      }).send('se envio un correo a tu email');
    } else {
      res.status(404).send('Email no encontrado');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al crear usuario');
  }
});

router.get('/forgot-password-2/:token', async (req, res) => {
  const { email, } = req.body;
  try {
    const user = await UsersModel.findOne({ email });

    
    res.cookie('token', token, { httpOnly: true, secure: true }).render('reset-password')

    //TODO: validar el token

    //TODO: caso de que el token sea invalido, redirigir a la pagina de login


    //TODO: caso de que el token sea valido, redirigir a la pagina de reset-passwor
    res.cookie('token', token, { httpOnly: true, secure: true }).render('reset-password')

    if (user) {

      //TODO: enviar correo para actualizar contraseña

      res.send(user);
    } else {
      res.status(404).send('Email no encontrado');
    }
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al crear usuario');
  }
});


router.post('/reset-password', async (req, res) => {
    const { password } = req.body;
    req.cookies.token 
    //hacer el verify, obtener el payload, les dejara el email,
    //con el email buscar el usuario, y actualizar la contraseña
    //falta validar que el token sea valido y que no haya expirado, ademas que la constrasña sea distinta a la anterior
    //antes de actualizar hash contraseña
})

router.get(
  '/github',
  passport.authenticate('github', { scope: ['user:email'] })
);

router.get(
  '/callbackGithub',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
  }
);

module.exports = router;
