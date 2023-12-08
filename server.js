const express = require("express")
const cors = require("cors")
const db = require("./app/models")
const app = express();

const corsOption = {
    origin: "*"
};

//register cors middleware
app.use(cors(corsOption));
app.use(express.json());

//konek ke database
const mongooseConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

db.mongoose.connect(db.url, mongooseConfig)
    .then(() => console.log("database connected"))
    .catch(enn => {
        console.log(`gagal konek ${enn.message}`);
        process.exit();
    });

//memanggil routes mahasiswa
require("./app/routes/mahasiswa.routes")(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));