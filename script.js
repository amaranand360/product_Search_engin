const searchfun = () =>{
const searchbox = document.getElementById("search-item").ariaValueMax.toUpperCase();
const storeitems = document.getElementById("product-list")
const product = document.querySelectorAll(".product")
const pname = storeitems.getElementsByTagName("h3")

for(let i=0;i<pname.length;i++){
    let match = product[i].getElementsByTagName('h3')[0];
    
    if(match) {
        let textvalue = match.textContent || match.innerHTML

        if(textvalue.toUpperCase().indexOf(searchbox) > -1){
            product[i].style.display = " ";

        }
        else{
            product[i].style.display ="none"
        }
    }

}
}