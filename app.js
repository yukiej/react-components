// TODO
//Create GroceryList component that contains unordered list of 2 grocery store items
// var GroceryList = (item1, item2) => (
//   <ul>
//     <Apple />
//     <Squash />
//   </ul>
// );

var GroceryList = (props) => (
  <ul>
    <GroceryListItem itemName = {props.names[0]} />
    <GroceryListItem itemName = {props.names[1]} />
    <GroceryListItem itemName = {props.names[2]} />
  </ul>
);

var Squash = () => (
  <li>I'm a zucchini</li>
);

var Apple = () => (
  <li>I'm an apple</li>
);
  
var GroceryListItem = (props) => (
  <li>{props.itemName}</li>
);
  

//Render GroceryList component to the div tag in index.html with an id of app


ReactDOM.render(<GroceryList names = {['Apple', 'Pear', 'Broccoli']}/>, document.getElementById("app"));


