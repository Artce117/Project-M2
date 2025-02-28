const app = require("./src/server");
const conDb = require("./src/config/conDb");

conDb().then((res) => {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is runing on port ${PORT}`);
  });
}).catch((error) => {
  console.log(error);
});
