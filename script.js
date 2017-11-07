var signs = ["AQUARIUS", "PISCES","ARIES", "TAURUS", "GEMINI","CANCER", "LEO", "VIRGO", "LIBRA", "SCORPIO", "SAGITTARIUS", "CAPRICORN"];
var fortuneStrings = ["An exciting week awaits for you Adventurous Aquarius! Keep your eye out for opportunities for adventure... something may surprise you",
    "Picky Pisces. You always have something to pout about. You're just sensitive though! You're sweet but you have your preferences. Don't let people get in your way of enjoying what you like.",
    "Amazing Aries! You are one of many talents. You do a lot of things well and it is noticed. Be proud-- your skills are unique and surprising",
    "Tantalizing Taurus... You are sizzling, sassy, and surely stubborn. Times of passion are ahead.",
    "The era of Germy Gemini is coming!!! Remember to wash your hands and avoid sharing that water bottle, Gemini. An ugly flu is in your future, especially if you don't fix that attitude.",
    "Caring Cancer... incessantly thoughtful. You think of others and put kindness ahead of your own gain. Do not think it goes unnoticed- acknowledgement in an unusual form awaits.  ",
    "Lucky Leo. Good fortune is coming your way this month. Money, relationships, or opportunities are sure to shift in your favour, be sure to accept them but beware not to get too ahead of yourself.",
    "Violent Virgo... Just kidding! Virgo, you've got a heart of pudding and everyone knows it. Friends, family, and peers are lucky to have your kind spirit around.",
    "Chill times are in your future Laid-pack Libra. You are always down to earth and the people around you go to you to de-stress because of your good vibes. Stay 'lax, Libra!",
    "Are you sorry, Scorpio? Is there something you need to apologize for? Maybe someone to forgive? Reparations are in your future-- but be ready to initiate.",
    "Silly Sag. Your playful spirit, though some consider childish, is rejuvenating for the tired spirits surrounding you. Stay young!",
    "Watch out for Crazy Capricorn! You're vibrant and loud energy makes any gathering a true party!"];

var today = new Date();
var thisMonth = today.getMonth() + 1;
var thisDay = today.getDate();



function onSubmit(){
    var month  = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    console.log(thisMonth + " " + thisDay);


    var name = document.getElementById("name").value;
    console.log(name);
    var sign = determineSign(parseInt(month), parseInt(day));
    console.log(sign);
    var horoscope = determineHoroscope(sign);
    console.log(horoscope);
    var image = determineImage(sign);
    console.log(image)

    if(parseInt(month) == thisMonth && parseInt(day) == thisDay){
        horoscope = "Well happy birthday " + sign.toLowerCase() + " " + name + " ! Don't worry if today hasn't been everything you imagined quite yet... Your evening will bring fortune, love, and great memories! Get ready for an unforgettable year.";
    }


    document.getElementById("sign").innerHTML = name + ", you are a... " + sign + "!";
    document.getElementById("horoscope").innerHTML = horoscope;
    document.getElementById("image").innerHTML = image;

}



function determineSign(month, day){
    var sign = "";

    if (month == 1 && day >= 20 || month == 2 && day <= 18){
        sign = signs[0];
    }
    if (month == 2 && day >= 20 && day <= 29 || month == 3 && day <= 18){
         sign = signs[1];
    }
    if (month == 3 && day >= 21 || month == 4 && day <= 19){
        sign = signs[2];
    }
    if (month == 4 && day >= 20 || month == 5 && day <= 20){
        sign = signs[3];
    }if (month == 5 && day >= 21 || month == 6 && day <= 21){
        sign = signs[4];
    }
    if (month == 6 && day >= 21 || month == 7 && day <= 22){
        sign = signs[5];
    }if (month == 7 && day >= 23 || month == 8 && day <= 22){
        sign = signs[6];
    }
    if (month == 8 && day >= 23 || month == 9 && day <= 22){
        sign = signs[7];
    }
    if (month == 9 && day >= 23 || month == 10 && day <= 22){
        sign = signs[8];
    }
    if (month == 10 && day >= 23 || month == 11 && day <= 21){
        sign = signs[9];
    }
    if (month == 11 && day >= 22 || month == 12 && day <= 21){
        sign = signs[10];
    }
    if (month == 12 && day >= 22 || month == 1 && day <= 19){
        sign = signs[11];
    }


    if(month == 2 && day > 29){
        sign = "IMPOSSIBLE BIRTHDAY. Please enter a valid birthday to receive your horoscope";
    }
    if(day == 31) {
        if(month == 4 || month == 6 || month == 9 || month == 11) {
            sign = "IMPOSSIBLE BIRTHDAY. Please enter a valid birthday to receive your horoscope";
        }
    }

    return sign;
}

function determineHoroscope(sign){
    var horoscope = "";
    for (var i = 0; i < signs.length; i++){
        if (sign == signs[i]){
            console.log(sign);
            horoscope = fortuneStrings[i];
        }
    }

    return horoscope;
}


function determineImage(sign){
    var newSign = sign.toLowerCase();
    console.log(newSign);
    var image =  "<img src=img/" + newSign +  ".png>";
    console.log(image);

    return image;

}

