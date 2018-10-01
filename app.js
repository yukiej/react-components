// TODO
//Create GroceryList component that contains unordered list of 2 grocery store items
var GroceryList = (item1, item2) => (
  <ul>
    <Apple />
    <Squash />
  </ul>
);

var Squash = () => (
  <li>I'm a zucchini</li>
);

var Apple = () => (
  <li>I'm an apple</li>
);
  
var GroceryListItem = (item) => (
  <li>{item}}</li>
)
  

//Render GroceryList component to the div tag in index.html with an id of app

ReactDOM.render(<GroceryList />, document.getElementById("app"));

