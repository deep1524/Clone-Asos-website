import { navbar2 } from "../component/navbar2.js";

let nava2=document.getElementById('nav2');
nava2.innerHTML=navbar2();


// https://newproject179.herokuapp.com/api/saleData
// https://newproject179.herokuapp.com/api/


let sale = async ()=>{
    try{
        let res= await fetch("https://newproject179.herokuapp.com/api/dress")
        let data= await res.json();
        console.log(data)
        append(data)
    }catch(e){
        console.log(e)
    }
}

sale();

let append = (data)=>{
    let container=document.getElementById('container');
    data.forEach((el,index)=>{


        let div=document.createElement('div');
        let image=document.createElement('img')
        image.src=el["img-responsive src"]
        // console.log(image)
        let brand =document.createElement('p');
        brand.innerText='brand:' + " "+el['product-brand'];
        // console.log(el['product-brand'])
        let name=document.createElement('p')
        name.innerText=el['product-product'];
        let price=document.createElement('p');
        price.innerText="price:"+" "+el['product-discountedPrice']
        let mrp=document.createElement('p');
        mrp.innerText="MRP:"+" "+el['product-strike']
        let discount=document.createElement('p')
        discount.innerText="Discount:"+ " "+el['product-discountPercentage'];
        let size=document.createElement('p')
        size.innerText='Size:'+' '+ el['product-sizeButton']+" "+el['product-sizeButton 2']+" "+el['product-sizeButton 3']+" "+el['product-sizeButton 4']+" "+el['product-sizeButton 5']+" "+el['product-sizeButton 6']
        let rating=document.createElement('p');
        rating.innerText='Rating:'+" "+ el['product-ratingsContainer']+' '+el['product-ratingsCount']
        // console.log(size.innerText)
        div.append(image,name,price,mrp,discount,brand,size,rating)
        container.append(div)
        div.addEventListener('click',function(){
            gotoproduct(el)
        })

    })

}
function gotoproduct(el){
    let data=[];
    data.push(el)
    localStorage.setItem('productData',JSON.stringify(data))
    window.location.href='women_product.html'
}