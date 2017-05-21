angular.module('cart')
    .component('cart', {
        templateUrl: './components/cartComponent/cart.component.html',
        controller: function cartCtrl($http, $routeParams, mainService ){
            var self = this;
            this.quantity = 0;
            this.subtotal = 0;
            this.tax = 0;
            this.total = 0;


            this.cart = mainService.cartArray;


            //GETTING JACKET LIST FROM JSON FILE AND SERVICE
            $http.get('jackets/jacketList.json').then(function(response){
                this.jacketList = response.data;
            })

        }
    })
