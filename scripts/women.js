import { navbar2 } from "../component/navbar2.js";

let nava2=document.getElementById('nav2');
nava2.innerHTML=navbar2();



// img-responsive src: "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/12595594/2020/10/15/b6e22b58-3450-468f-afeb-3218b6ce7acb1602737925709SareemallNavyBluePolyChiffonSolidEthnicPartywearSareewithMat1.jpg"
// product-base href: "https://www.myntra.com/dresses/antheaa/antheaa-black--rust-orange-floral-print-tiered-midi-fit--flare-dress-with-ruffles/12595594/buy"
// product-brand: "Antheaa"
// product-discountPercentage: "(48% OFF)"
// product-discountedPrice: "Rs. 1278"
// product-product: "Floral Print Fit & Flare Dress"
// product-ratingsContainer: 4.3
// product-ratingsCount: "7k"
// product-separator: "|"
// product-sizeButton: "XS"
// product-sizeButton 2: "S"
// product-sizeButton 3: "M"
// product-sizeButton 4: "L"
// product-sizeButton 5: "XL"
// product-sizeButton 6: "XXL"
// product-sizeNoInventoryPresent: "XS,"
// product-sizeNoInventoryPresent 2: "S,"
// product-sizeNoInventoryPresent 3: "M,"
// product-sizeNoInventoryPresent 4: "L,"
// product-sizeNoInventoryPresent 5: "XL,"
// product-sizeNoInventoryPresent 6: "XXL"
// product-strike: "Rs. 2459"

// import {navbar} from "./Import Export/navbar.js";
import {header,navbar, section, footer, last} from '../Import Export/navbar.js'
let x=document.getElementById("navbar");
x.innerHTML=navbar();
document.getElementsByTagName("footer")[0].innerHTML=footer();
document.getElementById("last").innerHTML=last();