// USER CLASS
class User {
  constructor(userName, password, userStatus) {
    this.userName = userName
    this.password = password
    this.userStatus = userStatus
  }
  set userName(userName) {
    this._userName = userName;
  }

  set password(password) {
    this._password = password;
  }

  set userStatus(userStatus) {
    this._userStatus = userStatus
  }

  get userName() {
    return this._userName;
  }
  get password() {}
  get userStatus() {
    return this._userStatus;
  }
}

//Helper Functions
let userArr = new Array();
//Default Admin
var admin = new User("Admin", '1234', 'Admin')
userArr.push(admin)

function addNewUser(name, password) {
  // TODO: Validate Inputs
  var defaultStatus = "User";
  var newUser = new User(name, password, defaultStatus)
  userArr.push(newUser)
}

function changeUserStatus(user) {
  for (var i = 0; i < userArr.length; i++) {
    if (userArr[i]._userName == user) {
      userArr[i]._userStatus = 'Admin'
    }
  }
}

// PRODUCT CLASS
class Product {
  constructor(productName, price, quantity) {
    this.productName = productName;
    this.price = price;
    this.quantity = quantity;
  }
  set productName(productName) {
    this._productName = productName;
  }

  set price(price) {
    this._price = price
  }

  set quantity(quantity) {
    this._quantity = quantity
  }

  get productName() {
    return this._productName
  }

  get price() {
    return this._price
  }

  get quantity() {
    return this._quantity
  }
}

// Data Manipulations
let productArr = new Array;

// Helper functions
function addNewProduct(productName, price, quantity) {
  // TODO: Validate Inputs
  var newProduct = new Product(productName, price, quantity)
  productArr.push(newProduct)
}

// edit product
function editProduct(productName, newProductDetails) {
  for (var i = 0; i < productArr.length; i++) {
    if (productArr[i]._productName == productName) {
      productArr[i]._productName = newProductDetails._productName
      productArr[i]._price = newProductDetails._price
      productArr[i]._quantity = newProductDetails._quantity
    }
  }
}

// delete product
function deleteProduct(productName) {
  for (var i = 0; i < productArr.length; i++) {
    if (productArr[i]._productName == productName) {
      productArr.splice(i, 1)
    }
  }
}

//add dummy data
function fillProductsList() {
  for (var i = 10; i < 20; i++) {
    var itemName = 'Item ' + i;
    var price = 20 * i;
    var quantity = 40 + i;
    addNewProduct(itemName, price, quantity)
  }
}

// fill dummy data
fillProductsList()
console.log(productArr);

// DOM Variables
var searchInput = document.getElementById("searchInput");
var modal = document.getElementById("main_modal");
var item_modal = document.getElementById("sales_modal");
var users_modal = document.getElementById("users_modal");
var view_user_button = document.getElementById("view_add_user");
var view_items = document.getElementById("view_items_modal");
var add_user_modal = document.getElementById("add_user");
var close = document.getElementsByClassName("exit");
var menuButton = document.getElementById('openMenuBtn');
var searchButton = document.getElementById("searchButton");

// Default values
var hashCol = "#222";
var backgroundColor = "background: radial-gradient(circle closest - corner at center 125 px, " + hashCol + ",  black 40 %)no - repeat;";
var backgroundColor = "linear-gradient(135deg, #00C4FF, #9D1BB2)"
menuButton.className = "fas fa-angle-double-right";
//DOM Functions

// show and hide the search input
function showSearchInput() {
  if (searchInput.style.visibility == "visible") {
    searchInput.style.visibility = "hidden";
  } else {
    searchInput.style.visibility = "visible";
  }
}

// set close to all close buttons to close respective modals
for (var i = 0; i < close.length; i++) {
  close[i].onclick = function functionName() {
    modal.style.display = "none";
    item_modal.style.display = "none";
    users_modal.style.display = "none";
    add_user_modal.style.display = "none";
    view_items_modal.style.display = "none";
  }
}

function displayItem(itemName) {
  var foundItem;
  for (var i = 0; i < productArr.length; i++) {
    if (productArr[i]._productName.toUpperCase() == itemName.toUpperCase()) {
      foundItem = productArr[i]
    }
  }

  if (foundItem) {
    // TODO: Implement more than on data found
    var table = document.getElementById('my_table');
    var row = table.insertRow(1);
    var nameCell = row.insertCell(0);
    var priceCell = row.insertCell(1);
    var quantityCell = row.insertCell(2);
    nameCell.innerHTML = foundItem._productName;
    priceCell.innerHTML = foundItem._price;
    quantityCell.innerHTML = foundItem._quantity;
    console.log(foundItem)
  } else {
    console.log("Not found");
  }
  // TODO: Search from product list
}

