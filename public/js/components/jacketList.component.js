eApp.component('jacketList', {
    templateUrl: './views/components/jacketList.html',
    controller: function JacketListController($http){
        var self = this;
        $http.get('jackets/jackets.json').then(function(response){
            console.log(response.data);
            self.jackets = response.data[0];
        })
    }
})
