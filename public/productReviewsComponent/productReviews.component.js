angular.module('eApp')
    .component('productReviewsComponent', {
        templateUrl: './productReviewsComponent/productReviews.component.html',
        controller:  function($http, $routeParams){
            var self = this;

            self.review = {};
            self.review.body = "- ";

            self.addReview = function(review){
                self.jackets.reviews.push(this.review);
                self.review = {};
            }

            // JSON DATA COMING IN FROM PRODUCT JSON FILES
            $http.get('jackets/' + $routeParams.jacketId + '.json').then(function(response){
                console.log(response.data);
                self.jackets = response.data[0];
            })
        }
    })
