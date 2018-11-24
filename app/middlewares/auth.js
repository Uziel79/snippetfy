module.exports = (req, res, next) => {
  if (req.session && req.session.user) {
    return next();
  }

  req.flash('error', 'Usuário não autorizado');
  return res.redirect('/');
};
