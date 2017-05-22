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

        var arr = [];
        this.addToCartArray = function(product){
            // if product is in array don't push
            for(var i = 0; i < arr.length; i++){
                if(product.id === arr[i].id){
                    arr[i].quantity++;
                    arr[i].total = arr[i].quantity * arr[i].id.price;
                    this.cartArray = arr;
                    return;
                }
            }
            product.quantity = 1;
            arr.push(product);
            arr[i].total = arr[i].quantity * arr[i].id.price;
            this.cartArray = arr;
        }


    })
