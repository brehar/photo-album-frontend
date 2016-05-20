'use strict';

var app = angular.module('photoApp');

app.controller('homeCtrl', function() {
    $('.button-collapse').sideNav();
});

app.controller('imageCtrl', function($scope, Images) {
    Images.getImages().then(res => {
        $scope.images = res.data;
    });

    $scope.addImage = function() {
        $scope.imageToSubmit = true;
    };

    $scope.cancelSubmit = function() {
        $scope.imageToSubmit = false;
    };
    
    $scope.saveImage = function() {
        Images.saveImage($scope.newImage).then(res => {
            $scope.images.push(res.data);
            $scope.newImage = {};
            $scope.imageToSubmit = false;
        });
    };
});

app.controller('imagedetailsCtrl', function($scope, $state, Images, Albums) {
    Images.getSingleImage($state.params.id).then(res => {
        $scope.image = res.data;
    });
    
    Albums.getAlbums().then(res => {
        $scope.albums = res.data;
    });
    
    $scope.addToAlbum = function() {
        Albums.insertImage($scope.albumToInsert, $scope.image._id).then(res => {
            $scope.success = true;
        });
    };
});

app.controller('albumCtrl', function($scope, Albums) {
    Albums.getAlbums().then(res => {
        $scope.albums = res.data;
    });

    $scope.createAlbum = function() {
        $scope.albumToCreate = true;
    };

    $scope.cancelSubmit = function() {
        $scope.albumToCreate = false;
    };

    $scope.saveAlbum = function() {
        Albums.saveAlbum($scope.newAlbum).then(res => {
            $scope.albums.push(res.data);
            $scope.newAlbum = {};
            $scope.albumToCreate = false;
        });
    };
});

app.controller('albumdetailsCtrl', function($scope, $state, Albums) {
    Albums.getSingleAlbum($state.params.id).then(res => {
        $scope.images = res.data.images;
    });

    $scope.removeImage = function(imageId, image) {
        var index = $scope.images.indexOf(image);

        Albums.removeImage($state.params.id, imageId).then(res => {
            $scope.images.splice(index, 1);
        });
    };
});