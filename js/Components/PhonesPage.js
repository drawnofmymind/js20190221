import Filter from "./Filter.js";
import PhonesCatalog from "./PhonesCatalog.js";
import ShoppingCart from "./ShoppingCart.js";

export default class PhonesPage {
    constructor(element) {
     this.element = element; 
     this.render();
     new PhonesCatalog(this.element.querySelector('[data-component="PhonesCatalog"]'))
     new Filter(this.element.querySelector('[data-component="Filter"]'))
     new ShoppingCart(this.element.querySelector('[data-component="ShoppingCart"]'))
  }
    render() {
     this.element.innerHTML = `
     <div class="row">
  
     <!--Sidebar-->
     <div class="col-md-2">
       <section>
        <div data-component = "Filter"></div>
       </section>
  
       <section>
       <div data-component = "ShoppingCart"></div>
       </section>
     </div>
  
     <!--Main content-->
     <div class="col-md-10">
     <div data-component = "PhonesCatalog"></div>
     </div>
  `;
    }
  }