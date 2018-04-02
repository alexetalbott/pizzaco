//business logic
function Pizza (crust, size, toppings) {
  this.pizzaCrust = crust;
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
}


//user interface logic
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

      var crust = $("input#radio[name=crust]:checked").val();
      var size = $("input#radio[name=size]").val();
      var toppings = [];
      //push toppings into array? for each method?



  });
});
