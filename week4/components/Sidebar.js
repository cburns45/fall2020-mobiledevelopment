import Component from './Component.js';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  render () {
   
    let responseHTML = '';

    this.props.menu.forEach( (item) => {
      // TODO: Add (concatenate) the value of each item to the variable responseHTML. Each should be wrapped in <li></li>
      this.props.item = item;
       console.log(`<li>${item}</li>`+ responseHTML);
    });

    return responseHTML;
  }
}

export default Sidebar;
