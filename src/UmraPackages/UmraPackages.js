import one from "../assetss/UmraTravelPkg/one.jpg";
import two from "../assetss/UmraTravelPkg/two.jpg";
import three from "../assetss/UmraTravelPkg/three.jpeg";
import four from "../assetss/UmraTravelPkg/four.jpg";
import five from "../assetss/UmraTravelPkg/five.jpg";
import six from "../assetss/UmraTravelPkg/six.jpg";

// Hotel Images

import Al_olayan_palace_one from "../assetss/HottleImg/Al-Olayan-Palace/1.jpg";
import Al_olayan_palace_two from "../assetss/HottleImg/Al-Olayan-Palace/2.jpg";
import Al_olayan_palace_three from "../assetss/HottleImg/Al-Olayan-Palace/3.jpg";

import Borj_Mawaddah_one from "../assetss/HottleImg/Borj-Mawaddah/1.jpg";
import Borj_Mawaddah_two from "../assetss/HottleImg/Borj-Mawaddah/2.jpg";
import Borj_Mawaddah_three from "../assetss/HottleImg/Borj-Mawaddah/3.jpg";

import Dallah_Ajyad_one from "../assetss/HottleImg/Dallah-Ajyad/1.jpg";
import Dallah_Ajyad_two from "../assetss/HottleImg/Dallah-Ajyad/2.jpg";
import Dallah_Ajyad_three from "../assetss/HottleImg/Dallah-Ajyad/3.jpg";

import Jiyarul_Al_Khair_one from "../assetss/HottleImg/Jiyarul-Al-Khair/1.jpg";
import Jiyarul_Al_Khair_two from "../assetss/HottleImg/Jiyarul-Al-Khair/2.jpg";
import Jiyarul_Al_Khair_three from "../assetss/HottleImg/Jiyarul-Al-Khair/3.jpg";

import Kayan_Al_Madina_one from "../assetss/HottleImg/Kayan-Al-Madina/1.jpg";
import Kayan_Al_Madina_two from "../assetss/HottleImg/Kayan-Al-Madina/2.jpg";
import Kayan_Al_Madina_three from "../assetss/HottleImg/Kayan-Al-Madina/3.jpg";

import Masat_Al_Bustan_one from "../assetss/HottleImg/Masat-Al-Bustan/1.jpg";
import Masat_Al_Bustan_two from "../assetss/HottleImg/Masat-Al-Bustan/2.jpg";
import Masat_Al_Bustan_three from "../assetss/HottleImg/Masat-Al-Bustan/3.jpg";

import Rama_Al_Madina_one from "../assetss/HottleImg/Rama-Al-Madina/1.jpg";
import Rama_Al_Madina_two from "../assetss/HottleImg/Rama-Al-Madina/2.jpg";
import Rama_Al_Madina_three from "../assetss/HottleImg/Rama-Al-Madina/3.jpg";

import Tara_Al_Hijra_one from "../assetss/HottleImg/Tara-Al-Hijra/1.jpg";
import Tara_Al_Hijra_two from "../assetss/HottleImg/Tara-Al-Hijra/2.jpg";
import Tara_Al_Hijra_three from "../assetss/HottleImg/Tara-Al-Hijra/3.jpg";

import Tara_Al_Khalil_one from "../assetss/HottleImg/Tara-Al-Khalil/1.jpg";
import Tara_Al_Khalil_two from "../assetss/HottleImg/Tara-Al-Khalil/2.jpg";
import Tara_Al_Khalil_three from "../assetss/HottleImg/Tara-Al-Khalil/3.jpg";

