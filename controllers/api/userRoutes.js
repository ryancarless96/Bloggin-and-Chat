const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
    };
});

router.post('/login', async (req, res) => {
  try {
    const User = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if(!user) {
      res.status(400).json({ message: 'No account can be found here!'});
      return;
    }

    const validPassword = User.checkPassword(req.body.password);

    if(!validPassword) {
      res.status(400).json({ message: 'No account can be found here!'});
      return;
    }

    req.session.save(()=> {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json({ user, message: 'You are logged in!'});
    });

  
  } catch(err) {
    res.status(400).json({message: "No user account is found!"})
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
