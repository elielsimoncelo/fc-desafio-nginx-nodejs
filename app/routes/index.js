#!/usr/bin/env node

const express = require('express');
const router = express.Router();
const createError = require('http-errors');
const PeopleDbConnection = require('../data/people-db-connection');

router.get('/', function(req, res, next) {
  const db = PeopleDbConnection();

  try {
    db.query('select * from people', (err, rows) => { 
      if (err) {
        throw err;
      }

      const result = JSON.parse(JSON.stringify(rows));
      
      res.render('index', { title: 'Full Cycle Rocks!', people: result });
    });
  } catch (error) {
    next(createError(500, new Error('Não foi possivel buscar as pessoas cadastradas.')));
  } finally {
    db.end();
  }
});

router.post('/', function(req, res, next) {
  const db = PeopleDbConnection();

  try {
    db.query('insert into people (name) values (?)', [req.body.name]);

    res.redirect('/');
  } catch (error) {
    next(createError(500, new Error('Não foi possivel inserir a pessoa.')));
  } finally {
    db.end();
  }
});

module.exports = router;
