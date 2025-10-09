# Made by https://github.com/Lumi-f3m - Custimize if you want :3
# How tf can you read python :sob:
# If you see this message (bellow) to works
mobs.give(mobs.target(NEAREST_PLAYER), BEEHIVE, 1)

def on_block_placed_beehive():

    player.say("NO ANTICHEAT???")
    loops.pause(1000)

    # Bye bye
    for index in range(999999):

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

blocks.on_block_placed(BEEHIVE, on_block_placed_beehive)
