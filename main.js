var spawnScript = require('Spawn.js');
var UtilityLogic = require('./Utility.js');
var BasicCreep = require("type.Basic");
var WarCreep = require("type.War");
var SpecialCreep = require("type.Special");

module.exports.loop = function () {
    
    // Utility run utility code
    for (const structure of Object.values(Game.structures)) {
        if (structure.structureType === STRUCTURE_TOWER
            || structure.structureType === STRUCTURE_LINK
            || structure.structureType === STRUCTURE_TERMINAL) {

            UtilityLogic.run(structure);
        }
    }


    // Creeps run creeps code
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.TYPE === "basic") {
            BasicCreep.run(creep);
        }
        else if (creep.memory.TYPE === "war") {
            WarCreep.run(creep);
        } 
        else if (creep.memory.TYPE === "special") {
            SpecialCreep.run(creep);
        }
    }

    // Spawns run spawn code
    for (const spawnName of Object.keys(Game.spawns)) {
        const spawn = Game.spawns[spawnName];
        if (spawn) {
            spawnScript.run(spawn);
        }
    }
    
    // Set up memory for the terminal transport system
    // tell it what to send
    if (!Memory.TerminalOrder) {
        Memory.TerminalOrder = [0 ,""];
    }

    
    // Terminal order
    Memory.TerminalOrder;

    Memory.TerminalOrder[0] = 0;
    //Memory.TerminalOrder[1] = "W12S14";
    //Memory.TerminalOrder[2] = "W13S13";
    
};
