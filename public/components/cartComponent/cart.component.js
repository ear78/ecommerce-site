angular.module('cart')
    .component('cart', {
        templateUrl: './components/cartComponent/cart.component.html',
        controller: function cartCtrl($http, mainService ){
            var self = this;
            self.quantity = 0;//initialze quantity

            self.cart = mainService.cartArray;// products from the cart array service

            //get totals for cart subtotal, tax, finalTotal
            var getCartTotal = function(){
                if(!self.cart){
                    self.subTotal = {total: 0};
                    self.tax = 0;// initialize tax amount at 0
                    self.finalTotal = 0;//initialize finalTotal
                }
                else {
                    self.subTotal = self.cart.reduce(function(p,c){
                        return {total: p.total + c.total}
                    })
                    self.tax = self.subTotal.total * .0925;
                    self.finalTotal = self.subTotal.total + self.tax;
                }

            }
            getCartTotal();

            //GETTING JACKET LIST FROM JSON FILE AND SERVICE
            $http.get('jackets/jacketList.json').then(function(response){
                self.jacketList = response.data;
            })

        }
    })
