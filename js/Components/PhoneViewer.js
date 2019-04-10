import Component from "../Component.js";
export default class PhoneViewer extends Component{
  constructor(element,props) {
   super(element,props);
   this.render();

   this.on('click','BackButton', () => {
     this.props.onBack();
   });

   this.on('click','AddButton', () => {
    this.props.onAdd(this.props.phone.id);
  });
}
  render() {
   const {phone} = this.props;
   this.element.innerHTML = `
        <div>
        <img class="phone" src="${phone.images[0]}">
        <button
        data-element = "BackButton"
        >Back
        </button>
        <button
        data-element = "AddButton">Add to basket</button>
    
    
        <h1>${phone.name}</h1>
        <p>${ phone.description }</p>
        <ul class="phone-thumbs">
          ${phone.images.map(item=> `
         <li>
         <img src="${item}" 
         data-element ="image"
         >
        </li>
        `).join('')}
        </ul>

      </div>
`;
  }
}