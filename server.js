const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 BetRadar App rodando com sucesso!");
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
