const mongoose = require('mongoose'),
      Schema   = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

let ItemSchema = new Schema(
    {
        itemId : ObjectId,
        name   : String,
        data   : String
    }
);

module.exports = mongoose.model('Item', ItemSchema);
