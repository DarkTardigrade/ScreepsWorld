var  SpecialCreep = {
    run: function (creep) {

        var slot = 0;
        const targetRoom = creep.memory.ROOM;
        const LocX = 25; 
        const LocY = 25;
        
        if (!creep.memory.HomeRoom) {
            creep.memory.HomeRoom = String(creep.room.name);
        }
        
        // Initialize memory if not set
        if (creep.memory.reachedHalfPoint === undefined) {
            creep.memory.reachedHalfPoint = false;
        }
        
        // Creeps run their code
        if (creep.memory.role === "claimer") {
            slot = 1;
        } else if (creep.memory.role === "Scientist") {
            slot = 2;
        } else if (creep.memory.role === "Linker") {
            slot = 3;
        } else if (creep.memory.role === "Hauler") {
            slot = 4;
        } else if (creep.memory.role === "Reserver") {
            slot = 4;
        }
        
        // get to the correct room
        function NavigateToRoom(HalfPoint) {
            if (HalfPoint && !creep.memory.reachedHalfPoint && creep.room.name === HalfPoint) {
                creep.memory.reachedHalfPoint = true;
            }
            
            // lower the odds of a creep getting lost
            if (HalfPoint) {
                if (!creep.memory.reachedHalfPoint && creep.room.name !== HalfPoint) {
                    creep.moveTo(new RoomPosition(LocX, LocY, HalfPoint));
                } else {
                    creep.moveTo(new RoomPosition(LocX, LocY, targetRoom));
                    return creep.room.name === targetRoom;
                }
            } else {
                return creep.room.name === targetRoom;
            }
        }
        
        // if Claimer
        if (slot == 1) {
            let HalfPoint = "W6N3";
            const inTargetRoom = NavigateToRoom(HalfPoint);
            
            // Only attempt to claim if we're actually in the target room
            if (inTargetRoom && creep.room.controller && !creep.room.controller.my) {
                if (creep.claimController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(creep.room.controller);
                }
            }
        }
                
            
        // If Scientist
        if (slot === 2) {
            // first go to correct room
            if (creep.room.name !== targetRoom) {
                let HalfPoint = "";
                NavigateToRoom(HalfPoint);
            }
            
            // Locate the mineral in the room
            const mineral = creep.room.find(FIND_MINERALS)[0];
            const container = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: { structureType: STRUCTURE_CONTAINER }
            });
            const terminal = creep.room.find(FIND_STRUCTURES, {
                    filter: { structureType: STRUCTURE_TERMINAL },
            })[0];
            
                    
            if (mineral && (mineral.mineralAmount > 0)) {
                // If working mode, start harvesting mineral
                if (!creep.memory.working && creep.store.getUsedCapacity(mineral.mineralType) === 0) {
                    creep.memory.working = true;
                } else if (creep.memory.working && creep.store.getFreeCapacity() === 0) {
                    creep.memory.working = false;
                }
        
                if (creep.memory.working) {
                    // Move to mineral and harvest
                    if (creep.harvest(mineral) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(mineral);
                    }
                } else {
                    // Find closest storage or container with capacity
                    const storageToFill = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                        filter: (structure) =>
                            (structure.structureType === STRUCTURE_CONTAINER || structure.structureType === STRUCTURE_STORAGE) &&
                            structure.store.getFreeCapacity(mineral.mineralType) > 0,
                    });
                    if (storageToFill) {
                        if (creep.transfer(storageToFill, mineral.mineralType) === ERR_NOT_IN_RANGE) {
                            creep.moveTo(storageToFill);
                        }
                    } else {
                        if (terminal) {
                            if (creep.transfer(terminal, mineral.mineralType) === ERR_NOT_IN_RANGE) {
                                creep.moveTo(terminal);
                            }
                        } else {
                            // terminal transport system
                            TTS(creep);
                        }
                        
                    }
                }
            } else {
                // terminal transport system
                TTS(creep);
            }
        
        
            // terminal transport system
            function TTS(creep) {
                
                //creep.say("TTS");
                
                const mineral = creep.room.find(FIND_MINERALS)[0];
                const storage = creep.pos.findClosestByRange(FIND_STRUCTURES, {
                    filter: (structure) =>
                        (structure.structureType === STRUCTURE_CONTAINER || structure.structureType === STRUCTURE_STORAGE) &&
                        structure.store.getFreeCapacity() > 0, // Check for free capacity
                });
                const terminal = creep.room.find(FIND_STRUCTURES, {
                    filter: { structureType: STRUCTURE_TERMINAL },
                })[0];
                const roomLevel = creep.room.controller.level;

                if (terminal) {
                    
                    // Store it
                    if ((terminal.store[RESOURCE_ENERGY] || 0) > 2000 && creep.room.name === Memory.TerminalOrder[1]) {
                        if (creep.store.getFreeCapacity() > 0) {
                            if (creep.withdraw(terminal, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                                creep.moveTo(terminal);
                            }
                        } else {
                            if (creep.transfer(storage, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                                creep.moveTo(storage);
                            }
                        }
                        return;
                
                    // Send it
                    } else if ((roomLevel == 8 && Memory.TerminalOrder[0] > 0) && (terminal.store[RESOURCE_ENERGY] < (Memory.TerminalOrder[0] + 2000) )) {
                            let nonEnergyResource = _.findKey(creep.store, (amount, resource) => resource !== RESOURCE_ENERGY && amount > 0);
                            
                            if (nonEnergyResource) {
                                if (creep.transfer(terminal, nonEnergyResource) === ERR_NOT_IN_RANGE) {
                                    creep.moveTo(terminal);
                                }
                                return;
                            }
                            if (creep.store.getFreeCapacity() > 0) {
                                if (creep.withdraw(storage, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                                    creep.moveTo(storage);
                                }
                            } else if (creep.store[RESOURCE_ENERGY] > 0) {
                                if (creep.transfer(terminal, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                                    creep.moveTo(terminal);
                                }
                            }
                            return;
                        
                    // Sell it
                    } else {
                        if (1==2){ // storage) {        // < - - - re-activte if on public server
                            
                            let Sell_List = Object.keys(storage.store).filter(resource => resource
                                !== RESOURCE_ENERGY && !Memory.No_Sell_List.includes(resource) && 
                                /* change this to keep some stuff before selling it all */ storage.store[resource] > 0 
                            );
                            
                            let resource = Sell_List.length > 0 ? Sell_List[0] : null;
                            let totalResources = _.sum(terminal.store);
                        
                            if (resource) {
                                if (totalResources < 295000) { // Don't over fill
                                    if (creep.store.getFreeCapacity() > 0) {
                                        if (creep.withdraw(storage, resource) === ERR_NOT_IN_RANGE) {
                                            creep.moveTo(storage);
                                        }
                                    } else if (creep.store[resource] > 0) {
                                        if (creep.transfer(terminal, resource) === ERR_NOT_IN_RANGE) {
                                            creep.moveTo(terminal);
                                        }
                                    }

                                }
                            } 
                        }
                    }
                }
            }
        }

        
        // If linker
        if (slot == 3) {
            // first go to correct room
            if (creep.room.name !== targetRoom) {
                let HalfPoint = "";
                NavigateToRoom(HalfPoint);
            }
            
            // Initialize spawn coordinates in memory if not already set
            const spawn = creep.pos.findClosestByRange(FIND_STRUCTURES, { filter: (structure) => structure.structureType === STRUCTURE_SPAWN });
            if (!creep.memory.spawnCoords) {
                creep.memory.spawnCoords = { x: spawn.pos.x, y: spawn.pos.y };
            }
    
            // Find furthes energy from spawn
            const sources = creep.room.find(FIND_SOURCES);
            const furthestSource = sources.reduce((max, source) => {
                const spawnPosition = new RoomPosition(creep.memory.spawnCoords.x, creep.memory.spawnCoords.y, creep.room.name);
                return (spawnPosition.getRangeTo(source) > spawnPosition.getRangeTo(max)) ? source : max;
            });
    
            // Find the closest link to the furthest energy
            const nearestLink = furthestSource.pos.findClosestByRange(FIND_STRUCTURES, {
                filter: { structureType: STRUCTURE_LINK }
            });
    
            // Working mode on/off
            if (!creep.memory.working && creep.store.getUsedCapacity(RESOURCE_ENERGY) === 0) {
                creep.memory.working = true;
            }
            if (creep.memory.working && creep.store.getFreeCapacity() === 0) {
                creep.memory.working = false;
            }
    
            if (creep.memory.working) {
                // Harvest from the furthest source
                if (creep.harvest(furthestSource) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(furthestSource);
                }
            } else {
                // Transfer energy to the nearest link
                if (nearestLink) {
                    if (creep.transfer(nearestLink, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(nearestLink);
                    }
                } 
            }

        }
        
        
        // If hauler
        if (slot == 4) {
            
            // Set up variables
            if (creep.memory.working === undefined) {
                creep.memory.working = 1;
            }
            if (creep.memory.working === 1 && creep.store.getFreeCapacity() === 0) {
                creep.memory.working = 0;
            }
            if (creep.memory.working === 0 && creep.store[RESOURCE_ENERGY] === 0) {
                creep.memory.working = 1;
            }
            if (creep.memory.Reserve === undefined) {
                creep.memory.Reserve = 1;
            }
            
            
            // Creeps that can claim, do claim
            if (creep.room.controller) {
                if (creep.body.some(part => part.type === CLAIM) && creep.memory.Reserve === 1) {
                    creep.memory.working = -1 // this helps for some reason
                    if (creep.room.name !== targetRoom) {
                        creep.moveTo(new RoomPosition(25, 25, targetRoom));
                        return;
                    }
                    if (creep.reserveController(creep.room.controller) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(creep.room.controller);
                        return; // I know the return should stop it from trying to work but it doen't
                    }
                }
            }
            

            
            // Working mode: Collect energy
            if (creep.memory.working === 1) {
                if (creep.room.name !== targetRoom) {
                    creep.moveTo(new RoomPosition(25, 25, targetRoom));
                    return;
                }
                

                // Find & harvest nearest energy source
                const source = creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
                if (source) {
                    if (creep.harvest(source) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(source);
                    }
                }
            
            // Deposit energy when full
            } else if (creep.memory.working === 0) {
                if (creep.room.name !== creep.memory.HomeRoom) {
                    creep.moveTo(new RoomPosition(25, 25, creep.memory.HomeRoom));
                    return;
                }
            
                // Deposit energy in storage with at least 2000 free space
                const storage = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
                    filter: (s) => s.structureType === STRUCTURE_STORAGE && s.store.getFreeCapacity(RESOURCE_ENERGY) > 2000
                });
                
                if (storage) {
                    if (creep.transfer(storage, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                        creep.moveTo(storage);
                    }
                }
            }

        }


    }
};

module.exports = SpecialCreep;
