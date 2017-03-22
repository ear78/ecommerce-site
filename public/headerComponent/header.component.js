angular.module('eApp')
    .component('headerComponent', {
        templateUrl: "./headerComponent/header.component.html",
        controller: function HeaderCtrl(){
            this.toggle = true;
            this.openMenu = function(){
                this.toggle = !this.toggle;
            }
        }
    })
