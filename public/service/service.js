angular.module('eApp')
    .service('mainService', function($http, $routeParams){

        var baseUrl = 'http://localhost:9000';
        // PRODUCT BY ID
        this.getJackets = function(){
            return $http.get('jackets/' + $routeParams.jacketId + '.json');
        }

        // GET ALL PRODUCTS LIST
        this.getJacketList = function(){
            return $http.get('jackets/jacketList.json');
        }

        this.saveEmail = function(email){
            console.log(email)
            return $http.post(baseUrl + '/email');
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
                    console.log(arr[i].quantity, arr[i].total, "in if")
                    return;
                }
            }
            product.quantity = 1;
            arr.push(product);
            arr[i].total = arr[i].quantity * arr[i].id.price;
            this.cartArray = arr;
            console.log(product)
        }

        //REMOVE FROM CART FUNCTION
        this.remove = function(product){
            for(var i = 0; i < arr.length; i++){
                if(arr[i].id === product.id){
                    arr[i].quantity--;
                    arr[i].total = arr[i].quantity * arr[i].id.price;
                    this.cartArray;
                    if(arr[i].quantity === 0){
                        arr.splice(i, 1);
                        arr[i].total = arr[i].quantity * arr[i].price;
                        this.cartArray;
                    }
                }

            }
        }


    })
