'use strict',

angular.module('preguntasApp')
  .controller('MainCtrl',[ '$scope','$http', function ($scope, $http) {
    
    $scope.CrearPregunta = function () {
    	var PreguntaEnviada = "pregunta =" + $scope.pregunta + "& categoria =" + $scope.categoria
    	var Respuestas = "Opcion A = " + $scope.opcionA + "Opcion B = " + $scope.opcionB + "Opcion C = " + $scope.opcionC + "Opcion D = " + $scope.opcionD
    		console.log(PreguntaEnviada);
    		console.log(Respuestas);

    	$http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
    	$http.post('http://192.168.1.157:8000' ).
			success(function(){ 
			$http.get('http://192.168.1.157:8000/notas/').
						success(function (preg) {
							console.log("Pregunta creada");
							console.log(preg)

							$scope.pregunta = preg;
							})
				    }).error(function() {
				      console.log("No se pudo conectar a su servidor");
				    });
		};

    	$scope.PreguntaAñadida = 
    		$http.get('http://192.168.1.186:8000').
    		success(function (data){
      		$scope.QuestionSave = data;
      		}).
      		error(function () {
  			console.log('no se pudo conectar a Django')    	
      	});
}])