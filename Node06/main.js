const express = require('express');
const app = express();
const path = require('path');
require("dotenv").config()
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index', {
    title: 'Kattabozor.uz - Bosh sahifa',
    categories: ['Telefonlar', 'Maishiy texnika', 'Noutbuklar', 'Aqlli soatlar'],
    products: [
      { name: "iPhone 14 Pro", price: "15 000 000 so'm", image: "iphone.jpg" },
      { name: "Samsung TV 50", price: "7 500 000 so'm", image: "tv.jpg"},
      { name: 'HP Laptop', price: "8 000 000 so'm", image: 'laptop.jpg'}
    ]
  });
});


app.get('/category/:name', (req, res) => {
  const categoryName = req.params.name;

  const categoryData = {
    Telefonlar: [
      { name: "iPhone 13", price: "12 000 000 so'm", image: "iphone13.jpg" },
      { name: 'Samsung Galaxy S22', price: "10 000 000 so'm", image: 's22.jpg' }
    ],
    'Maishiy texnika': [
      { name: 'LG Konditsioner', price: "6 500 000 so'm", image: 'ac.jpg' },
      { name: 'Samsung Kir yuvish mashinasi', price: "5 200 000 so'm", image: 'washer.jpg' }
    ],
    Noutbuklar: [
      { name: 'Lenovo Legion 5', price: "14 000 000 so'm", image: 'legion.jpg' }
    ],
    'Aqlli soatlar': [
      { name: 'Apple Watch 8', price: "4 000 000 so'm", image: 'watch.jpg' }
    ]
  };

  const products = categoryData[categoryName] || [];

  res.render('category', {
    title: `${categoryName} - Kattabozor.uz`,
    category: categoryName,
    products
  });
});

app.listen(PORT, () => {
  console.log(`Server ishga tushdi: http://localhost:${PORT}`);
});