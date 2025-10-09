// Made by Lumi_f3m :) - Nuker Script Say Cmd
// Custimize if you want :)
player.say("If you see this, it works ;)")
player.say("(Extra) Use chat to say .nuker to start ;)")

player.onChat(".nuker", function () {

    // First Kill all
    player.execute('/kill @e')
    loops.pause(3500)

    // Auto equip

    for (let index = 0; index < 99999; index++) {

        loops.pause(0.001)
        player.execute('/replaceitem entity @e slot.weapon.offhand 0 totem_of_undying 1 0')
        player.say("§cRAIDED BY Lumi_f3m")
        player.say("§dPRAISE §6Lumi_f3m")
        player.say("§aGET NUKED")
        player.execute("/title @a title §c§lGET NUKED §a§lBY §4§lLUMI_F3M")
        player.execute("/title @a subtitle §c§lJOIN §4§leDex-UI")
        player.execute('/tp ~0 ~1000000 ~0')
        loops.pause(0.001)

        loops.pause(0.001)
        player.execute('/replaceitem entity @e slot.armor.head 0 carved_pumpkin 1 0')
        player.say("§cRAIDED BY Lumi_f3m")
        player.say("§dPRAISE §6Lumi_f3m")
        player.say("§aGET NUKED")
        player.execute('/tp ~0 ~1000000 ~0')
        loops.pause(0.001)

        loops.pause(0.001)
        player.execute('/replaceitem entity @e slot.weapon.mainhand 0 totem_of_undying 1 0')
        player.execute('/effect @e instant_damage 1 255')
        player.execute('/effect @e blindness 1 255')
        player.say("§cRAIDED BY Lumi_f3m")
        player.say("§dPRAISE §6Lumi_f3m")
        player.say("§aGET NUKED")
        player.execute('/tp ~0 ~1000000 ~0')
        loops.pause(0.001)

        loops.pause(0.001)
        player.execute('/replaceitem entity @e slot.weapon.mainhand 0 totem_of_undying 1 0')
        player.execute('/effect @e instant_damage 1 255')
        player.execute('/effect @e blindness 1 255')
        player.say("§cRAIDED BY Lumi_f3m")
        player.say("§dPRAISE §6Lumi_f3m")
        player.say("§aGET NUKED")
        player.execute('/tp ~0 ~1000000 ~0')
        loops.pause(0.001)
    }

});


