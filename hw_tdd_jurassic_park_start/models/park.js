const Park = function(name, price, dinosaurs) {
    this.name = name;
    this.price = price;
    this.dinosuars = dinosaurs;
}

Park.prototype.getName = function(){
    return this.name;
}
Park.prototype.getPrice = function(){
    return this.price;
}
Park.prototype.getDinosaurs = function(){
    return this.dinosuars;
}

module.exports = Park;