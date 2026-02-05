var UtilityLogic = {
    run: function (structure) {

        // each structure runs its own code
        let slot = 0;
        if (structure.structureType === STRUCTURE_TOWER) {
            slot = 1;
            
        } else if (structure.structureType === STRUCTURE_LINK) {
            slot = 2;
            
        } else if (structure.structureType === STRUCTURE_TERMINAL) {
            slot = 3;
            
        }
        
        // TowerLogic
        if (slot == 1) {
            var tower = structure;
            if (tower) {
                
                // Attack hostile creeps first
                var closestHostile = tower.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
                if (closestHostile) {
                    tower.attack(closestHostile);
                    
                } else {
                    
                    // Heal friendly creeps if no enemies
                    var closestInjuredCreep = tower.pos.findClosestByRange(FIND_MY_CREEPS, {
                        filter: (creep) => creep.hits < creep.hitsMax
                    });
                    if (closestInjuredCreep) {
                        tower.heal(closestInjuredCreep);
                        
                    } else {
                        
                        // Repair structures if above 50% energy
                        var energyCapacity = tower.store.getCapacity(RESOURCE_ENERGY);
                        var energyStored = tower.store.getUsedCapacity(RESOURCE_ENERGY);
            
                        if (energyStored / energyCapacity > 0.50) {
                            var structuresToRepair = tower.room.find(FIND_STRUCTURES, {
                                filter: (structure) => {
                                    return (
                                        structure.hits < structure.hitsMax &&
                                        !(structure.structureType === STRUCTURE_WALL && structure.hits > 8000) &&
                                        !(structure.structureType === STRUCTURE_RAMPART && structure.hits > 8000)
                                    );
                                }
                            });
            
                            // Repair the structure with the lowest hits
                            if (structuresToRepair.length > 0) {
                                var weakestStructure = _.min(structuresToRepair, 'hits');
                                tower.repair(weakestStructure);
                            }
                        }
                    }
                }
            }
        }
        
        
        // LinkLogic
        else if (slot == 2) {
            
            // run once every 15 ticks
            if (Game.time % 15 === 0) { 
                
                // Sort links by distance to the closest energy source
                for (const roomName in Game.rooms) {
                    const room = Game.rooms[roomName];
                    const sources = room.find(FIND_SOURCES);
                    const links = room.find(FIND_STRUCTURES, {
                        filter: { structureType: STRUCTURE_LINK }
                    });
        
                    const linkDistances = links.map(linkObj => {
                        const closestSource = linkObj.pos.findClosestByRange(sources);
                        return { link: linkObj, distance: linkObj.pos.getRangeTo(closestSource) };
                    });
        
                    linkDistances.sort((a, b) => a.distance - b.distance);
                    linkDistances.forEach((entry, index) => {
                        const label = `link${index + 1}`;
                        Memory.links = Memory.links || {};
                        Memory.links[entry.link.id] = label;
                    });
    
                    // If > 500 energy, send it to the next link in order
                    for (let i = 0; i < linkDistances.length - 1; i++) {
                        const sender = linkDistances[i].link;
                        const receiver = linkDistances[i + 1].link;
            
                        if (sender.store[RESOURCE_ENERGY] > 500 && receiver.store.getFreeCapacity(RESOURCE_ENERGY) > 0) {
                            sender.transferEnergy(receiver);
                        }
                    }
                }
            }
        }
        
        
        // Terminal Code
        else if (slot === 3) {
            
            // run once every 100 ticks
            if (Game.time % 100 === 0) {
                
                // - - send energy if it's in the terminal - - 
                const room = Game.rooms[structure.pos.roomName];
                const terminal = room.find(FIND_STRUCTURES, { filter: { structureType: STRUCTURE_TERMINAL } })[0];
                if ((Memory.TerminalOrder[0] || 0) > 0 && !(room == Memory.TerminalOrder[1]) && !(room == Memory.TerminalOrder[2])) {
                    if ((terminal.store[RESOURCE_ENERGY] || 0) >= 2000 + Memory.TerminalOrder[0]) {
                
                        const room1 = Game.rooms[Memory.TerminalOrder[1]];
                        const room2 = Game.rooms[Memory.TerminalOrder[2]];
                        if (room1 && room2) {
                            const terminal1 = room1.terminal;
                            const terminal2 = room2.terminal;
                            
                            if (terminal1 && terminal2) {
                                const terminalEnergy1 = terminal1.store[RESOURCE_ENERGY] || 0;
                                const terminalEnergy2 = terminal2.store[RESOURCE_ENERGY] || 0;
                        
                                let targetRoom = Memory.TerminalOrder[1];
                                
                                if (terminalEnergy1 >= 2000) {
                                    targetRoom = Memory.TerminalOrder[2];
                                    
                                }
                                
                                if (terminal.cooldown === 0) { 
                                    let result = terminal.send(RESOURCE_ENERGY, Memory.TerminalOrder[0], targetRoom);
                                    if (result == 0) {
                                        console.log(`-Order Sent- [ ${Memory.TerminalOrder[0]} Energy sent to ${targetRoom} from ${room} ]`);
                                    }
                                    
                                } else {
                                    console.log(`Terminal on cooldown: ${terminal.cooldown} ticks remaining.`);
                                }

                                
                            } 
                        } 
                    }
                }
                
                // sell everything else
                let Sell_List = Object.keys(terminal.store).filter(resource => 
                    resource !== RESOURCE_ENERGY && !Memory.No_Sell_List.includes(resource))
        
                for (const resource of Sell_List) {
                    const orders = Game.market.getAllOrders({ type: ORDER_BUY, resourceType: resource });
                    
                    if (orders.length > 0) {
                        const bestOrder = _.max(orders, 'price');
                        
                        if (bestOrder && bestOrder.price > 0) {
                            const availableAmount = terminal.store[resource] || 0;
                            const sellAmount = Math.min(bestOrder.amount, availableAmount);
            
                            // Check if the terminal has enough energy to sell
                            const energyCost = Game.market.calcTransactionCost(sellAmount, terminal.room.name, bestOrder.roomName);
                            if (sellAmount > 0 && terminal.store[RESOURCE_ENERGY] >= energyCost) {
                                Game.market.deal(bestOrder.id, sellAmount, terminal.room.name);
                                console.log(`-Order Sent- [ Used ${energyCost} energy ] [ ${sellAmount} ${resource} at ${bestOrder.price} credits/unit ] [ Total ${sellAmount * bestOrder.price} credits ]`);
                                
                            } else {
                                if (energyCost > 0) {
                                    //console.log(`-Order Not Sent- [ Needed ${energyCost} energy ] `);
                                }
                            }
                        }
                    } else {
                        console.log(`No orders found for ${resource}.`);
                    }
                }
                
                
            }
        }
    }
};

module.exports = UtilityLogic;