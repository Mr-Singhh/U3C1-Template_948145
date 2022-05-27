//store the products array in localstorage as "data"
  document.querySelector("#product_form").addEventListener("submit", myFn)
  var array = JSON.parse(localStorage.getItem("data")) || [];
  function myFn()
{
    event.preventDefault();
    //console.log("I am inside the form");
   var brand_name =  product_form.product_brand.value;
   var product_name = product_form.product_name.value;
   var price = product_form.product_price.value;
   var image = product_form.product_image.value;
  // console.log(brand_name, product_name, price, image)
  var details = new myFncf(brand_name, product_name, price, image);
  //console.log(data)
  array.push(details);
  localStorage.setItem("data",JSON.stringify(array))
  console.log(array)
}


   function myFncf(a,b,c,d)
   {   //console.log(a,b,c,d)
      this.brand_name = a;
      this.product_name = b;
      this.price = c;
      this.image = d;
   }

