player.onChat(".kit", function () {
    player.say("Equipping paw's op kit loot!");

    // Armor with Protection IV, Unbreaking III, and Mending I
    player.execute("/replaceitem entity @p slot.armor.head netherite_helmet 1 {Enchantments:[{id:\"protection\",lvl:4},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1},{id:\"aqua_affinity\",lvl:1},{id:\"respiration\",lvl:3}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/replaceitem entity @p slot.armor.chest netherite_chestplate 1 {Enchantments:[{id:\"protection\",lvl:4},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/replaceitem entity @p slot.armor.legs netherite_leggings 1 {Enchantments:[{id:\"protection\",lvl:4},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/replaceitem entity @p slot.armor.feet netherite_boots 1 {Enchantments:[{id:\"protection\",lvl:4},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1},{id:\"feather_falling\",lvl:4}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");

    // Max Enchanted Tools in hotbar
    player.execute("/replaceitem entity @p slot.hotbar.0 netherite_sword 1 {Enchantments:[{id:\"sharpness\",lvl:5},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/replaceitem entity @p slot.hotbar.1 netherite_pickaxe 1 {Enchantments:[{id:\"efficiency\",lvl:5},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1},{id:\"fortune\",lvl:3}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/replaceitem entity @p slot.hotbar.2 netherite_axe 1 {Enchantments:[{id:\"efficiency\",lvl:5},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1},{id:\"silk_touch\",lvl:1}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/replaceitem entity @p slot.weapon.offhand totem_of_undying 1");

    // Other kit items that are given to inventory
    player.execute("/give @p trident{Enchantments:[{id:\"riptide\",lvl:3},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p ender_pearl 64 {display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p end_crystal 64 {display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p enchanted_golden_apple 64 {display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p obsidian 64 {display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p ender_chest 64 {display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    
    player.say("Your kit is ready to go!");
});
