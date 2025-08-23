player.onChat(".pvp", function () {
    player.say("Equipping your PvP kit!");

    // Armor with max enchantments and Curse of Vanishing
    player.execute("/replaceitem entity @p slot.armor.head netherite_helmet 1 {Enchantments:[{id:\"protection\",lvl:32767},{id:\"unbreaking\",lvl:32767},{id:\"mending\",lvl:32767},{id:\"aqua_affinity\",lvl:32767},{id:\"respiration\",lvl:32767},{id:\"curse_of_vanishing\",lvl:1}]}");
    player.execute("/replaceitem entity @p slot.armor.chest netherite_chestplate 1 {Enchantments:[{id:\"protection\",lvl:32767},{id:\"unbreaking\",lvl:32767},{id:\"mending\",lvl:32767},{id:\"curse_of_vanishing\",lvl:1}]}");
    player.execute("/replaceitem entity @p slot.armor.legs netherite_leggings 1 {Enchantments:[{id:\"protection\",lvl:32767},{id:\"unbreaking\",lvl:32767},{id:\"mending\",lvl:32767},{id:\"curse_of_vanishing\",lvl:1}]}");
    player.execute("/replaceitem entity @p slot.armor.feet netherite_boots 1 {Enchantments:[{id:\"protection\",lvl:32767},{id:\"unbreaking\",lvl:32767},{id:\"mending\",lvl:32767},{id:\"feather_falling\",lvl:32767},{id:\"curse_of_vanishing\",lvl:1}]}");

    // Hotbar and offhand with max enchanted tools and items
    player.execute("/replaceitem entity @p slot.hotbar.0 netherite_sword 1 {Enchantments:[{id:\"sharpness\",lvl:32767},{id:\"unbreaking\",lvl:32767},{id:\"mending\",lvl:32767},{id:\"curse_of_vanishing\",lvl:1}]}");
    player.execute("/replaceitem entity @p slot.hotbar.1 netherite_pickaxe 1 {Enchantments:[{id:\"efficiency\",lvl:32767},{id:\"unbreaking\",lvl:32767},{id:\"mending\",lvl:32767},{id:\"fortune\",lvl:32767},{id:\"curse_of_vanishing\",lvl:1}]}");
    player.execute("/replaceitem entity @p slot.hotbar.2 netherite_axe 1 {Enchantments:[{id:\"efficiency\",lvl:32767},{id:\"unbreaking\",lvl:32767},{id:\"mending\",lvl:32767},{id:\"silk_touch\",lvl:32767},{id:\"curse_of_vanishing\",lvl:1}]}");
    player.execute("/replaceitem entity @p slot.hotbar.3 golden_apple 64");
    player.execute("/replaceitem entity @p slot.hotbar.4 totem_of_undying 64 {Enchantments:[{id:\"curse_of_vanishing\",lvl:1}]}");
    player.execute("/replaceitem entity @p slot.weapon.offhand totem_of_undying 1 {Enchantments:[{id:\"curse_of_vanishing\",lvl:1}]}");
    
    player.say("Your PvP kit is ready!");
});
