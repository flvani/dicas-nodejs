const fs = require("fs");
const path = require("path");

// fs.mkdir(path.join(__dirname, "test"), (error) => {
//   if (error) {
//     return console.log("Erro:", error);
//   }
//   console.log("Pasta criada com sucesso.");
// });

fs.writeFile(path.join(__dirname, "test", "test.txt"), "hello", (erro) => {
  if (erro) {
    return console.log("Erro:", erro);
  }

  console.log("Arquivo criado com sucesso!");
});
