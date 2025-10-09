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
        player.say("§4R§cA§6I§eD§2E§aD§b B§bY§3 L§1u§9m§di§5_§4f§c3§6m")
        player.say("§l§dP§4R§cA§6I§eS§2E §3L§1u§9m§di§5_§4f§c3§6m")
        player.say("§l§cGET §4N§kU§cK§4ED")
        player.execute("/title @a title §l§4G§cE§6T §aN§bU§3K§1E§9D §dBY §5L§4U§cM§6I§e_§2F§a3§3M")
        player.execute("/title @a subtitle §l§cJ§6O§eI§aN §bE§3d§1e§9x§dU§5I")
        player.execute('/tp ~0 ~1000000 ~0')
        loops.pause(0.001)

        loops.pause(0.001)
        player.execute('/replaceitem entity @e slot.armor.head 0 carved_pumpkin 1 0')
        player.say("§4R§cA§6I§eD§2E§aD§b B§bY§3 L§1u§9m§di§5_§4f§c3§6m")
        player.say("§l§dP§4R§cA§6I§eS§2E §3L§1u§9m§di§5_§4f§c3§6m")
        player.say("§l§cGET §4N§kU§cK§4ED")
        player.execute("/title @a title §l§4G§cE§6T §aN§bU§3K§1E§9D §dBY §5L§4U§cM§6I§e_§2F§a3§3M")
        player.execute("/title @a subtitle §l§cJ§6O§eI§aN §bE§3d§1e§9x§dU§5I")
        player.execute('/tp ~0 ~1000000 ~0')
        loops.pause(0.001)

        loops.pause(0.001)
        player.execute('/replaceitem entity @e slot.weapon.mainhand 0 totem_of_undying 1 0')
        player.execute('/effect @e instant_damage 1 255')
        player.execute('/effect @e blindness 1 255')
        player.say("§4R§cA§6I§eD§2E§aD§b B§bY§3 L§1u§9m§di§5_§4f§c3§6m")
        player.say("§l§dP§4R§cA§6I§eS§2E §3L§1u§9m§di§5_§4f§c3§6m")
        player.say("§l§cGET §4N§kU§cK§4ED")
        player.execute('/tp ~0 ~1000000 ~0')
        loops.pause(0.001)

        loops.pause(0.001)
        player.execute('/replaceitem entity @e slot.weapon.mainhand 0 totem_of_undying 1 0')
        player.execute('/effect @e instant_damage 1 255')
        player.execute('/effect @e blindness 1 255')
        player.say("§4R§cA§6I§eD§2E§aD§b B§bY§3 L§1u§9m§di§5_§4f§c3§6m")
        player.say("§l§dP§4R§cA§6I§eS§2E §3L§1u§9m§di§5_§4f§c3§6m")
        player.say("§l§cGET §4N§kU§cK§4ED")
        player.execute('/tp ~0 ~1000000 ~0')
        loops.pause(0.001)
    }

});


