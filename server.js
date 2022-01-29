'use strict'
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Component from './modules/component.js';

var app = express();

app.set('port', process.env.PORT || 4000);

app.get('/', function (req, res) {

    const app = ReactDOMServer.renderToString(<Component />);
    res.set('Access-Control-Allow-Origin', '*');
    res.send(app);
});

app.listen(app.get('port') , () => {
    console.log(app.get('port'));
});