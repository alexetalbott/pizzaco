//business logic
function Pizza (crust, size, toppings, price) {
  this.pizzaCrust = crust;
  this.pizzaSize = size;
  this.pizzaToppings = toppings;
  this.price = price;
}

Pizza.prototype.fullOrder = function() {
  return "Crust: " + this.pizzaCrust + "</br>Size: " + this.pizzaSize + "</br>Toppings: " + this.pizzaToppings;
}

Pizza.prototype.subtotal = function () {
  return this.pizzaToppings.length + 5;
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
      //
      var price = 5 + toppings.length;
      var newPizza = new Pizza(crust, size, toppings, price);

      $(".orderConfirmation").show();
      $("ul#showOrder").append("<li><span class='order'>"+newPizza.fullOrder()+"</span></li>");
      $("ul#showOrder").append("</br><li><span class='order'><strong>Subtotal</strong>: $"+newPizza.subtotal()+"</span></li>");
  });
});
