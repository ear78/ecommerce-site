angular.module('eApp')
    .component('emailInput', {
        templateUrl: './components/emailInputComponent/emailInput.template.html',
        controller: function($timeout){
            var self = this;

            //animation trigger
            self.isActive = false;

            //ng-hide trigger for component
            self.isSubmitted = true;

            //reset email input box
            self.emailInfo = '';

            self.emailInput = function(emailInfo) {
                self.emailInfo = '';
                self.isSubmitted = false;
                self.isActive = !self.isActive;
            }

            self.closeModal = function(){
                self.isActive = false;
                $timeout(function () {
                    self.isSubmitted = true;
                }, 1000);


            }
        }
    })
