const express = require("express");
const app = express();
const ApiTracker = require("../src/index.js").default;

const insights = new ApiTracker();

app.get("/test", async (req, res) => {
  await insights.insights(async () => {
    await new Promise((r) => setTimeout(r, Math.random() * 500));

    const data = {
      status: "success",
      message: "API working fine",
      responseTime: "dynamic",
      data: {
        posts: [{ id: 101, title: "First Post", views: 123 }],
      },
    };

    await insights.payLoadSize(data);

    res.json(data);
  });
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
