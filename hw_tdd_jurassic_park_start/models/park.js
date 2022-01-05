const Park = function(name) {
    this.name = name;
}

Park.prototype.getName = function(){
    return this.name;
}
module.exports = Park;