function appendRow() {
  var tbl = document.getElementById('my_table'), // table reference
    row = tbl.insertRow(tbl.rows.length), // append table row
    i;
  // insert table cells to the new row
  for (i = 0; i < tbl.rows[0].cells.length; i++) {
    createCell(row.insertCell(i), i, 'row');
  }
}

//display modal on pressing 'Enter'
searchInput.onsearch = function() {
  // TODO: return search results
  modal.style.display = "block";
  // searchTable();
  var searchItem = searchInput.value;
  console.log(searchItem);
  displayItem(searchItem)
}

//  make each row have a event lister
// function onRowClick(tableId, callback) {
//   var table = document.getElementById(tableId);
//   var rows = table.getElementsByTagName("tr");
//   var i;
//   for (i = 0; i < rows.length; i++) {
//     table.rows[i].onclick = function(row) {
//       return function() {
//         callback(row);
//       };
//     }(table.rows[i]);
//   }
// }
var table = document.getElementById("my_table");
var rows = table.rows;
for (var i = 1; i < rows.length; i++) {
  rows[i].onclick = (function(e) {
    var rowid = (this.cells[0].innerHTML);
    var j = 0;
    var td = e.target;
    while ((td = td.previousElementSibling) != null)
      j++;
    alert(rows[0].cells[j].innerHTML);
  });
}
//return each rows value when clicked
// onRowClick('my_table', function(row) {
//   var value = row.getElementsByTagName('td')[0].innerHTML;
//   console.log(value)
//   document.getElementById("modal_footer_text").innerHTML = value + " added to Checkout";
//   console.log('<value>>', value)
// })

// open sales modal
function salesButton() {
  item_modal.style.display = 'block';
}

//open users modal
function showUsers() {
  users_modal.style.display = 'block'
}

// open new user form and close add users button
function addUserForm() {
  add_user_modal.style.display = "block";
  view_user_button.style.display = "none";
}

//hide new user form and display add user button
function addUser() {
  add_user_modal.style.display = "none";
  view_user_button.style.display = "block";
}

// open view items modal
function showItems() {
  view_items_modal.style.display = "block";
}

//open and close the side nav menu
var open = false
function handleNav() {
  if (open) {
    menuButton.className = "fas fa-angle-double-right";
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = backgroundColor;
    open = !open;
  } else {
    menuButton.className = "fas fa-angle-double-left";
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    open = !open;
  }
}
document.getElementById("searchText").innerHTML = "Click search to search"

//display text while typing
function displayText() {
  x = searchInput.value;
  document.getElementById("searchText").innerHTML = x;
}

// Handle the user login type
// var currentUser = "User";
//
// var switchInput = document.querySelector("input[name=user]");
// switchInput.addEventListener('change', function() {
//   if (this.checked) {
//     if (currentUser == "User") {
//       currentUser = "Admin";
//       console.log(currentUser)
//     }
//   } else {
//     currentUser = "User"
//     console.log(currentUser)
//   }
// });
//
// buttons = document.getElementsByClassName("admin");
// for (var i = 0; i < buttons.length; i++) {
//   if (currentUser != "Admin") {
//     buttons[i].disable = true;
//   }
//   else {
//     buttons[i].disable = false;
//   }
// }
// function run() {
//     var t = document.getElementById('my_table');
//     var rows = t.rows; rows collection - https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement
//     for (var i=0; i<rows.length; i++) {
//         rows[i].onclick = function () {
//             if (this.parentNode.nodeName == 'THEAD') {
//                 return;
//             }
//              var cells = this.cells; cells collection
//              var f1 = document.getElementById('firstname');
//              var f2 = document.getElementById('lastname');
//              var f3 = document.getElementById('age');
//              var f4 = document.getElementById('total');
//              var f5 = document.getElementById('discount');
//              var f6 = document.getElementById('diff');
//              f1.value = cells[0].innerHTML;
//              f2.value = cells[1].innerHTML;
//              f3.value = cells[2].innerHTML;
//              f4.value = cells[3].innerHTML;
//              f5.value = cells[4].innerHTML;
//              f6.value = cells[5].innerHTML;
//             alert('msg');
//         };
//     }
// }
// var table = document.getElementById("my_table");
// if (table != null) {
//     for (var i = 0; i < table.rows.length; i++) {
//         for (var j = 0; j < table.rows[i].cells.length; j++)
//         table.rows[i].cells[j].onclick = function () {
//             tableText(this);
//         };
//     }
// }
//
// function tableText(tableCell) {
//     alert(tableCell.innerHTML);
// }
