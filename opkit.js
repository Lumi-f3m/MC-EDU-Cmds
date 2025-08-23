player.onChat(".kit", function () {
    player.say("Giving you a full kit of paw's op kit loot!");

    // Netherite Armor with Protection IV, Unbreaking III, and Mending I
    player.execute("/give @p netherite_helmet{Enchantments:[{id:\"protection\",lvl:4},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1},{id:\"aqua_affinity\",lvl:1},{id:\"respiration\",lvl:3}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p netherite_chestplate{Enchantments:[{id:\"protection\",lvl:4},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p netherite_leggings{Enchantments:[{id:\"protection\",lvl:4},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p netherite_boots{Enchantments:[{id:\"protection\",lvl:4},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1},{id:\"feather_falling\",lvl:4}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");

    // Max Enchanted Tools and a Trident
    player.execute("/give @p netherite_sword{Enchantments:[{id:\"sharpness\",lvl:5},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p netherite_pickaxe{Enchantments:[{id:\"efficiency\",lvl:5},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1},{id:\"fortune\",lvl:3}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p trident{Enchantments:[{id:\"riptide\",lvl:3},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1}],display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");

    // Potion, Totem, and End-related items
    player.execute("/give @p totem_of_undying 64 {display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p ender_pearl 64 {display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p end_crystal 64 {display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p enchanted_golden_apple 64 {display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p obsidian 64 {display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    player.execute("/give @p ender_chest 64 {display:{Name:'{\"text\":\"paw\\'s op kit loot\"}'}}");
    
    player.say("Your kit is ready to go!");
});
