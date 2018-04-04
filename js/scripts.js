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

      var crust = $("input:radio[name=crust]:checked").val();
      var size = $("input:radio[name=size]:checked").val();
      var toppings = [];

      //push toppings into array
      $("input:checkbox[name=new-pizza-topping]:checked").each(function(){
        toppings.push($(this).val());
      });
      var newPizza = new Pizza(crust, size, toppings);

      $("ul#showOrder").append("<li><span class='order'>Crust:"+newPizza.pizzaCrust+"</span></li>");

  });
});
