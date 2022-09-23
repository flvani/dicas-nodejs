const mongoose = require("mongoose");

//`mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursodicasnodejs.rknxrju.mongodb.net/database?retryWrites=true&w=majority`,

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb://localhost:27017/DicasNodeJS-DB?retryWrites=true&w=majority`,
    (error) => {
      if (error) {
        return console.log(`Erro ao conectar ao banco de dados: ${error}!`);
      }
      return console.log("Conectado ao banco de dados!");
    }
  );
};

module.exports = connectToDatabase;
