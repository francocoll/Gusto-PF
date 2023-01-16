const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const port = process.env.PORT || 3001;

// Syncing all the models at once.

const testConection = async () => {
  try {
    await conn.authenticate();
    console.log("Conection ok");
    conn.sync({ force: false }).then(() => {
      server.listen(port, () => {
        console.log("%s listening at 3001"); // eslint-disable-line no-console
      });
    });
  } catch (error) {
    console.log("Error en la conexion", error);
  }
};
  

testConection();