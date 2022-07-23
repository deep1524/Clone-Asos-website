var cart=[{img:'https://images.asos-media.com/products/topman-skinny-suit-trousers-in-stone-herringbone/201346329-1-stone?$n_320w$&wid=317&fit=constrain',price:'50',title:'Topman skinny suit trousers in stone herringbone'},{img:'https://images.asos-media.com/products/topman-skinny-suit-trousers-in-stone-herringbone/201346329-1-stone?$n_320w$&wid=317&fit=constrain',price:'50',title:'Topman skinny suit trousers in stone herringbone'}]
localStorage.setItem('pawan',JSON.stringify(cart));
var arr=JSON.parse(localStorage.getItem('pawan'));
func(arr);
function func(data){
    
    if(data.length!==0){
        var mycontainer=document.getElementById('appendhere')
        var count=0;
        data.forEach(function(element,index){
           count+=+element.price;
           let mydiv=document.createElement('div');
           let imgdiv=document.createElement('div');

           let img=document.createElement('img');
           imgdiv.append(img);
        
           img.src=element.img;
           img.style.width='35%'
           let textdiv=document.createElement('div');
           textdiv.setAttribute('class','mytext');
           let p1=document.createElement('h4')
           p1.innerText=`$ ${element.price}`;
           let p2=document.createElement('p');
           p2.innerText=element.title;
           let select=document.createElement('select');
           select.addEventListener('change',myfunc);
           function myfunc(){
           
            if(+select.value!==1){
                document.getElementById('_total').innerHTML=`$ ${count}`
                document.getElementById('mytotal').innerText=`$ ${count}`
               
            }
            else{
                window.location.reload();
            }
            
           }
           select.style.border='none';
           let op1=document.createElement('option');
           op1.innerText='1';
           let op2=document.createElement('option');
           op2.innerText='2';
           let op3=document.createElement('option');
           op3.innerText='3';
           let op4=document.createElement('option');
           op4.innerText='4';
           let op5=document.createElement('option');
           op5.innerText='5';
           select.append(op1,op2,op3,op4,op5);
           let _select=document.createElement('select');
           let _op1=document.createElement('option');
           _op1.innerText='X'
           let _op2=document.createElement('option');
           _op2.innerText='2XS'
           let _op3=document.createElement('option');
           _op3.innerText='S'
           let _op4=document.createElement('option');
           _op4.innerText='M'
           let _op5=document.createElement('option');
           _op5.innerText='L'
           _select.style.border='none';
           _select.style.marginRight='10px'
           _select.style.marginTop='10px'
           _select.append(_op1,_op2,_op3,_op4,_op5);
           textdiv.append(p1,p2,_select,select);
        
           let _remove=document.createElement('i')
           _remove.setAttribute('class','material-icons');
           _remove.innerText='close';
           _remove.style.cursor='Pointer'
           _remove.addEventListener('click',dlT);
           function dlT(){
                data.splice(index,1);
                localStorage.setItem('pawan',JSON.stringify(arr));
                window.location.reload();
           }
           mydiv.append(imgdiv,textdiv,_remove);
           mycontainer.append(mydiv);

        });
        document.getElementById('_total').innerHTML=`$ ${count}`
        document.getElementById('mytotal').innerText=`$ ${count}`
        
        
    }
    
    else{
        document.getElementById('container').innerHTML=null;
        let _div=document.createElement('div');
        let i=document.createElement('i');
        i.setAttribute('class','material-icons');
        i.innerText='work';
        let h2=document.createElement('h2')
        h2.innerText="Your bag is empty"
        let p=document.createElement('p')
        p.innerText=`Items remain in your bag for 60 minutes, and then  theyre moved to your Saved Items.`
        _div.append(i,h2,p);
       document.getElementById('empty').append(_div);

    }
    
}