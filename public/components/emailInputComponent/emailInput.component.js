angular.module('eApp')
    .component('emailInput', {
        templateUrl: './components/emailInputComponent/emailInput.template.html',
        controller: function($timeout, mainService, $http){
            var self = this;

            //animation trigger
            self.isActive = false;

            //ng-hide trigger for component
            self.isSubmitted = true;

            //reset email input box
            self.emailInfo = '';

            //SUBMIT AND MODAL OPEN
            self.emailInput = function(emailInfo) {
                self.isSubmitted = false;
                self.isActive = !self.isActive;
                self.email = self.emailInfo;
                mainService.createEmail(emailInfo);
            }



            //CLOSE MODAL WINDOW WITH ANIMATIONS
            self.closeModal = function(){
                self.isActive = false;
                $timeout(function () {
                    self.emailInfo = '';

                }, 100);
                $timeout(function () {
                    self.isSubmitted = true;

                }, 600);

            }
        }
    })
