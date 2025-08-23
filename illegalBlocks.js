player.onChat(".illegals_kit_2", function () {
    player.say("Giving you the advanced illegals kit!");

    // Unobtainable blocks
    player.execute("/give @p bedrock 64");
    player.execute("/give @p end_portal_frame 64");
    player.execute("/give @p barrier 64");
    player.execute("/give @p water 64");
    player.execute("/give @p fire 64");

    // All three types of Command Blocks
    player.execute("/give @p command_block 64");
    player.execute("/give @p repeating_command_block 64");
    player.execute("/give @p chain_command_block 64");

    // A mob spawner that spawns pigs
    player.execute("/give @p mob_spawner{BlockEntityTag:{SpawnData:{id:\"minecraft:pig\"}}}");

    // Custom items and blocks
    player.execute("/give @p player_head 1");
    player.execute("/give @p dead_bush{display:{Name:'{\"text\":\"Shrubs\"}'}}");
    player.execute("/give @p pig_spawn_egg 64");

    // Illegal Enchanted Book and Enchanted Glass
    player.execute("/give @p enchanted_book{Enchantments:[{id:\"sharpness\",lvl:32767}]}");
    player.execute("/give @p glass{Enchantments:[{}]}");

    // Command Block Minecart and a renamed shulker box
    player.execute("/give @p command_block_minecart 64");
    player.execute("/give @p dark_blue_shulker_box{display:{Name:'{\"text\":\"blocks\"}'}}");
    
    player.say("Your illegals blocks kit is ready!");
});
