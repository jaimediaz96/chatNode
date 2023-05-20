import mongoose from "mongoose";

const Schema = mongoose.Schema;

const mySchema = new Schema({
    name: String
});

const model = mongoose.model("user", mySchema);

export { model };