export default class PhoneViewer {
  constructor(element,props) {
   this.element = element; 
   this.props = props;
   this.render();
   this.element.addEventListener('click', (event)=>{
      const link = event.target.closest('[data-element = "returnBack"]');
      if(!link){
        return ;
      }
      this.props.returnBackToMainPage();
   });
}
  render() {
   const {phone} = this.props;
   this.element.innerHTML = `
        <div>
        <img class="phone" src="${phone.images[0]}">
    
        <button
        data-element = "returnBack"
        >Back
        </button>
        <button>Add to basket</button>
    
    
        <h1>${phone.name}</h1>
    
        <p>${ phone.description }</p>
        <ul class="phone-thumbs">
          ${phone.images.map(item=> `
         <li>
         <img src="${item}">
        </li>
        `).join('')}
        </ul>

      </div>
`;
  }

}