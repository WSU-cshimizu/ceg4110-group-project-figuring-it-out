const mongoose = require("mongoose");

async function mongooseConnect(url) {
    return mongoose
        .connect(url , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
}

module.exports = { mongooseConnect };