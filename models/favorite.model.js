const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    UserId: {
        type: Number,
        required: true
    },
    ProductId: {
        type: Number,
        required: true
    }
});

const Favorite = mongoose.model('Favorite', FavoriteSchema);
module.exports = Favorite;