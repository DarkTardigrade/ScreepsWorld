var WarCreep = {
    run: function (creep) {
        
        const targetRoom = "W4N3"; //creep.memory.ROOM;
        let HalfPoint = "";
        const LocX = 25;
        const LocY = 25;
        
        // Initialize memory if not set
        if (creep.memory.reachedHalfPoint === undefined) {
            creep.memory.reachedHalfPoint = false;
        }
        
        // PIN for warriors
        var slot = 1; 
        
        if (creep.memory.role === "Defender") {
            slot = 1;
        } else if (creep.memory.role === "Killer") {
            slot = 2;
        } else if (creep.memory.role === "Dummy") {
            slot = 3;
        }
        
        // Check if creep has reached halfpoint
        if (!creep.memory.reachedHalfPoint && creep.room.name === HalfPoint) {
            creep.memory.reachedHalfPoint = true;
        }
        
        // Navigation logic
        function NavigateToRoom(HalfPoint) {
            if (HalfPoint && !creep.memory.reachedHalfPoint && creep.room.name === HalfPoint) {
                creep.memory.reachedHalfPoint = true;
            }
            
            if (HalfPoint) {
                if (!creep.memory.reachedHalfPoint && creep.room.name !== HalfPoint) {
                    creep.moveTo(new RoomPosition(LocX, LocY, HalfPoint));
                } else {
                    creep.moveTo(new RoomPosition(LocX, LocY, targetRoom));
                    return creep.room.name === targetRoom;
                }
            } else {
                creep.moveTo(new RoomPosition(LocX, LocY, targetRoom));
                return creep.room.name === targetRoom;
            }
        }
                    
        // Defender logic
        if (slot == 1) {
            // Attack hostile creeps
            let target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (target) {
                if (creep.attack(target) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                } else if (creep.rangedAttack(target) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            } else {
                let HalfPoint = "";
                NavigateToRoom(HalfPoint);
            }
        }
 
        // Killer logic
        if (slot == 2) {
            // Priority of what is a target
            let target = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
            if (!target) {
                target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
                    filter: (structure) => structure.structureType === STRUCTURE_EXTENSION || 
                                           structure.structureType === STRUCTURE_TOWER || 
                                           structure.structureType === STRUCTURE_SPAWN
                });
            }
            if (!target) {
                target = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES);
            }
            
            // Attack the target
            if (target) {
                if (creep.attack(target) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                } else if (creep.rangedAttack(target) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(target);
                }
            } else {
                let HalfPoint = "W6N3";
                NavigateToRoom(HalfPoint);
            }
        }
        
        
        // Dummy logic
        if (slot == 3) {
            let HalfPoint = "";
            NavigateToRoom(HalfPoint);
        }
        
    }
};
module.exports = WarCreep;