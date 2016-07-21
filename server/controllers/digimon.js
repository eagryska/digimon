/* eslint-disable new-cap, consistent-return */

import express from 'express';
import Digimon from '../models/digimon';
import passport from 'passport';
const router = module.exports = express.Router();
const auth = passport.authenticate('jwt', { session: false })

// create
router.post('/', auth, (req, res) => {
  const digimon = new Digimon(req.body);
  digimon.save(() => {
    res.send({ digimon });
  });
});

// index
router.get('/', auth, (req, res) => {
    Digimon.find( {}, (err, digimon) => {
        res.send({ digimon });
    });
});