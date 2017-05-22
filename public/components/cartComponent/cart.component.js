angular.module('cart')
    .component('cart', {
        templateUrl: './components/cartComponent/cart.component.html',
        controller: function cartCtrl($http, mainService ){
            var self = this;
            this.quantity = 0;
            this.subtotal = 0;
            this.tax = 0;
            this.total = 0;


            self.cart = mainService.cartArray;

            var getCartTotal = function(){
                console.log(self.cart);
                console.log(this.cartTotal);
                if(!self.cart){
                    this.cartTotal = {total: 0};
                }
                else {
                    this.cartTotal = self.cart.reduce(function(p,c){
                        return {total: p.total + c.total}
                    })
                }
            }
            getCartTotal();

            //GETTING JACKET LIST FROM JSON FILE AND SERVICE
            $http.get('jackets/jacketList.json').then(function(response){
                self.jacketList = response.data;
            })

        }
    })
