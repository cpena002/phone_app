// var phones = [ {"id":1,"name":"Carlos","home_number":1112,"cell_number":1111,"created_at":"2016-11-21T22:29:15.323Z","updated_at":"2016-11-21T22:29:15.323Z","url":"http://localhost:3000/phones/1.json"},
// {"id":2,"name":"Jessica","home_number":2223,"cell_number":3334,"created_at":"2016-11-21T22:30:26.817Z","updated_at":"2016-11-21T22:30:26.817Z","url":"http://localhost:3000/phones/2.json"},
// {"id":3,"name":"Tim","home_number":4445,"cell_number":5556,"created_at":"2016-11-21T22:30:42.544Z","updated_at":"2016-11-21T22:30:42.544Z","url":"http://localhost:3000/phones/3.json"}
// ];
//
// phones.forEach(function(phone) {
//
// });

$(document).ready(function(){
  $.ajax({
    dataType: 'json',
    url: 'http://localhost:3000/phones.json',
    method: 'GET',
    success: function(dataFromServer) {
      alert(dataFromServer);
      dataFromServer.forEach(function(phone) {
         $("#phunky").append('<li><a href="/phones/' + phone.id + '">' + phone.name + " " + "Home: " + phone.home_number + " " + "Cell: " + phone.cell_number + '</a> </li>');
      }); //end of forEach loop
    }, //end of success
    error: function(jqXHR, textStatus, errorThrown) {
      alert(errorThrown);
    }// end error
  }); // end of ajax

  $("#create_user").on("click", function(){
    // named enter in name filed is stored in this variable
    var inputName = $("#phunky_name").val();

    var humanObject = {
      phone: {
        name: inputName
      }
    }; // end of var humanObject
  $.ajax({
    dataType: 'json',
    url: '/phones',
    method: 'POST',
    data: humanObject,

    success: function(dataFromServer){
      alert("Recieved message: " + JSON.stringify(dataFromServer));
      $("#phunky").append('<li><a href="/phones/' + dataFromServer.id + '">' + dataFromServer.name + '</a> </li>');
    },
    error: function(jqXHR, textStatus, errorThrown){
      alert(errorThrown);
    },
  });// end .ajax
});// end of .on click
}); //document ready
// '<li>' + '<a href="/phones/' + dataFromServer.id + '">' + dataFromServer.name + '</a> </li>');
