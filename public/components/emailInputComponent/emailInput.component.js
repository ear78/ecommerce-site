angular.module('eApp')
    .component('emailInput', {
        templateUrl: './components/emailInputComponent/emailInput.template.html',
        controller: function(){
            var self = this;

            self.isSubmitted = true;
            self.emailInfo = '';

            self.emailInput = function(emailInfo) {
                self.emailInfo = '';
                self.isSubmitted = false;
            }

            self.closeModal = function(){
                self.isSubmitted = true;
            }
        }
    })
