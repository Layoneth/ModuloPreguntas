'use strict';

angular.module('preguntasApp').controller('MainCtrl',[ '$scope','$http','$location', function ($scope, $http, $location) {
    $scope.NuevaPreg = {};
    $scope.NuevaPreg.duracion = 12;
    $scope.editando = false;
    $scope.guardando = true;

	$http.get('http://olimpiadas.herokuapp.com/api/preguntas/').
		success(function (pregs) {
			$scope.questions = pregs;
		}).error(function() {
	      console.log("No se pudo conectar a nuestro servidor");
	    })

    $scope.CrearPregunta = function () {
		
		$scope.NuevaPreg.event = 1;
		$scope.NuevaPreg.created_by = 1;
		
		console.log($scope.NuevaPreg);

    	
		if ($scope.guardar) {
			$http.post('http://olimpiadas.herokuapp.com/api/preguntas/', $.param($scope.NuevaPreg)).
				success(function(pr){
					$scope.questions.push(pr)
				})
				.error(function (r) {
					console.log('No pude escribir la pregunta.');
					console.log(r);
				})
			$http.post('http://olimpiadas.herokuapp.com/api/questiontrans', $.param($scope.opcionA),$.param($scope.opcionB).
				success(function (answer) {
					console.log(answer);
					$scope.answers.push(answers);
				}).
				error(function (r) {
					console.log(r);
				})
		}else{
			$http.put('http://olimpiadas.herokuapp.com/api/preguntas/' + $scope.NuevaPreg.id + "/", $.param($scope.NuevaPreg)).
			success(function () {
				console.log('Pregunta Editada!!');
				$http.get('http://olimpiadas.herokuapp.com/api/preguntas/' + $scope.NuevaPreg.id + "/")
			}).
			error(function (resp) {
				console.log('No pude editar.');
				console.log(resp);
			})
		}
		};
	$scope.DeleteQuestion = function (preg, key) {
		$http.delete('http://olimpiadas.herokuapp.com/api/preguntas/'+ preg.id+"/" ).
			success(function () {
				console.log(key);
				console.log($scope.questions);
				$scope.questions.splice(key, 1);
			}).
			error(function () {
				console.log('No se pudo eliminar la pregunta!!')
			})
	}
	$scope.EditQuestion = function (preg) {
		angular.copy(preg, $scope.NuevaPreg)
		console.log($scope.NuevaPreg);
		$scope.guardar = false;
		$location.hash('frmPreguntas');

		};
	}


	])