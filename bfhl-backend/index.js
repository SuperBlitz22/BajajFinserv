const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

app.post('/bfhl', (req, res) => {
  const { data } = req.body;
  const numbers = [];
  const alphabets = [];

  data.forEach(item => {
    if (!isNaN(parseInt(item))) {
      numbers.push(item);
    } else {
      alphabets.push(item);
    }
  });

  let highestLowercaseAlphabet = '';
  alphabets.forEach(item => {
    if (item === item.toLowerCase() && (!highestLowercaseAlphabet || item > highestLowercaseAlphabet)) {
      highestLowercaseAlphabet = item;
    }
  });

  res.json({
    is_success: true,
    user_id: "john_doe_17091999",
    email: "john@xyz.com",
    roll_number: "ABCD123",
    numbers,
    alphabets,
    highest_lowercase_alphabet: highestLowercaseAlphabet ? [highestLowercaseAlphabet] : []
  });
});

app.get('/bfhl', (req, res) => {
  res.json({
    operation_code: 1
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
