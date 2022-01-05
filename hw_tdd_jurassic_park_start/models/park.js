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
Park.prototype.addDinosaur = function(dinosaur){
    this.dinosuars.push(dinosaur);
}
Park.prototype.removeDinosaur = function(dinosaur){
    let myIndex = this.dinosuars.indexOf(dinosaur);
    if(myIndex !== -1){
        this.dinosuars.splice(myIndex, 1);
    }
}

module.exports = Park;