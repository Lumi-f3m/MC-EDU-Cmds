player.onChat(".buildingKit", function () {
    player.say("Giving you the ultimate building kit!");

    // A green shulker box renamed "Building Kit"
    player.execute("/give @p green_shulker_box{display:{Name:'{\"text\":\"Building Kit\"}'}}");

    // First row of blocks from the image
    player.execute("/give @p glowstone 64");
    player.execute("/give @p emerald_block 64");
    player.execute("/give @p cobblestone 64");
    player.execute("/give @p quartz_block 64");
    player.execute("/give @p smooth_sandstone 64");
    player.execute("/give @p end_stone 64");
    player.execute("/give @p white_concrete 64");
    player.execute("/give @p end_stone_bricks 64");
    player.execute("/give @p dark_oak_log 64");

    // Second row of blocks
    player.execute("/give @p stone_bricks 64");
    player.execute("/give @p diamond_block 64");
    player.execute("/give @p lapis_lazuli_block 64");
    player.execute("/give @p redstone_block 64");
    player.execute("/give @p sand 64");
    player.execute("/give @p dark_prismarine 64");
    player.execute("/give @p glass 64");
    player.execute("/give @p bricks 64");
    player.execute("/give @p packed_ice 64");

    // Third row of blocks
    player.execute("/give @p coal_block 64");
    player.execute("/give @p gold_block 64");
    player.execute("/give @p redstone_block 64");
    player.execute("/give @p nether_brick 64");
    player.execute("/give @p stone 64");
    player.execute("/give @p oak_log 64");
    player.execute("/give @p netherite_block 64");
    player.execute("/give @p bookshelf 64");
    player.execute("/give @p grass_block 64");
    
    player.say("Your building kit is ready!");
});
