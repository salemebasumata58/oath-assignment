const app = require("./index");
const connect = require("./configs/db");

app.listen(5566, async function () {
  try {
    await connect();
    console.log("listening on port 5566");
  } catch (err) {
    console.error(err.message);
  }
});