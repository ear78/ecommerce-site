angular.module('eApp')
    .component('emailInput', {
        templateUrl: './components/emailInputComponent/emailInput.template.html',
        controller: function(){
            var self = this;

            self.emailInfo = '';

            self.emailInput = function(emailInfo) {
                console.log(emailInfo);
                alert('Thanks for signing up ' + emailInfo);
                self.emailInfo = '';
            }
        }
    })