const UmraPackages = [
  {
    no: {
      daysAvailable: true,
      title: "Economy Land Package",
      description: "Mecca Tara Khalil 100 Meter Harm Mandina Rama Madina",
      food: "Food buffet 3 times (HYD and BLR dishes)",
      clothes: "Laundry 2 times once in Mecca and once in medina",
      water: "Zam Zam water 5ltr as a complimentary",
      visa: "Available",
      tourguide: "Tourist Guide",
      shuttle: "Shuttle Service",
      bag: "Bag",
      ziyarat: "Local Ziyarat",
      price: "29,000",
      hotels: [
        "350m far from Haram - 3 star ratings",
        "50m far from Madina- 3 star Ratings.",
      ],
      hotelImg: [
        [Tara_Al_Hijra_one, Tara_Al_Hijra_two, Tara_Al_Hijra_two],
        [Rama_Al_Madina_one, Rama_Al_Madina_two, Rama_Al_Madina_three],
      ],
      days: 15,
      img: one,
      starRating: [3, 3],
    },
    yes: {
      daysAvailable: true,
      title: "Economy Land Package",
      description: "Mecca Tara Khalil 100 Meter Harm Mandina Rama Madina",
      food: "Food buffet 3 times (HYD and BLR dishes)",
      clothes: "Laundry 2 times once in Mecca and once in medina",
      water: "Zam Zam water 5ltr as a complimentary",
      visa: "Available",
      tourguide: "Tourist Guide",
      shuttle: "Shuttle Service",
      bag: "Bag",
      ziyarat: "Local Ziyarat",
      price: "37,500",
      days: 20,
      img: one,
      hotels: [
        "350m far from Haram - 3 star ratings",
        "50m far from Madina - 3 star Ratings.",
      ],
      hotelImg: [
        [Tara_Al_Hijra_one, Tara_Al_Hijra_two, Tara_Al_Hijra_two],
        [Rama_Al_Madina_one, Rama_Al_Madina_two, Rama_Al_Madina_three],
      ],
      starRating: [3, 3],
    },
  },
  {
    no: {
      daysAvailable: true,
      title: "Economy Land Package",
      description: "Mecca olyan palace shuttle Madina Burj mooda",
      food: "Food buffet 3 times (HYD and BLR dishes)",
      clothes: "Laundry 2 times once in Mecca and once in medina",
      water: "Zam Zam water 5ltr as a complimentary",
      visa: "Not Available",
      tourguide: "Tourist Guide",
      shuttle: "Shuttle Service",
      bag: "Bag",
      ziyarat: "Local Ziyarat",
      price: "20,000",
      days: 15,
      img: two,
      hotels: [
        "800m far from Haram - 5 star ratings ",
        "100m far from Madina - 4 star rating",
      ],
      hotelImg: [
        [Al_olayan_palace_one, Al_olayan_palace_two, Al_olayan_palace_three],
        [Borj_Mawaddah_one, Borj_Mawaddah_two, Borj_Mawaddah_three],
      ],
      starRating: [5, 4],
    },
    yes: {
      daysAvailable: true,
      title: "Economy Land Package",
      description: "Mecca olyan palace shuttle Madina Burj mooda",
      food: "Food buffet 3 times (HYD and BLR dishes)",
      clothes: "Laundry 2 times once in Mecca and once in medina",
      water: "Zam Zam water 5ltr as a complimentary",
      visa: "Not Available",
      tourguide: "Tourist Guide",
      shuttle: "Shuttle Service",
      bag: "Bag",
      ziyarat: "Local Ziyarat",
      price: "26,000",
      days: 20,
      img: two,
      hotels: [
        "800m far from Haram - 5 star ratings ",
        "100m far from Madina - 4 star rating",
      ],
      hotelImg: [
        [Al_olayan_palace_one, Al_olayan_palace_two, Al_olayan_palace_three],
        [Borj_Mawaddah_one, Borj_Mawaddah_two, Borj_Mawaddah_three],
      ],
      starRating: [5, 4],
    },
  },
  {
    no: {
      daysAvailable: true,
      title: "Dulex Land Package",
      description: "Meca Tara Hijra Madina Rama madina",
      food: "Food buffet 3 times (HYD and BLR dishes)",
      clothes: "Laundry 2 times once in Mecca and once in medina",
      water: "Zam Zam water 5ltr as a complimentary",
      visa: "Available",
      tourguide: "Tourist Guide",
      shuttle: "Shuttle Service",
      bag: "Bag",
      ziyarat: "Local Ziyarat",
      price: "25,000",
      days: 15,
      img: three,
      hotels: [
        "300m far from Haram - 4 star ratings",
        "50m Far from Madina - 3 Star rating",
      ],
      hotelImg: [
        [Tara_Al_Hijra_one, Tara_Al_Hijra_two, Tara_Al_Hijra_three],
        [Rama_Al_Madina_one, Rama_Al_Madina_two, Rama_Al_Madina_three],
      ],
      starRating: [4, 3],
    },
    yes: {
      daysAvailable: true,
      title: "Dulex Land Package",
      description: "Meca Tara Hijra Madina Rama madina",
      food: "Food buffet 3 times (HYD and BLR dishes)",
      clothes: "Laundry 2 times once in Mecca and once in medina ",
      water: "Zam Zam water 5ltr as a complimentary",
      visa: "Available",
      tourguide: "Tourist Guide",
      shuttle: "Shuttle Service",
      bag: "Bag",
      ziyarat: "Local Ziyarat",
      price: "33,500",
      days: 20,
      img: three,
      hotels: [
        "300m far from Haram - 4 star ratings",
        "50m Far from Madina - 3 Star rating",
      ],
      hotelImg: [
        [Tara_Al_Hijra_one, Tara_Al_Hijra_two, Tara_Al_Hijra_three],
        [Rama_Al_Madina_one, Rama_Al_Madina_two, Rama_Al_Madina_three],
      ],
      starRating: [3, 3],
    },
  },
  {
    no: {
      daysAvailable: true,
      title: "Super Dulex Land Package",
      description: "Mecca hotil Dallah ijyad in ijyad Madina Massa bustan",
      food: "Food buffet 3 times (HYD and BLR dishes)",
      clothes: "Laundry 2 times once in Mecca and once in medina",
      water: "Zam Zam water 5ltr as a complimentary",
      visa: "Available",
      tourguide: "Tourist Guide",
      shuttle: "Shuttle Service",
      bag: "Bag",
      ziyarat: "Local Ziyarat",
      price: "29,000",
      days: 15,
      img: four,
      hotels: [
        "300m far from Haram - 3 star ratings",
        "50m far from haram - 3 star rating",
      ],
      hotelImg: [
        [Dallah_Ajyad_one, Dallah_Ajyad_two, Dallah_Ajyad_three],
        [Masat_Al_Bustan_one, Masat_Al_Bustan_two, Masat_Al_Bustan_three],
      ],
      starRating: [3, 3],
    },
    yes: {
      daysAvailable: true,
      title: "Super Dulex Land Package",
      description: "Mecca hotil Dallah ijyad in ijyad Madina Massa bustan",
      food: "Food buffet 3 times (HYD and BLR dishes)",
      clothes: "Laundry 2 times once in Mecca and once in medina ",
      water: "Zam Zam water 5ltr as a complimentary",
      visa: "Available",
      tourguide: "Tourist Guide",
      shuttle: "Shuttle Service",
      bag: "Bag",
      ziyarat: "Local Ziyarat",
      price: "38,500",
      days: 20,
      img: four,
      hotels: [
        "300m far from Haram - 3 star ratings",
        "50m far from haram - 3 star rating",
      ],
      hotelImg: [
        [Dallah_Ajyad_one, Dallah_Ajyad_two, Dallah_Ajyad_three],
        [Masat_Al_Bustan_one, Masat_Al_Bustan_two, Masat_Al_Bustan_three],
      ],
      starRating: [3, 3],
    },
  },
  {
    no: {
      daysAvailable: false,
      title: "Premium Land Package",
      description: "Mecca hotil Dallah ijyad in ijyad Madina Massa bustan",
      food: "Food buffet 3 times (HYD and BLR dishes)",
      clothes: "Laundry 2 times once in Mecca and once in medina",
      water: "Zam Zam water 5ltr as a complimentary",
      visa: "Available",
      tourguide: "Tourist Guide",
      shuttle: "Shuttle Service",
      bag: "Bag",
      ziyarat: "Local Ziyarat",
      price: "40,500",
      days: 15,
      img: five,
      hotels: [
        "200m far from Haram - 3 star rating",
        "50m far from Haram - 3 star rating ",
      ],
      hotelImg: [
        [Jiyarul_Al_Khair_one, Jiyarul_Al_Khair_two, Jiyarul_Al_Khair_three],
        [Kayan_Al_Madina_one, Kayan_Al_Madina_two, Kayan_Al_Madina_three],
      ],
      starRating: [3, 3],
    },
  },
  {
    no: {
      daysAvailable: false,
      title: "Premium Land Package",
      description: "Mecca hotil Dallah ijyad in ijyad Madina Massa bustan",
      food: "Food buffet 3 times (HYD and BLR dishes)",
      clothes: "Laundry 2 times once in Mecca and once in medina",
      water: "Zam Zam water 5ltr as a complimentary",
      visa: "Available",
      tourguide: "Tourist Guide",
      shuttle: "Shuttle Service",
      bag: "Bag",
      ziyarat: "Local Ziyarat",
      price: "36,500",
      days: 15,
      img: six,
      hotels: [
        "350m far from Haram – 4 star ratings",
        "50m far from Haram - 3 star rating",
      ],
      hotelImg: [
        [Tara_Al_Khalil_one, Tara_Al_Khalil_two, Tara_Al_Khalil_three],
        [Kayan_Al_Madina_one, Kayan_Al_Madina_two, Kayan_Al_Madina_three],
      ],
      starRating: [4, 3],
    },
  },
];

export default UmraPackages;
