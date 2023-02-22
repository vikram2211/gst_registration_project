const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId


const serviceSchema = new mongoose.Schema({
    GST_Return_Monthly: Number,
    GST_Return_Quarterly: Number,
    GST_Return_Half_yearly: Number,
    GST_Return_Annually: Number,
    GST_Activation: Number,
    GST_Cancellation: Number,
    GST_Modification: Number,
    Change_of_Constitution: Number,
    GST_Refund: Number,
    userId : {
        type : ObjectId,
        ref :'user',
        required : true
    }
}, { timestamps: true });

module.exports = mongoose.model('service', serviceSchema);