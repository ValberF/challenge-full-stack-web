const app = require("express")();
const consign = require("consign");
const PORT = process.env.PORT || 8000;

consign()
  .include("/config/middleware.js")
  .then("/api")
  .then("/config/")
  .into(app);

app.listen(PORT, () => {
    console.log("Backend executando na porta: " + PORT)
})
