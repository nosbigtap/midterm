var app = angular.module('dragulaTest', [angularDragula(angular)]);


app.controller('MainCtrl', function($scope, dragulaService) {
  dragulaService.options($scope, 'first-bag', {
      copy: true
      
    });
});



//add image prompt
function imagePrompt (){
var img = new Image();
    img.src = prompt("Url of a picture:");
    
    img.onerror = function() { alert("Provided URL does not point to a valid picture.") };
    
    
    img.onload = function() {
        document.getElementById("yourImage").src = img.src;
    };
}