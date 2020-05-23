var mongoose = require("mongoose");

// add validations in schema
var OrderSchema = mongoose.Schema({
    item: String,
    qty: Number,
    price: Number
});

// add total method
OrderSchema.methods.total = function () {
    console.log("%s Total price: %d", this.item, this.qty * this.price);
}

// create model and assign validation
var Order = mongoose.model('Order', OrderSchema);

// create new order
var firstOrder = new Order({item: "keyboard", qty: 3, price: 150});
firstOrder.total();


