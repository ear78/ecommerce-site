angular.module('cart')
    .component('cart', {
        templateUrl: 'cartComponent/cart.component.html',
        controller: function cartCtrl($http, $routeParams){
            this.quantity = 0;
            this.subtotal = 0;
            this.tax = 0;
            this.total = 0;

            this.addToCart = function($routeParams.id){
                console.log($routeParams.id);
            }
            //GETTING JACKET LIST FROM JSON FILE AND SERVICE
            $http.get('jackets/jacketList.json').then(function(response){
                this.jacketList = response.data;
            })

        }
    })
