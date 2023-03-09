const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const db = require("./utils/database");
const initModels = require("./models/initModels");
const userRouter = require("./routes/user.routes")
const todoRoutes = require("./routes/todo.routes");


initModels();

const app = express();
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());


const PORT = 3000;


db.authenticate()
    .then(() => {
        console.log("Conexion a la basae de datos exitosa");
    })
    .catch((error) => {
        console.log(error);
    });

db.sync()
    .then(() => {
        console.log("Base de datos sincronizada");
    })
    .catch((error) => {
        console.log(error);
    });



app.get("/", (req, res) => {
    res.send("Bienvenido a mi servidor")
});


app.use(userRouter);
app.use(todoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

