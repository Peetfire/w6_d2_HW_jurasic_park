const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  
  let myPark, dinoArray, dino1, dino2, dino3, dino4, dino5, dino6, dino7;

  beforeEach(function () {
    dino1 = new Dinosaur("Anklosaurus", "herbivore", 28);
    dino2 = new Dinosaur("Paralofosaurus", "herbivore", 19);
    dino3 = new Dinosaur("Velocoraptor", "carnivore", 35);
    dino4 = new Dinosaur("Sarcosucus", "carnivore", 23);
    dino5 = new Dinosaur("Gallimimus", "omnivore", 30);
    dino6 = new Dinosaur("Shuvuuia", "omnivore", 13);
    dinoArray = [dino1, dino2, dino3, dino4, dino5, dino6]
    dino7 = new Dinosaur("Allosaurus", "carnivore", 30);
    myPark = new Park("Isla Nublar", 50, dinoArray)
  })

  it('should have a name', function() {
    const actual = myPark.getName();
    assert.strictEqual(actual, "Isla Nublar");
  });

  it('should have a ticket price', function(){
    const actual = myPark.getPrice();
    assert.strictEqual(actual, 50);
  });

  it('should have a collection of dinosaurs', function(){
    const actual = myPark.getDinosaurs().length;
    assert.deepStrictEqual(actual, 6);
  });

  it('should be able to add a dinosaur to its collection', function(){
    myPark.addDinosaur(dino7);
    const actual = myPark.getDinosaurs().length;
    assert.deepStrictEqual(actual, 7);
  });

  it('should be able to remove a dinosaur from its collection', function() {
    myPark.removeDinosaur(dino7);
    const actual = myPark.getDinosaurs().length;
    assert.deepStrictEqual(actual, 6);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    const actual = myPark.findTopDino();
    assert.deepStrictEqual(actual, dino3);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    const actual = myPark.findDinoByType("carnivore");
    assert.deepStrictEqual(actual, [dino3, dino4]);
  });

  it('should be able to calculate the total number of visitors per day', function(){
    const actual = myPark.getAverageDailyVisitors();
    assert.strictEqual(actual, 148);
  });

  it('should be able to calculate the total number of visitors per year', function(){
    const actual = myPark.getAverageYearlyVisitors();
    const expected = 148 * 365;
    assert.strictEqual(actual, expected);
  });

  it('should be able to calculate total revenue for one year', function(){
    const actual = myPark.getYearlyRevenue();
    const expected = 148 * 365 * myPark.getPrice();
    assert.strictEqual(actual, expected);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    myPark.addDinosaur(dino5);
    myPark.addDinosaur(dino5);
    myPark.removeSpecies("Gallimimus");
    const actual = myPark.getDinosaurs().length;
    assert.strictEqual(actual, 5);
  })

  it('should be able to provide an object of diet types and the number of dinosaurs per type', function(){
    const actual = myPark.getTotalDinosPerDietType();
    const expected = {herbivores: 2, carnivores: 2, omnivores: 2};
    assert.deepStrictEqual(actual, expected);
  })

});
