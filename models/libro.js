const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/biblioteca", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const LibroSchema = new mongoose.Schema({
    titulo: String,
    autor: String,
}, {collection: 'libros'});

const Libro = mongoose.model("libros", LibroSchema);

module.exports = Libro;