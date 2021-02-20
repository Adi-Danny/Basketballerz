$(document).ready(function(){
    $("#character_button").click(function(){
        $("section > div:not(#character)").hide('fast');
        $("#character").show('slow');
    });

    $("#clothes_button").click(function(){
        $("section > div:not(#clothes)").hide('fast');
        $("#clothes").show('slow');
    });

    $("#league_button").click(function(){
        $("section > div:not(#league)").hide('fast');
        $("#league").show('slow');
    });

    $("#team_button").click(function(){
        $("section > div:not(#team)").hide('fast');
        $("#team").show('slow');
    });

    $("#training_button").click(function(){
        $("section > div:not(#training)").hide('fast');
        $("#training").show('slow');
    });

    $("#options_button").click(function(){
        $("section > div:not(#options)").hide('fast');
        $("#options").show('slow');
    });

    $("#home_button").click(function(){
        $("section > div:not(#welcome)").hide('fast');
        $("#welcome").show('slow');
    })

    $("#shop_button").click(function(){
        $("section > div:not(#shop)").hide('fast');
        $("#shop").show('slow');
    })

    $("#ranking_button").click(function(){
        $("section > div:not(#ranking)").hide('fast');
        $("#ranking").show('slow');
    })
})