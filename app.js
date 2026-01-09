const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

app.use(compression());
/* =========================
   VIEW ENGINE SETUP
========================= */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* =========================
   MIDDLEWARE
========================= */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('public', {
  maxAge: '30d',
  immutable: true
}));

/* =========================
   ROUTES
========================= */
app.get('/', (req, res) => {
    res.render('index');
});

app.get('/about', (req, res) => {
    res.render('about');
});

app.get('/contact', (req, res) => {
    res.render('contact');
});

app.get('/portfolio', (req, res) => {
    res.render('portfolio');
});

app.get('/services', (req, res) => {
    res.render('services');
});


/* =========================
   SERVER
========================= */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
