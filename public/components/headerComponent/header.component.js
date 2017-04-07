angular.module('eApp')
    .component('headerComponent', {
        templateUrl: "./components/headerComponent/header.component.html",
        controller: function HeaderCtrl(){
            //TOGGLE SIDEMENU
            this.toggleMenu = true;
            //TOGGLE CLASS FOR ANIMATION ON SIDEMENU
            this.isActive = false;

            this.openMenu = function(){
                this.toggleMenu = !this.toggleMenu;
                this.isActive = !this.isActive;
            }
        }
    })
