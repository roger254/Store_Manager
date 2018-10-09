function showItem() {
  if (document.getElementById("searchInput").style.visibility == "visible") {
    document.getElementById("searchInput").style.visibility = "hidden";
  } else {
    document.getElementById("searchInput").style.visibility = "visible";
  }
}

var searchInput = document.getElementById("searchInput");
var modal = document.getElementById("main_modal");
var close = document.getElementsByClassName("exit")[0];

close.onclick = function() {
  modal.style.display = "none";
}

function searchTable() {
  var table = document.getElementById('my_table')
  var searchStock = new Array();
  searchStock[0] = new Array('Item 1', '222', '357');
  searchStock[1] = new Array('Item 2', '346', '456');

  for (var i = 0; i < searchStock.length; i++) {
    var row = table.insertRow(i + 1);
    var nameCell = row.insertCell(0);
    var priceCell = row.insertCell(1);
    var quantityCell = row.insertCell(2);
    nameCell.innerHTML = searchStock[i][0];
    priceCell.innerHTML = searchStock[i][0];
    quantityCell.innerHTML = searchStock[i][0];
  }
}
searchInput.onsearch = function() {
  modal.style.display = "block";
  // searchTable();
}

function onRowClick(tableId, callback) {
  var table = document.getElementById(tableId);
  var rows = table.getElementsByTagName("tr");
  var i;
  for (i = 0; i < rows.length; i++) {
    table.rows[i].onclick = function(row) {
      return function() {
        callback(row);
      };
    }(table.rows[i]);
  }
}

onRowClick('my_table', function(row) {
  var value = row.getElementsByTagName('td')[0].innerHTML;
  console.log(value)
  document.getElementById("modal_footer_text").innerHTML = value + " added to Checkout";
  console.log('<value>>', value)
})
