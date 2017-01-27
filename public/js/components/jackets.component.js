eApp.component('jackets', {
    templateUrl: '../../views/components/jackets.html',
    controller: function JacketsController($http){
        var self = this;
        $http.get('jackets/jacketList.json').then(function(response){
            self.jacketList = response.data;
        })
    }
})
