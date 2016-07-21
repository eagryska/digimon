/* eslint-disable new-cap, consistent-return */

import express from 'express';
import Digimon from '../models/digimon';
const router = module.exports = express.Router();

// create
router.post('/', (req, res) => {
    console.log('post');
    console.log(req);
  const digimon = new Digimon(req.body);
  digimon.save(() => {
    console.log('digisaved', digimon);
    res.send({ digimon });
  });
});

// index
router.get('/', (req, res) => {
    Digimon.find( {}, (err, digimon) => {
        res.send({ digimon });
    });
});