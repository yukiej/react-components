// TODO
//Create GroceryList component that contains unordered list of 2 grocery store items
// var GroceryList = (item1, item2) => (
//   <ul>
//     <Apple />
//     <Squash />
//   </ul>
// );

var GroceryList = (props) => {
  return (
    <ul>
      <GroceryListItem itemName = {props.names[0]} />
      <GroceryListItem itemName = {props.names[1]} />
      <GroceryListItem itemName = {props.names[2]} />
    </ul>
  )
};

// var Squash = () => (
//   <li>I'm a zucchini</li>
// );

// var Apple = () => (
//   <li>I'm an apple</li>
// );
  
// var GroceryListItem = (props) => (
//   <li>{props.itemName}</li>
// );
  
class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      fontWeight: this.state.done ? 'bold' : 'none'
    };

    return (
      <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.itemName}</li>
    );
  }
}

//Render GroceryList component to the div tag in index.html with an id of app

// var TodoList = (props) => {
//   var onListItemClick = (event) => {
//     console.log('I got clicked');
//   }
//   return (
//   <ul>
//     <li onClick={onListItemClick}>List item 1</li>
//   </ul>
//   )
// };

// ReactDOM.render(<TodoList />, document.getElementById('app'));
ReactDOM.render(<GroceryList names = {['Apple', 'Pear', 'Broccoli']}/>, document.getElementById("app"));


