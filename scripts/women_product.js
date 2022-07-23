import { navbar2 } from "../component/navbar2.js";

let nava2=document.getElementById('nav2');
nava2.innerHTML=navbar2();


let data=JSON.parse(localStorage.getItem('productData'))
let container=document.getElementById('container');
data.forEach((el)=>{
    let div=document.createElement('div');
        let image=document.createElement('img')
        image.src=el["img-responsive src"]
        // console.log(image)
        let brand =document.createElement('h3');
        brand.innerText='brand:' + " "+el['product-brand'];
        // console.log(el['product-brand'])
        let name=document.createElement('h3')
        name.innerText=el['product-product'];
        let price=document.createElement('p');
        price.innerText="price:"+" "+(el['product-discountedPrice']||el['product-price'])
        let mrp=document.createElement('p');
        mrp.innerText="MRP:"+" "+(el['product-strike']||el['product-price'])
        let discount=document.createElement('p')
        discount.innerText="Discount:"+ " "+(el['product-discountPercentage']||0);
        
        
            let size=document.createElement('p')
            size.innerText='Size:'+' '+ el['product-sizeButton']+" "+el['product-sizeButton 2']+" "+el['product-sizeButton 3']+" "+el['product-sizeButton 4']+" "+el['product-sizeButton 5']+" "+el['product-sizeButton 6']

        
        let rating=document.createElement('p');
        
        rating.innerText='Rating:'+" "+ el['product-ratingsContainer']+' '+el['product-ratingsCount']
        let btn=document.createElement('button');
        btn.innerText="Add To Bag"
        btn.style.cursor='pointer'
        btn.setAttribute('id','button')
        btn.addEventListener('click',function(){
            AddData(el);
        })
        // console.log(size.innerText)
        div.append(image,name,price,mrp,discount,brand,size,rating,btn)
        container.append(div)
})

function AddData(el){
    let image=el["img-responsive src"];
    let name = el['product-product']
    let price=el['product-discountedPrice']
    let data=JSON.parse(localStorage.getItem('CartData'))||[];
    let s=new CData(image,name,price)
    console.log(s)
    data.push(s);
    localStorage.setItem('CartData',JSON.stringify(data))
    container.innerHTML=null;
    window.location.href='../gaurav/cart.html'
}
function CData(i,n,p){
    this.image=i;
    this.name=n,
    this.price=p;
}