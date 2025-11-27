const express = require("express");
const app = express();

app.use(express.json());

// CART TOTAL Route
app.post("/cart/total", (req, res) => {
  const { items } = req.body;

  if (!items || !Array.isArray(items)) {
    return res.status(400).json({ error: "Items must be an array" });
  }

  let total = 0;

  items.forEach(item => {
    total += item.price * item.qty;
  });

  res.json({ total });
});

app.listen(4000, () => {
  console.log("Task 4 Server running on port 4000");
});
