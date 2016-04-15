var app = angular.module('myApp', ['smart-table'])

app.controller('basicsCtrl', ['$scope', function (scope) {

    scope.rowCollection = [
        {name: 'Yeiniel Alfonso', birthDate: new Date('1985-06-01')},
        {name: 'Lisandra Polo', birthDate: new Date('1989-01-11')},
        { name: 'Daymaris Alfonso', birthDate: new Date('1992-01-07') },
        { name: 'Ismary de Jesus', birthDate: new Date('1965-08-25')},
        { name: 'Juana Palma', birthDate: new Date('1951-10-11')},
        { name: 'Lazaro Humberto', birthDate: new Date('1987-03-15')}
    ];

    scope.itemsByPage = 3;
}]);
