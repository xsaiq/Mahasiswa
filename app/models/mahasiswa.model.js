module.exports = mongoose => {

    const schema = mongoose.Schema(
        {
            nama: String,
            nrp: String,
            tanggal_lahir: Date
            
        }, {
            timestamps: true
        }
    );

    schema.method("toJSON", function() {
        const {__v, _id, ...object} = this.toObject();
        object.id = _id;

        return object;
    })

    return mongoose.model("mahasiswa", schema);

}