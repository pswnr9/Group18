function Cntrl ($scope,$location) {
        $scope.changeView = function(mail){
        var earl = 'views/page3.html';
            $location.path(earl);
        }
}