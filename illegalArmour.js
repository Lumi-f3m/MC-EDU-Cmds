player.onChat(".illegals_kit", function () {
    player.say("Giving you the illegals gear kit! :3");

    // A sword with a massively high Sharpness enchantment
    player.execute("/give @p netherite_sword{Enchantments:[{id:\"sharpness\",lvl:32767}]}");

    // A full set of "God Armor" with maxed-out enchantments
    player.execute("/give @p netherite_helmet{Enchantments:[{id:\"protection\",lvl:32767},{id:\"unbreaking\",lvl:32767}]}");
    player.execute("/give @p netherite_chestplate{Enchantments:[{id:\"protection\",lvl:32767},{id:\"unbreaking\",lvl:32767}]}");
    player.execute("/give @p netherite_leggings{Enchantments:[{id:\"protection\",lvl:32767},{id:\"unbreaking\",lvl:32767}]}");
    player.execute("/give @p netherite_boots{Enchantments:[{id:\"protection\",lvl:32767},{id:\"unbreaking\",lvl:32767}]}");
    
    // A dark blue shulker box renamed "illegals"
    player.execute("/give @p dark_blue_shulker_box{display:{Name:'{\"text\":\"illegals\"}'}}");

    player.say("Your illegals gear is ready! Have fun! :D");
});
