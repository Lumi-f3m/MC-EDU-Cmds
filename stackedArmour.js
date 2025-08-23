player.onChat(".stacked_kit", function () {
    player.say("Giving you a full stacked kit!");

    // Gives full stacks of armor
    mobs.give(mobs.target(LOCAL_PLAYER), NETHERITE_HELMET, 64);
    mobs.give(mobs.target(LOCAL_PLAYER), NETHERITE_CHESTPLATE, 64);
    mobs.give(mobs.target(LOCAL_PLAYER), NETHERITE_LEGGINGS, 64);
    mobs.give(mobs.target(LOCAL_PLAYER), NETHERITE_BOOTS, 64);

    // Gives full stacks of tools
    mobs.give(mobs.target(LOCAL_PLAYER), NETHERITE_PICKAXE, 64);
    mobs.give(mobs.target(LOCAL_PLAYER), NETHERITE_AXE, 64);
    mobs.give(mobs.target(LOCAL_PLAYER), NETHERITE_SWORD, 64);
    mobs.give(mobs.target(LOCAL_PLAYER), TRIDENT, 64);
    mobs.give(mobs.target(LOCAL_PLAYER), BOW, 64);

    // Gives stacks of other items
    mobs.give(mobs.target(LOCAL_PLAYER), TOTEM, 64);
    mobs.give(mobs.target(LOCAL_PLAYER), ELYTRA, 64);

    // Adds a named, pink shulker box
    player.execute("/give @p pink_shulker_box 1 {display:{Name:'{\"text\":\"Stacked Kit Box\"}'}}");

    player.say("Your stacked kit is ready!");
});
