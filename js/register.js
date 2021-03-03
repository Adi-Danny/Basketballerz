function show_position_info(position_clicked){
    img = document.getElementById("profile_picture");
    profile_picture = document.getElementById("radio_group_profile_picture");
    
    str = document.getElementById("strength");
    agi = document.getElementById("agility");
    acc = document.getElementById("accuracy");
    sta = document.getElementById("stamina");
    str_side = document.getElementById("strong_side");
    
    switch (position_clicked){
        case "pg":
            img.src = "/img/stephenn.jpg";
            profile_picture.appendChild(img);
            str.innerHTML = " 1 ";
            agi.innerHTML = " 6 ";
            acc.innerHTML = " 5 ";
            sta.innerHTML = " 3 ";
            str_side.innerHTML = "3pt shot";
            break;

        case "sg":
            img.src = "/img/hardenn.jpg";
            profile_picture.appendChild(img);
            str.innerHTML = " 2 ";
            agi.innerHTML = " 4 ";
            acc.innerHTML = " 6 ";
            sta.innerHTML = " 3 ";
            str_side.innerHTML = "Mid-range shot";
            break;

        case "sf":
            img.src = "/img/lebronn.jpg";
            profile_picture.appendChild(img);
            str.innerHTML = " 2 ";
            agi.innerHTML = " 6 ";
            acc.innerHTML = " 3 ";
            sta.innerHTML = " 4 ";
            str_side.innerHTML = "Driving layups and dunks"; 
            break;
            
        case "pf":
            img.src = "/img/anthonyy.jpg";
            profile_picture.appendChild(img);
            str.innerHTML = " 7 ";
            agi.innerHTML = " 2 ";
            acc.innerHTML = " 3 ";
            sta.innerHTML = " 3 ";
            str_side.innerHTML = "Points in the paint"; 
            break;

        case "c":
            img.src = "/img/jokicc.jpg";
            profile_picture.appendChild(img);
            str.innerHTML = " 9 ";
            agi.innerHTML = " 1 ";
            acc.innerHTML = " 3 ";
            sta.innerHTML = " 2 ";
            str_side.innerHTML = "Blocks";
            break;
    }
}