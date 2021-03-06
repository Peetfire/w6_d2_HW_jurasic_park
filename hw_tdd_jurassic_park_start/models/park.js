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
Park.prototype.getAverageYearlyVisitors = function(){
    const daysOpen = 365;
    const dailyVisitors = this.getAverageDailyVisitors();
    return daysOpen * dailyVisitors;
}
Park.prototype.getYearlyRevenue = function(){
    const price = this.getPrice();
    const yearlyVisitors = this.getAverageYearlyVisitors();
    return price * yearlyVisitors;
}
Park.prototype.removeSpecies = function(species){
    this.dinosaurs = this.dinosaurs.filter(dinosaur => dinosaur.species !== species);
}
Park.prototype.getTotalDinosPerDietType = function(){
    const totalDinosByDiet = {
        herbivores: this.findDinoByType("herbivore").length,
        carnivores: this.findDinoByType("carnivore").length,
        omnivores: this.findDinoByType("omnivore").length
    }
    return totalDinosByDiet;
}

module.exports = Park;