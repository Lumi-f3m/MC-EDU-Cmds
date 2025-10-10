// Made by https://github.com/Lumi-f3m - Includes custom messages

// No enchants yet :(

mobs.give(mobs.target(NEAREST_PLAYER),BEEHIVE,1)
player.say("break this beehive to start :)")

blocks.onBlockBroken(BEEHIVE, function(){
    player.execute('/give @s netherite_sword 1 0 {"item_name":"§4§lL§c§lu§6§lm§e§li§a§ls§b§l §3§lS§9§lw§1§lo§5§lr§d§ld"}')
    player.execute('/give @s netherite_axe 1 0 {"item_name":"§4§lL§c§lu§6§lm§e§li§a§ls§b§l §3§lA§9§lx§1§le"}')
    player.execute('/give @s netherite_pickaxe 1 0 {"item_name":"§4§lL§c§lu§6§lm§e§li§a§ls§b§l §3§lP§9§li§1§lc§5§lk§d§la§f§lx§d§le"}')
    player.execute('/give @s netherite_shovel 1 0 {"item_name":"§4§lL§c§lu§6§lm§e§li§a§ls§b§l §3§lS§9§lh§1§lo§5§lv§d§le§f§ll"}')
    loops.pause(1000)

    player.execute('/replaceitem entity @s slot.armor.head 0 netherite_helmet 1 0 {"item_name":"§4§lL§c§lu§6§lm§e§li§a§ls§b§l §3§lH§9§le§1§lm§5§le§d§lt"}')
    player.execute('/replaceitem entity @s slot.armor.chest 0 netherite_chestplate 1 0 {"item_name":"§4§lL§c§lu§6§lm§e§li§a§ls§b§l §3§lC§9§lh§1§le§5§ls§d§lt§f§lp§d§ll§5§la§c§lt§2§le"}')
    player.execute('/replaceitem entity @s slot.armor.legs 0 netherite_leggings 1 0 {"item_name":"§4§lL§c§lu§6§lm§e§li§a§ls§b§l §3§lL§9§le§1§lg§5§lg§d§li§f§ln§d§lg§5§ls"}')
    player.execute('/replaceitem entity @p slot.armor.feet 0 netherite_boots 1 0 {"item_name":"§4§lL§c§lu§6§lm§e§li§a§ls§b§l §3§lB§9§lo§1§lo§5§lt§d§ls"}')
})
