angular.module('eApp')
    .component('productReviewsComponent', {
        templateUrl: './productReviewsComponent/productReviews.component.html',
        controller:  function($http, $routeParams, mainService){
            var self = this;

            self.review = {};
            self.review.body = "";

            self.addReview = function(review){
                self.jackets.reviews.push(this.review);
                self.review = {};
            }

            mainService.getJackets().then(function(response){
                self.jackets = response.data[0];
            })
        }
    })
