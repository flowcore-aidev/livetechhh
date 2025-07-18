const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
console.log(`✅ Lydell Tech + Lab is running on port ${PORT}`);
});
