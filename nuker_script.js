// Made by Lumi_f3m :) - Nuker Script Say Cmd
// Custimize if you want :)
player.onChat(".nuker", function() {
    // Carved pumpkin on head
    player.execute('/replace entity @e slot.armor.head 0 carved_pumpkin 1 0  {"item_lock":{"mode":""lock_in_slot"}}')

    // Auto Totem
    for (let index = 0; index < 99999; index++) {
    	loops.pause(0.001)

        player.execute('/replace entity @e slot.weapon.offhand 0 totem_of_undying 1 0  {"item_lock":{"mode":""lock_in_slot"}}')
        player.execute('/replace entity @e slot.weapon.mainhand 0 totem_of_undying 1 0  {"item_lock":{"mode":""lock_in_slot"}}')

        loops.pause(0.001)
    }

    // Message
    for (let index = 0; index < 99999; index++) {
    loops.pause(50)
    player.execute('/title @a §c§lNUCKED BY §6§lLumi_f3m')
    loops.pause(2000)
    player.execute('/title @a §4§lPRAISE §c§lLumi_f3m')
    loops.pause(2000)
    }

    for (let index = 0; index < 99999; index++) {
    loops.pause(0.001)
    player.say("§cRAIDED BY Lumi_f3m")
    loops.pause(0.001)
    player.say("§dPRAISE §6Lumi_f3m")
    loops.pause(0.001)
    player.say("§aGET NUKED")
    loops.pause(0.001)
    player.say("§k§lLUNUKER v1.0")
    loops.pause(0.001)
    player.say("§a§lNo ANTI-CHEAT?? BET.")
    loops.pause(0.001)
    }

    // Effects
    for (let index = 0; index < 99999; index++) {
        // holy shit 😭
        loops.pause(50)
        player.execute('/effect @e blindness 1 255') 
        loops.pause(50)
        player.execute('/effect @e slowness 1 255') 
        loops.pause(50)
        player.execute('/effect @e darkness 1 255') 
        loops.pause(50)
        player.execute('/effect @e instant_damage 1 255') 
        loops.pause(50)
        player.execute('/effect @e blindness 1 255') 
        loops.pause(50)
        player.execute('/effect @e slowness 1 255') 
        loops.pause(50)
        player.execute('/effect @e darkness 1 255') 
        loops.pause(50)
        player.execute('/effect @e instant_damage 1 255') 
        loops.pause(50)
        player.execute('/effect @e blindness 1 255') 
        loops.pause(50)
        player.execute('/effect @e slowness 1 255') 
        loops.pause(50)
        player.execute('/effect @e darkness 1 255') 
        loops.pause(50)
        player.execute('/effect @e instant_damage 1 255') 
        loops.pause(50)
        player.execute('/effect @e blindness 1 255') 
        loops.pause(50)
        player.execute('/effect @e slowness 1 255') 
        loops.pause(50)
        player.execute('/effect @e darkness 1 255') 
        loops.pause(50)
        player.execute('/effect @e instant_damage 1 255') 
        loops.pause(50)
        player.execute('/effect @e blindness 1 255') 
        loops.pause(50)
        player.execute('/effect @e slowness 1 255') 
        loops.pause(50)
        player.execute('/effect @e darkness 1 255') 
        loops.pause(50)
        player.execute('/effect @e instant_damage 1 255') 
    }


});
// nuker ? huh seems off...
