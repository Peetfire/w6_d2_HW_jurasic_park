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
Park.prototype.findTopDino = function(){
    let topDino = null;
    for(const dinosaur of this.dinosuars){
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
    for(const dinosaur of this.dinosuars){
        if(dinosaur.diet === dinoType){
            dinosOfType.push(dinosaur);
        }
    }
    return dinosOfType;
}

module.exports = Park;