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

app.use((req, res, next) => {
  res.locals.metaTitle =
    'Website Development & Digital Marketing Agency in Vadodara | Fomax Digital';

  res.locals.metaDescription =
    'Fomax Digital is a leading website development and digital marketing agency in Vadodara offering SEO, web design, Google Ads and ecommerce solutions.';

  res.locals.canonicalUrl = req.originalUrl;

  next();
});

/* =========================
   ROUTES
========================= */
app.get('/', (req, res) => {
  res.render('index', {
    metaTitle: 'Website Development & Digital Marketing Agency in Vadodara | Fomax Digital',
    metaDescription: 'Fomax Digital is a leading website development & digital marketing agency in Vadodara offering SEO, web design, Google Ads & ecommerce solutions.',
    canonicalUrl: '/'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    metaTitle: 'About Fomax Digital | Website Development Company in Vadodara',
    metaDescription:
      'Learn about Fomax Digital, a trusted website development and digital marketing company in Vadodara helping businesses grow online.',
    canonicalUrl: '/about'
  });
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
