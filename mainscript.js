var products=[
    {
        
        key:1,
        name:"Shirt",
        price:550,
        disc:"Hello how are you ,I am fine and hoping the same for you",
        image:"shirt1.jpg"
    },
    {
        key:2,
        name:"Jeans",
        price:1600,
        disc:"Hello how are you ,I am fine and hoping the same for you",
        image:"pants1.jpg"
    },
    {
        key:3,
        name:"Tie",
        price:450,
        disc:"Hello how are you ,I am fine and hoping the same for you",
        image:"tie1.jpg"
    },
    {
        key:4,
        name:"Belt",
        price:200,
        disc:"Hello how are you ,I am fine and hoping the same for you",
        image:"belt1.jpg"
    },
    {
        key:5,
        name:"Shoes",
        price:1750,
        disc:"Hello how are you ,I am fine and hoping the same for you",
        image:"shoes1.jpg"
    },
    {
        key:6,
        name:"Socks",
        price:10,
        disc:"Hello how are you ,I am fine and hoping the same for you",
        image:"socks1.jpg"
    },
    {
        key:7,
        name:"Watch",
        price:2700,
        disc:"Hello how are you ,I am fine and hoping the same for you",
        image:"watch1.jpg"
    },
    {
        key:8,
        name:"Hat",
        price:1200,
        disc:"Hello how are you ,I am fine and hoping the same for you",
        image:"hat1.jpg"
    }
];

function showProducts(){
    console.log("showProducts");
    elem="";
    products.forEach(function(v,i){
        elem+=`<div class="item wow fadeInUp">`;
        elem+=`<div class="addtocart" id="item${v.key}" onclick="addToCart(this.id);"></div>`;
        elem+=`<div class="image" style="background-image:url('./images/products/${v.image}');"></div>`;
        elem+=`<div class="text">`;
        elem+=`<div class="name textprofile">${v.name}</div>`;
        elem+=`<div class="price textprofile">Rs.${v.price}</div></div></div>`;
        if((i+1)%6==0 && i!=0){
            elem+=`<div class="item ad wow fadeInUp"></div>`;
        }
    });
    document.getElementById("content").innerHTML=elem;
}
showProducts();

var cart=[]
addToCart=(id)=>{
    console.log(id);
    var index=-1;
    cart.forEach(function(v,i){
        if(id==v){
            index=i;
            return;
        }
    });
    if(index==-1){
        document.getElementById(id).style.backgroundImage="url('./images/removefromcart.png')";
        cart.push(id);
        console.log("added");
    }
    else{
        document.getElementById(id).style.backgroundImage="url('./images/addtocart.png')";
        cart.splice(index,1);
        console.log("removed");
    }
    updatecart();
    // showCart();
    console.log(cart);
}

updatecart=()=>{
    var elem=``;
    cart.forEach(function(key){
        var index=products.findIndex(function(v){
            return key=="item"+v.key;
        });
        elem+=`<div class="item wow fadeInUp" style="margin:20px;width:200px;height:200px">`;
        elem+=`<div class="image" style="background-image:url('./images/products/${products[index].image}');"></div>`;
        elem+=`<div class="text" style="bottom:30%;">`;
        elem+=`<div class="name textprofile">${products[index].name}</div>`;
        elem+=`<div class="price textprofile">Rs.${products[index].price}</div></div></div>`;
    });
    document.getElementById("cartbox").innerHTML=elem;
}

document.getElementById("cartbox").style.height="0px";
showCart=()=>{
    console.log("showCart");
    var height=document.getElementById("cartbox").style.height;
    if(height=="0px"){
        document.getElementById("cartbox").style.height="auto";
    }
    else{
        document.getElementById("cartbox").style.height="0px";
    }
}