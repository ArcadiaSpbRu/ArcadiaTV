<?php
	$r = rand(1, 1000);
if ($r <= 333) {
print("{
    \"type\": \"Article\",
    \"link\" : \"html\\\\London.html\",
    \"showTime\" : 20
    }");
}
else if ($r <= 666){
   print("{
       \"type\": \"Album\",
       \"photos\" : [
       \"http://moarrr.su/image/full/%D0%A4%D0%BE%D1%82%D0%BE-%D0%9F%D1%80%D0%B8%D1%80%D0%BE%D0%B4%D0%B0-%D0%9A%D1%80%D0%B0%D1%81%D0%B8%D0%B2%D1%8B%D0%B5-%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B8-%D0%BB%D0%B5%D1%81-%D0%BA%D0%BB%D0%B8%D0%BA%D0%B0%D0%B1%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE-%D0%BF%D0%B5%D1%81%D0%BE%D1%87%D0%BD%D0%B8%D1%86%D0%B0-27645031.jpeg\",
       \"https://cardse.net/i/2015/05/30/75908ec7ecfa9aa366da60a0b16f41b6.jpg\",
       \"http://www.sportamas.com/wp-content/uploads/2013/05/bridge-panorama-1920x1080.jpg\",
       \"http://333v.ru/uploads/01/01e993844ac81169283d4e5499adc489.jpg\",
       \"http://qiqru.org/media/npict/1105/original/wallpaper_of_the_sea_and_oceans_1053596.jpeg\",
       \"http://wallpaperawesome.com/wallpapers-awesome/wallpapers-full-hd-1920-1080-widescreen-awesome/wallpaper-full-hd-1920-1080-widescreen-awesome-653.jpg\",
       \"http://картинки.cc/img/8/6/2/86292.jpg\",
       \"http://333v.ru/uploads/1d/1d51e540a54bba7efe9b35886a93dec0.jpg\",
       \"http://www.gandex.ru/upl/oboi/u6684_8237_4.jpg\"],
       \"photoCount\" : 9,
       \"showTime\" : 5
       }");
} else {
    print("{
        \"type\": \"Birthday\",
        \"people\" : [
        [\"name\" : \"Vasiliy Vasilyevich\",\"photo"\:\"url1\",\"date\": \"21.02\"],
        [\"name\" : \"Vasiliy Ivanovich\",\"photo"\:\"url2\",\"date\": \"22.02\"],
        [\"name\" : \"Vasiliy Genadievich\",\"photo"\:\"url3\",\"date\": \"23.02\"],
        ],
        \"showTime\" : 25
    }");

}
