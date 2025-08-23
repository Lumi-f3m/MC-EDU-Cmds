player.onChat(".illegals_kit_2", function () {
    player.say("Giving you The Anarchist's Toolbox!");

    // Gives a fully-stocked shulker box with a custom name
    player.execute("/give @p pink_shulker_box{display:{Name:'{\"text\":\"Wowzerz\",\"color\":\"gold\"}'},BlockEntityTag:{Items:[{Slot:0,id:\"minecraft:bedrock\",Count:64},{Slot:1,id:\"minecraft:end_portal_frame\",Count:64},{Slot:2,id:\"minecraft:barrier\",Count:64},{Slot:3,id:\"minecraft:fire\",Count:64},{Slot:4,id:\"minecraft:command_block\",Count:64},{Slot:5,id:\"minecraft:repeating_command_block\",Count:64},{Slot:6,id:\"minecraft:chain_command_block\",Count:64},{Slot:7,id:\"minecraft:mob_spawner\",Count:1,tag:{BlockEntityTag:{SpawnData:{id:\"minecraft:pig\"}}}},{Slot:8,id:\"minecraft:player_head\",Count:1},{Slot:9,id:\"minecraft:dead_bush\",Count:1,tag:{display:{Name:'{\"text\":\"Shrubs\"}'}}},{Slot:10,id:\"minecraft:pig_spawn_egg\",Count:64},{Slot:11,id:\"minecraft:enchanted_book\",Count:1,tag:{Enchantments:[{id:\"sharpness\",lvl:32767}]}},{Slot:12,id:\"minecraft:glass\",Count:1,tag:{Enchantments:[{}]}},{Slot:13,id:\"minecraft:command_block_minecart\",Count:64},{Slot:14,id:\"minecraft:dragon_egg\",Count:1},{Slot:15,id:\"minecraft:structure_block\",Count:64},{Slot:16,id:\"minecraft:jigsaw\",Count:64},{Slot:17,id:\"minecraft:light\",Count:64},{Slot:18,id:\"minecraft:knowledge_book\",Count:1},{Slot:19,id:\"minecraft:nether_star\",Count:64},{Slot:20,id:\"minecraft:end_crystal\",Count:64},{Slot:21,id:\"minecraft:spawner\",Count:1,tag:{BlockEntityTag:{SpawnData:{id:\"minecraft:ender_dragon\"}}}},{Slot:22,id:\"minecraft:netherite_block\",Count:64},{Slot:23,id:\"minecraft:beacon\",Count:64},{Slot:24,id:\"minecraft:ender_eye\",Count:64},{Slot:25,id:\"minecraft:enchanted_golden_apple\",Count:64},{Slot:26,id:\"minecraft:potion\",Count:1,tag:{Potion:\"minecraft:strong_healing\"}}]}}");

    // These items can't go in the shulker, so they are given separately
    mobs.give(mobs.target(LOCAL_PLAYER), WATER, 64);
    mobs.give(mobs.target(LOCAL_PLAYER), LAVA, 64);
    mobs.give(mobs.target(LOCAL_PLAYER), FIRE, 64);
    
    player.say("Your illegal blocks kit is ready.");
});
