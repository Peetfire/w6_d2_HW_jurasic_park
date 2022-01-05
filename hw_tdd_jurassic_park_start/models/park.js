const Park = function(name, price) {
    this.name = name;
    this.price = price;
}

Park.prototype.getName = function(){
    return this.name;
}
Park.prototype.getPrice = function(){
    return this.price;
}
module.exports = Park;