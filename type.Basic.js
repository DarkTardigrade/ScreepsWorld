var BasicCreep = {
    run: function (creep) {
        

        // define target room 
        if (creep.memory.ROOM) {
            var ROOM = creep.memory.ROOM;
            //creep.say("MEEP");
        } else {
            var ROOM = creep.room.name;
        }
        
        // Move to the target room if not in it
        if (creep.room.name !== ROOM) {
            creep.moveTo(new RoomPosition(25, 25, ROOM)); 
            return;
        }

        const room = creep.room;
        if (room && room.controller) {
            const controllerLevel = room.controller.level;
        }
        
        // working mode on/off
        if (creep.memory.working && creep.store[RESOURCE_ENERGY] == 0) {
            creep.memory.working = false;
        }
        if (!creep.memory.working && creep.store.getFreeCapacity() == 0) {
            creep.memory.working = true;
        }
        
        
        
        // Start workers on the correct code
        var slot = 2; 
        
        if (creep.memory.role === 'harvester') {
            slot = 1;
            
        } else if (creep.memory.role === 'manager') {
            slot = 2;
            
        } else if (creep.memory.role === 'builder') {
            slot = 3;
            
        } else if (creep.memory.role === 'upgrader') {
            slot = 4;
        } 
        
        
        
        if (creep.memory.working) {
            
            // If the creep is a harvester
            if (slot == 1) {
                
                // Fill Extensions first
                const extension = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => structure.structureType === STRUCTURE_EXTENSION && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
                });
                
                if (extension) {
                    if (creep.transfer(extension, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(extension);
                    }
                }
                
                // Then fill Spawn
                else {
                    const spawn = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (structure) => structure.structureType === STRUCTURE_SPAWN && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0
                    });
                
                    if (spawn) {
                        if (creep.transfer(spawn, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                            creep.moveTo(spawn);
                        }
                    }
                    
                    // Then become a manager
                    else {
                        slot = 2;
                    }
                }
            
            } 
            
            
            // If the creep is a Manager
            if (slot == 2) {
                
                // Fill Towers until they have at least 900 energy
                const tower = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => structure.structureType === STRUCTURE_TOWER && structure.store[RESOURCE_ENERGY] < 900
                });
                
                
                // Can termial send things?
                const terminal = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) => structure.structureType === STRUCTURE_TERMINAL && structure.store[RESOURCE_ENERGY] < 2000 + Memory.TerminalOrder[0]
                });
                
                
                // fill towers
                if (tower) {
                    if (creep.transfer(tower, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(tower);
                    }
                    
                // make termianl ready for next order
                } else if (terminal && room !== Memory.TerminalOrder[1]) {
                    if (creep.transfer(terminal, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(terminal);
                    }
                    
                }
                
                // Then repair buildings in order of most damaged
                else {
                    const TowerExists = creep.pos.findClosestByRange(FIND_STRUCTURES, { filter: (structure) => structure.structureType === STRUCTURE_TOWER });
                    if (!TowerExists) {
                            const damagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                            filter: (structure) => {
                                if (structure.structureType === STRUCTURE_WALL || structure.structureType === STRUCTURE_RAMPART) {
                                    return structure.hits < (10 * 1000);
                                }
                                return structure.hits < structure.hitsMax;
                            }
                        });
                    
                        if (damagedStructure) {
                            if (creep.repair(damagedStructure) === ERR_NOT_IN_RANGE) {
                                creep.moveTo(damagedStructure);
                            }
                        }
                        
                        // then become a Builder
                        else {
                            slot = 3;
                        }
                            
                    } // then become a Builder
                    else {
                        slot = 3;
                    }

                }
            } 
            
            
            // If the creep is a Builder
            if (slot == 3) {
                
                const closestSite = creep.pos.findClosestByRange(FIND_CONSTRUCTION_SITES);
            
                if (closestSite) {
                    if (creep.build(closestSite) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(closestSite);
                    }
                }
                

                // Temp a Manager but better
                else {
                    const damagedStructure = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (structure) => {
                            if (structure.structureType === STRUCTURE_WALL || structure.structureType === STRUCTURE_RAMPART) {
                                return structure.hits < ( /* the zero turns this thing off, I don't like it right now */ 0);
                            }
                            return structure.hits < structure.hitsMax;
                        }
                    });
                
                    if (damagedStructure) {
                        if (creep.repair(damagedStructure) === ERR_NOT_IN_RANGE) {
                            creep.moveTo(damagedStructure);
                        }
                    }
                    // then become an upgrader
                    else {
                        slot = 4;
                    }
                }
                
            }
            
            
            // If the creep is an upgrader
            if (slot == 4) {
                
                // Feed the 'upgrade room console thing' energy
                if (creep.upgradeController(creep.room.controller) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
                
            }
            
            
        // Energy collection
        } else {
            
            // Define all energy sources
            const energySources = [];
            // add E-sources
            const sources = creep.room.find(FIND_SOURCES_ACTIVE);
            sources.forEach(source => {
                energySources.push({
                    structure: source,
                    type: 'source',
                    energy: source.energy
                });
            });
            // Add links
            const links = creep.room.find(FIND_MY_STRUCTURES, {
                filter: (structure) => structure.structureType === STRUCTURE_LINK && structure.store[RESOURCE_ENERGY] > 0
            });
            links.forEach(link => {
                energySources.push({
                    structure: link,
                    type: 'link',
                    energy: link.store[RESOURCE_ENERGY]
                });
            });
            // Add storage
            if (creep.room.storage && creep.room.storage.store[RESOURCE_ENERGY] > 0) {
                energySources.push({
                    structure: creep.room.storage,
                    type: 'storage',
                    energy: creep.room.storage.store[RESOURCE_ENERGY]
                });
            }
            // Add containers
            const containers = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType === STRUCTURE_CONTAINER && structure.store[RESOURCE_ENERGY] > 0
            });
            containers.forEach(container => {
                energySources.push({
                    structure: container,
                    type: 'container',
                    energy: container.store[RESOURCE_ENERGY]
                });
            });
            
            
            // Collect energy from nearest source
            let closestSource = null;
            let shortestDistance = Infinity;
            
            for (const energySource of energySources) {
                const target = energySource.structure;
                const range = 1; 
                
                const path = PathFinder.search(creep.pos, { pos: target.pos, range: range }, {
                    maxOps: 1000,
                    roomCallback: function (roomName) {
                        const room = Game.rooms[roomName];
                        if (!room) return;
                        const costs = new PathFinder.CostMatrix();
            
                        // use roads and avoid walls & creeps
                        room.find(FIND_STRUCTURES).forEach(function (struct) {
                            if (struct.structureType === STRUCTURE_ROAD) {
                                costs.set(struct.pos.x, struct.pos.y, 1);
                            } else if (struct.structureType !== STRUCTURE_CONTAINER &&
                                (struct.structureType !== STRUCTURE_RAMPART || !struct.my)) {
                                costs.set(struct.pos.x, struct.pos.y, 0xff);
                            }
                        });
            
                        room.find(FIND_MY_CREEPS).forEach(function (otherCreep) {
                            costs.set(otherCreep.pos.x, otherCreep.pos.y, 0xff);
                        });
                        return costs;
                    }
                });
                if (!path.incomplete && path.path.length < shortestDistance) {
                    closestSource = energySource;
                    shortestDistance = path.path.length;
                }
            }
            
            // get closest energy source
            if (closestSource) {
                const target = closestSource.structure;
                let result;
                
                if (closestSource.type === 'source') {
                    result = creep.harvest(target);
                } else {
                    result = creep.withdraw(target, RESOURCE_ENERGY);
                }
                
                if (result === ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            } else {
                // No energy sources available
                creep.moveTo(25, 25);
                creep.say("I'm hungry");
            }
        }

    }
};

module.exports = BasicCreep;