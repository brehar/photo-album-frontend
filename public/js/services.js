'use strict';

app.service('Images', function($http) {
    this.saveImage = newImage => {
        return $http.post('/api/images', newImage);
    };
    
    this.getImages = () => {
        return $http.get('/api/images');
    };
    
    this.getSingleImage = id => {
        return $http.get(`/api/images/${id}`);
    };
});

app.service('Albums', function($http) {
    this.getAlbums = () => {
        return $http.get('/api/albums');
    };
    
    this.saveAlbum = newAlbum => {
        return $http.post('/api/albums', newAlbum);
    };
    
    this.insertImage = (albumId, imageId) => {
        return $http.put(`/api/albums/${albumId}/addImage/${imageId}`);
    };
    
    this.getSingleAlbum = id => {
        return $http.get(`/api/albums/${id}`);
    };
    
    this.removeImage = (albumId, imageId) => {
        return $http.put(`/api/albums/${albumId}/removeImage/${imageId}`);
    };
});