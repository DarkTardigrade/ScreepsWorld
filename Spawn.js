module.exports.run = function () {
    
    // for every spawn
    for (const spawnName in Game.spawns) {
        const spawn = Game.spawns[spawnName];
        const SpawnsName = spawn.name; 
        

        // Check the name of the spawn and execute specific code
        
        // - - - - > 1 < - - - - 
        if (spawn.name === "Spawn1") {
            
            const spawnNumber = 1;
            
            var WAR = false;
            var WarRoom = "E8N7";
            
            var NewWorld = false;
            var NewRoomName = "W8N3";
            
            var Hauler = false;
            var HaulerRoomName = "W7N1";
            var HaulerRoomName2 = "W6N2";
            var HaulerRoomName3 = "W7N2";
            
            var LAB = false;
            var LINK = false;
            var BASIC = true;
            var DoubleTime = false;
            
            SpawnCode(SpawnsName,spawnNumber, WAR,WarRoom, NewWorld,NewRoomName, Hauler,HaulerRoomName,HaulerRoomName2,HaulerRoomName3, LAB,LINK,BASIC,DoubleTime);
        } else if (spawn.name === "Spawn1.5") {
            
            const spawnNumber = 1;
            
            var WAR = false;
            var WarRoom = "W4N3";
            
            var NewWorld = false;
            var NewRoomName = "W7N3";
            
            var Hauler = true;
            var HaulerRoomName = "W7N1";
            var HaulerRoomName2 = "W6N2";
            var HaulerRoomName3 = "W7N2";
            
            var LAB = false;
            var LINK = false;
            var BASIC = true;
            var DoubleTime = true;

            
            SpawnCode(SpawnsName,spawnNumber, WAR,WarRoom, NewWorld,NewRoomName, Hauler,HaulerRoomName,HaulerRoomName2,HaulerRoomName3, LAB,LINK,BASIC,DoubleTime);


        // - - - - > 2 < - - - - 
        } else if (spawn.name === "Spawn2") {
            
            const spawnNumber = 2;
            
            var WAR = false;
            var WarRoom = "E8N7";
            
            var NewWorld = false;
            var NewRoomName = "W9N6";
            
            var Hauler = false; 
            var HaulerRoomName = "W8N2";
            var HaulerRoomName2 = "W7N3";
            var HaulerRoomName3 = " ";
            
            var LAB = false;
            var LINK = false;
            var BASIC = true;
            var DoubleTime = false;
            
            SpawnCode(SpawnsName,spawnNumber, WAR,WarRoom, NewWorld,NewRoomName, Hauler,HaulerRoomName,HaulerRoomName2,HaulerRoomName3, LAB,LINK,BASIC,DoubleTime);
        } else if (spawn.name === "Spawn2.5") {
            
            const spawnNumber = 2;
            
            var WAR = false;
            var WarRoom = "E8N7";
            
            var NewWorld = false;
            var NewRoomName = "W9N6";
            
            var Hauler = true; 
            var HaulerRoomName = "W8N2";
            var HaulerRoomName2 = "W7N3";
            var HaulerRoomName3 = " ";
            
            var LAB = false;
            var LINK = false;
            var BASIC = true;
            var DoubleTime = true;
            
            SpawnCode(SpawnsName,spawnNumber, WAR,WarRoom, NewWorld,NewRoomName, Hauler,HaulerRoomName,HaulerRoomName2,HaulerRoomName3, LAB,LINK,BASIC,DoubleTime);

        
        // - - - - > 3 < - - - - 
        } else if (spawn.name === "Spawn3") {
            
            const spawnNumber = 3;
            
            var WAR = false;
            var WarRoom = "E8N7";
            
            var NewWorld = false;
            var NewRoomName = "W8N3";
            
            var Hauler = false;
            var HaulerRoomName = "W8N4";
            var HaulerRoomName2 = " ";
            var HaulerRoomName3 = " ";
            
            var LAB = false;
            var LINK = true;
            var BASIC = true;
            var DoubleTime = false;
            
            SpawnCode(SpawnsName,spawnNumber, WAR,WarRoom, NewWorld,NewRoomName, Hauler,HaulerRoomName,HaulerRoomName2,HaulerRoomName3, LAB,LINK,BASIC,DoubleTime);
        } else if (spawn.name === "Spawn3.5") {
            
            const spawnNumber = 3;
            
            var WAR = false;
            var WarRoom = "W9N5";
            
            var NewWorld = false;
            var NewRoomName = "W4N3";
            
            var Hauler = true; 
            var HaulerRoomName = "W8N4";
            var HaulerRoomName2 = " ";
            var HaulerRoomName3 = " ";
            
            var LAB = false;
            var LINK = false;
            var BASIC = true;
            var DoubleTime = true;
            
            SpawnCode(SpawnsName,spawnNumber, WAR,WarRoom, NewWorld,NewRoomName, Hauler,HaulerRoomName,HaulerRoomName2,HaulerRoomName3, LAB,LINK,BASIC,DoubleTime);


        // - - - - > 4 < - - - - 
        }  else if (spawn.name === "Spawn4") {
            
            const spawnNumber = 4;
            
            var WAR = false;
            var WarRoom = "E8N7";
            
            var NewWorld = false;
            var NewRoomName = "W8N3";
            
            var Hauler = false;
            var HaulerRoomName = "W4N2";
            var HaulerRoomName2 = " ";
            var HaulerRoomName3 = " ";
            
            var LAB = false;
            var LINK = false;
            var BASIC = true;
            var DoubleTime = false;
            
            SpawnCode(SpawnsName,spawnNumber, WAR,WarRoom, NewWorld,NewRoomName, Hauler,HaulerRoomName,HaulerRoomName2,HaulerRoomName3, LAB,LINK,BASIC,DoubleTime);
        
        
        // - - - - > 5 < - - - - 
        }  else if (spawn.name === "Spawn5") {
            
            const spawnNumber = 5;
            
            var WAR = false;
            var WarRoom = "E8N7";
            
            var NewWorld = false;
            var NewRoomName = "W8N3";
            
            var Hauler = false;
            var HaulerRoomName = "W4N2";
            var HaulerRoomName2 = " ";
            var HaulerRoomName3 = " ";
            
            var LAB = false;
            var LINK = false;
            var BASIC = true;
            var DoubleTime = false;
            
            SpawnCode(SpawnsName,spawnNumber, WAR,WarRoom, NewWorld,NewRoomName, Hauler,HaulerRoomName,HaulerRoomName2,HaulerRoomName3, LAB,LINK,BASIC,DoubleTime);


        }
    }
    
    // Code that every spawn will run
    function SpawnCode(SpawnsName,spawnNumber, WAR,WarRoom, NewWorld,NewRoomName, Hauler,HaulerRoomName,HaulerRoomName2,HaulerRoomName3, LAB,LINK,BASIC,DoubleTime) {
        
        
        //  -- Common Variables --
        const spawn = Game.spawns[SpawnsName];
        var SpawnRoom = spawn.room;
        var SpawnRoomName = String(spawn.room.name);
        var SpawnRoomName = spawn.room.name;
        var Name = "BLANK";
        var Body = [];
        const storageNeedsEnergy = Game.rooms[SpawnRoomName].storage && 
                                Game.rooms[SpawnRoomName].storage.store[RESOURCE_ENERGY] < 
                                Game.rooms[SpawnRoomName].storage.store.getCapacity(RESOURCE_ENERGY) / 3;
        
        // run once ever 5 ticks (saves on in-game CPU)
        if (Game.time % 5 === 0) {
            
            //  -- More Common Variables --
            const controller = SpawnRoom.controller;
            const RoomLevel = controller.level;
            
        
            // Find all the energy stored in extensions and the spawn
            let totalEnergy = 0;
            const extensions = SpawnRoom.find(FIND_STRUCTURES, {
                filter: (structure) => structure.structureType === STRUCTURE_EXTENSION
            });
            const spawns = SpawnRoom.find(FIND_MY_SPAWNS);
            for (let extension of extensions) {
                totalEnergy += extension.store[RESOURCE_ENERGY];
            }
            for (let spawn of spawns) {
                totalEnergy += spawn.store[RESOURCE_ENERGY];
            }
            
    
            // Find out how much enery we could have if we wait
            const Extensions = SpawnRoom.find(FIND_STRUCTURES, {filter: { structureType: STRUCTURE_EXTENSION }}).length;
            var ExtraEnergy = 100 + Extensions * 50;

            
            // -- Creep Sawn Order --
            
            let Check = [false, false, false, false, false, false];
            let basicBody = Build_Basic_Creep(ExtraEnergy);

            // Basic spawn
            if (BASIC) {
                // Spawn Harvistor0 if all other Harvesters are dead
                if (SpawnRoom && _.filter(SpawnRoom.find(FIND_MY_CREEPS), (creep) => creep.memory.role === 'harvester').length === 0) {
                    Game.spawns[SpawnsName].spawnCreep([WORK, CARRY, MOVE], `harvester_${spawnNumber},0`, { memory:{ role: 'harvester', TYPE: 'basic', ROOM: SpawnRoomName} });
                } 
                else if (!MakeCreep('harvester', 1, 'basic', basicBody, spawnNumber, SpawnsName, SpawnRoomName)) return;
                else if (!MakeCreep('upgrader', 1, 'basic', basicBody, spawnNumber, SpawnsName, SpawnRoomName)) return;
                else if (!MakeCreep('harvester', 2, 'basic', basicBody, spawnNumber, SpawnsName, SpawnRoomName)) return;
                else if (!MakeCreep('manager', 1, 'basic', basicBody, spawnNumber, SpawnsName, SpawnRoomName)) return;
                else if (DoubleTime && !MakeCreep('harvester', 3, 'basic', basicBody, spawnNumber, SpawnsName, SpawnRoomName)) return;
                else if ((RoomLevel <= 4 || DoubleTime) && !MakeCreep('upgrader', 2, 'basic', basicBody, spawnNumber, SpawnsName, SpawnRoomName)) return;
                else if (RoomLevel <= 2 && !MakeCreep('Builder', 1, 'basic', basicBody, spawnNumber, SpawnsName, SpawnRoomName)) return;
                else Check[0] = true;
            } else Check[0] = true;
            
            // Link spawn
            if (Check[0] == true) {
                if (LINK) {
                    if (!MakeCreep('Linker', 1, 'special', basicBody, spawnNumber, SpawnsName, SpawnRoomName)) return;
                    else Check[1] = true;
                } else {
                    Check[1] = true;
                }
            }
            
            // Lab spawn
            if (Check[1] == true) {
                if (LAB) {
                    Body = [WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK,WORK, CARRY,CARRY, MOVE,MOVE,MOVE,MOVE];
                    if (!MakeCreep('Scientist', 1, 'special', Body, spawnNumber, SpawnsName, SpawnRoomName)) return;
                    else Check[2] = true;
                } else Check[2] = true;
            }
                
            // War spawn
            if (Check[2] == true) {
                if (WAR) {
                    // Parts
                    var EXOSUIT = [TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE, TOUGH, MOVE]; // 300 energy
                    var SANDBAG = [TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,TOUGH,MOVE] // 140 energy
                    
                    var KNIFE = [MOVE, ATTACK]; // 130 energy
                    //var GUN = [MOVE, RANGED_ATTACK] // 200 energy
                    
                    //var MEDKIT = [MOVE, HEAL]; // 300 energy
                    //var HEALTHBAG = [MOVE, HEAL, HEAL, HEAL, HEAL, HEAL, HEAL] // 1,550 energy
                    //var REGEN = [].concat(MEDKIT).concat(MEDKIT).concat(MEDKIT).concat(MEDKIT).concat(MEDKIT).concat(MEDKIT) // 1,800 energy


                    // Body Types
                    let Dummy = [].concat(SANDBAG).concat(SANDBAG).concat(SANDBAG).concat(SANDBAG).concat(SANDBAG) // 700 energy
                    //let FastDummy = [].concat(EXOSUIT).concat(EXOSUIT).concat(EXOSUIT) // 900 energy
                    
                    //let TakeIt = [].concat(EXOSUIT).concat(EXOSUIT).concat(EXOSUIT).concat(EXOSUIT).concat(KNIFE).concat(KNIFE).concat(KNIFE).concat(KNIFE).concat(KNIFE);  // 1,850 energy
                    let TakeIt_Mid = [].concat(EXOSUIT).concat(EXOSUIT).concat(KNIFE).concat(KNIFE).concat(KNIFE); // 990 energy
                    let TakeIt_Mini = [].concat(EXOSUIT).concat(KNIFE); // 430 energy
                    
                    //let Invaider_Mid = [].concat(KNIFE).concat(KNIFE).concat(KNIFE).concat(KNIFE).concat(KNIFE).concat(KNIFE).concat(KNIFE).concat(KNIFE).concat(KNIFE).concat(KNIFE).concat(KNIFE).concat(KNIFE) // 1,560 energy
                    //let Invaieder = [].concat(Invaider_Mid).concat(Invaider_Mid).concat(KNIFE) //3,250 energy
                    
                    
                    if (!MakeCreep('Killer', 1, 'war', TakeIt_Mini, spawnNumber, SpawnsName, WarRoom)) return;
                    else if (!MakeCreep('Killer', 2, 'war', TakeIt_Mini, spawnNumber, SpawnsName, WarRoom)) return;
                    //else if (!MakeCreep('Killer', 3, 'war', TakeIt_Mini, spawnNumber, SpawnsName, WarRoom)) return;
                    else Check[3] = true;
                } else Check[3] = true;
            }
            
            
            // NewWorld Spawn
            if (Check[3] == true) {
                if (NewWorld) {
                    let Body = [MOVE,MOVE,MOVE,MOVE,MOVE,CARRY,WORK,WORK];
                    
                    if (!MakeCreep('harvester', -1, 'basic', Body, spawnNumber, SpawnsName, NewRoomName)) return;
                    else if (!MakeCreep('upgrader', -1, 'basic', Body, spawnNumber, SpawnsName, NewRoomName)) return;
                    else if (!MakeCreep('harvester', -2, 'basic', Body, spawnNumber, SpawnsName, NewRoomName)) return;
                    else Check[4] = true;
                    
                } else Check[4] = true;
            }
            
            
            // Hauler Spawn
            if (Check[4] == true) {
                if (Hauler) {
                    let ResBody = [MOVE,MOVE,CLAIM,CLAIM];
                    let HallBody = [WORK,WORK,WORK, CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY,CARRY, MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE,MOVE];
                    
                    // site 1
                    if (RoomLevel < 4 || !MakeCreep('Reserver', 1, 'special', ResBody, spawnNumber, SpawnsName, HaulerRoomName)) return;
                    else if (!storageNeedsEnergy || !MakeCreep('Hauler', 1, 'special', HallBody, spawnNumber, SpawnsName, HaulerRoomName)) return;
                    else if (!storageNeedsEnergy || !MakeCreep('Hauler', 2, 'special', HallBody, spawnNumber, SpawnsName, HaulerRoomName)) return;
                    else if (DoubleTime && storageNeedsEnergy && !MakeCreep('Hauler', 3, 'special', HallBody, spawnNumber, SpawnsName, HaulerRoomName)) return;
                    
                    // site 2
                    else if (HaulerRoomName2 != " ") {
                        if (RoomLevel < 4 || !MakeCreep('Reserver', 2, 'special', ResBody, spawnNumber, SpawnsName, HaulerRoomName2)) return;
                        else if (!storageNeedsEnergy || !MakeCreep('Hauler', 4, 'special', HallBody, spawnNumber, SpawnsName, HaulerRoomName2)) return;
                        else if (!storageNeedsEnergy || !MakeCreep('Hauler', 5, 'special', HallBody, spawnNumber, SpawnsName, HaulerRoomName2)) return;
                        
                        // site 3
                        else if (HaulerRoomName3 != " ") {
                            if (RoomLevel < 4 || !MakeCreep('Reserver', 3, 'special', ResBody, spawnNumber, SpawnsName, HaulerRoomName3)) return;
                            else if (!storageNeedsEnergy || !MakeCreep('Hauler', 6, 'special', HallBody, spawnNumber, SpawnsName, HaulerRoomName3)) return;
                            else if (!storageNeedsEnergy || !MakeCreep('Hauler', 7, 'special', HallBody, spawnNumber, SpawnsName, HaulerRoomName3)) return;
                            else Check[5] = true;
                            
                        } else Check[5] = true;
                    } else Check[5] = true;
                } else Check[5] = true;
                
            }
            
            
            
            
            // - - - - - > Make Creep Functions < - - - - - \\
            function MakeCreep(Name, Num, Type, Body, spawnNumber, SpawnsName, SpawnRoomName) {
                
                // Don't spawn if spawn is busy
                if (Game.spawns[SpawnsName].spawning) {
                    return false;
                }
                
                // Don't spawn if creep already exists
                let creepName = `${Name}_${spawnNumber},${Num}`;
                if (Game.creeps[creepName]) {
                    return true;
                }
                
                // Attempt to spawn the creep
                let result = Game.spawns[SpawnsName].spawnCreep(Body, creepName, { 
                    memory: { role: Name, TYPE: Type, ROOM: SpawnRoomName } 
                });
                
                return result === OK;
            }
            
        
            // Function to build a basic creep
            function Build_Basic_Creep(ExtraEnergy) {
                if (ExtraEnergy > 1100) {
                    ExtraEnergy = 1100;
                }
                var Body = [WORK, CARRY, MOVE];
                var Moves = 1;
                var Works = 1;
                var Carrys = 1;
        
                while (ExtraEnergy >= 50) {
                    if (ExtraEnergy >= 100) {
                        if (Works + Carrys >= Moves * 2) {
                            Body.push(MOVE);
                            ExtraEnergy -= 50;
                            Moves += 1;
                        } else {
                            if (Carrys * 3 >= Works) {
                                Body.push(WORK);
                                ExtraEnergy -= 100;
                                Works += 1;
                            } else {
                                Body.push(CARRY);
                                ExtraEnergy -= 50;
                                Carrys += 1;
                            }
                        }
                    } else {
                        if (Works + Carrys >= Moves * 2) {
                           Body.push(MOVE);
                            ExtraEnergy -= 50;
                            Moves += 1;
                        } else {
                            Body.push(CARRY);
                            ExtraEnergy -= 50;
                            Carrys += 1;
                        }
                    }
                }
                return Body;
            }
            
        }
        
        

        
        
        
        
//      - - - - - > Auto Buildin < - - - - - 

        // run once every 100 ticks (saves A LOT on in-game CPU)
        if (Game.time % 100 === 0 ) {
                
        // - - Place extensions - -
            const maxRing = 20; // Maximum number of rings to check
            const center = spawn.pos;
            
            // Function to get the positions in a checkerboard pattern
            function getCheckerboardPositions(center, radius) {
                let positions = [];
                for (let dx = -radius; dx <= radius; dx++) {
                    for (let dy = -radius; dy <= radius; dy++) {
                        
                        if (Math.abs(dx) + Math.abs(dy) === radius) {
                            if ((dx + dy) % 2 === 0) {
                                let x = center.x + dx;
                                let y = center.y + dy;
                                
                                if (x >= 0 && x < 50 && y >= 0 && y < 50) {
                                    positions.push(new RoomPosition(x, y, center.roomName));
                                }
                                
                            }
                        }
                    }
                }
                return positions;
            }
            
            // start making the extensions
            let ringCount = 0;
            for (let ring = 1; ring <= maxRing; ring++) {
                let positions = getCheckerboardPositions(center, ring);
                
                for (let pos of positions) {
                    const structures = pos.lookFor(LOOK_STRUCTURES);
                    const constructionSites = pos.lookFor(LOOK_CONSTRUCTION_SITES);
                    const hasNonRampartStructure = structures.some(structure => structure.structureType !== STRUCTURE_RAMPART);
            
                    if (!hasNonRampartStructure && constructionSites.length === 0) {
                        if (spawn.room.createConstructionSite(pos, STRUCTURE_EXTENSION) === OK) {
                            return;
                        }
                    }
                }
                ringCount++;
            }
    
            
            // Place Towers
            RoomLevel = spawn.room.controller.level;
            
            let Pos1 = new RoomPosition(spawn.pos.x - 3, spawn.pos.y, spawn.room.name);
            let Pos2 = new RoomPosition(spawn.pos.x, spawn.pos.y - 3, spawn.room.name);
            let Pos3 = new RoomPosition(spawn.pos.x + 3, spawn.pos.y, spawn.room.name);
            let Pos4 = new RoomPosition(spawn.pos.x, spawn.pos.y + 3, spawn.room.name);
            
            let towerCount = 0;
            const structures = spawn.room.find(FIND_STRUCTURES);
            for (const structure of structures) {
                if (structure.structureType === STRUCTURE_TOWER) {
                    towerCount++;
                }
            }

            if (RoomLevel >= 3 && towerCount < 1) {
                spawn.room.createConstructionSite(Pos1, STRUCTURE_TOWER);
            } else if (RoomLevel >= 5 && towerCount < 2) {
                spawn.room.createConstructionSite(Pos2, STRUCTURE_TOWER);
            } else if (RoomLevel >= 7 && towerCount < 3) {
                spawn.room.createConstructionSite(Pos3, STRUCTURE_TOWER);
            } else if (RoomLevel >= 8 && towerCount < 4) {
                spawn.room.createConstructionSite(Pos4, STRUCTURE_TOWER);
            }
            
            
            // Place ramparts
            const spawnPos = spawn.pos;
            const range = 4;
        
            // List of places to check for rampart placement
            const positions = [];
        
            // Make a "circle" shape with ramparts
            for (let dx = -range; dx <= range; dx++) {
                for (let dy = -range; dy <= range; dy++) {
                    
                    if (Math.abs(dx) + Math.abs(dy) !== range) continue;
                    const x = spawnPos.x + dx;
                    const y = spawnPos.y + dy;
        
                    if (x < 0 || x >= 50 || y < 0 || y >= 50) continue;
                    positions.push(new RoomPosition(x, y, spawnPos.roomName));
                }
            }
        
            // Place one on the spawn too
            positions.push(spawnPos);
        
            // Try to place a rampart on every position
            for (const pos of positions) {
                const result = pos.createConstructionSite(STRUCTURE_RAMPART);
                if (result !== OK) {
                   
                }
            }
            
            
            
        }
    }   
    
    
    
};