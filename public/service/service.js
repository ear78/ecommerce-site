angular.module('eApp')
    .service('mainService', function($http, $routeParams){

        // PRODUCT BY ID
        this.getJackets = function(){
            return $http.get('jackets/' + $routeParams.jacketId + '.json');
        }

        // GET ALL PRODUCTS LIST
        this.getJacketList = function(){
            return $http.get('jackets/jacketList.json');
        }

        this.createEmail = function(email){
            return $http.post('http://localhost:9000/api/email');
        }

        // ADD TO CART FUNCTIONALITY
        var cartArray = [];
        this.addToCartArray = function(product){
            cartArray.push(product);
            console.log(cartArray, 'in cartArray');
        }

    })
