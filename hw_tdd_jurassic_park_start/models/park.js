const Park = function(name, price, dinosaurs) {
    this.name = name;
    this.price = price;
    this.dinosaurs = dinosaurs;
}

Park.prototype.getName = function(){
    return this.name;
}
Park.prototype.getPrice = function(){
    return this.price;
}
Park.prototype.getDinosaurs = function(){
    return this.dinosaurs;
}
Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurs.push(dinosaur);
}
Park.prototype.removeDinosaur = function(dinosaur){
    let myIndex = this.dinosaurs.indexOf(dinosaur);
    if(myIndex !== -1){
        this.dinosaurs.splice(myIndex, 1);
    }
}
Park.prototype.findTopDino = function(){
    let topDino = null;
    for(const dinosaur of this.dinosaurs){
        if(topDino === null){
            topDino = dinosaur;
        }
        else {
            if(dinosaur.guestsAttractedPerDay > topDino.guestsAttractedPerDay){
                topDino = dinosaur;
            }
        }
    }
    return topDino;
}
Park.prototype.findDinoByType = function(dinoType){
    let dinosOfType = [];
    for(const dinosaur of this.dinosaurs){
        if(dinosaur.diet === dinoType){
            dinosOfType.push(dinosaur);
        }
    }
    return dinosOfType;
}
Park.prototype.getAverageDailyVisitors = function(){
    let total = 0;
    for(const dinosaur of this.dinosaurs){
        total += dinosaur.guestsAttractedPerDay;
    }
    return total;
}

module.exports = Park;