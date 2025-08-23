player.onChat(".equip_kit", function () {
    player.say("Equipping your kit now!");

    // --- Automatically equips Netherite Armor with max enchants ---
    player.execute("/replaceitem entity @p slot.armor.head netherite_helmet{Enchantments:[{id:\"protection\",lvl:4},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1},{id:\"aqua_affinity\",lvl:1},{id:\"respiration\",lvl:3}]}");
    player.execute("/replaceitem entity @p slot.armor.chest netherite_chestplate{Enchantments:[{id:\"protection\",lvl:4},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1}]}");
    player.execute("/replaceitem entity @p slot.armor.legs netherite_leggings{Enchantments:[{id:\"protection\",lvl:4},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1}]}");
    player.execute("/replaceitem entity @p slot.armor.feet netherite_boots{Enchantments:[{id:\"protection\",lvl:4},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1},{id:\"feather_falling\",lvl:4}]}");

    // --- Places tools and a Totem in your hotbar and offhand ---
    // Slot 0 (Hotbar 1): Max Enchanted Sword
    player.execute("/replaceitem entity @p slot.hotbar.0 netherite_sword{Enchantments:[{id:\"sharpness\",lvl:5},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1}]}");
    // Slot 1 (Hotbar 2): Max Enchanted Pickaxe
    player.execute("/replaceitem entity @p slot.hotbar.1 netherite_pickaxe{Enchantments:[{id:\"efficiency\",lvl:5},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1},{id:\"fortune\",lvl:3}]}");
    // Slot 2 (Hotbar 3): Max Enchanted Axe
    player.execute("/replaceitem entity @p slot.hotbar.2 netherite_axe{Enchantments:[{id:\"efficiency\",lvl:5},{id:\"unbreaking\",lvl:3},{id:\"mending\",lvl:1},{id:\"silk_touch\",lvl:1}]}");
    // Offhand Slot: A Totem of Undying
    player.execute("/replaceitem entity @p slot.weapon.offhand totem_of_undying");

    player.say("Your kit has been equipped!");
});
