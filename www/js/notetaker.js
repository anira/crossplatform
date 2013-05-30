

    //-------------------------------------------------------------------------
    // Camera
    //-------------------------------------------------------------------------

    /**
     * Capture picture
     */
    function getPicture() {

        //navigator.camera.getPicture(onPhotoDataSuccess, onFail, { quality: 50,
        //    destinationType: Camera.DestinationType.FILE_URI, sourceType : Camera.PictureSourceType.CAMERA });

        navigator.camera.getPicture(
            function(data) {
                var img = document.getElementById('camera_image');
                img.style.visibility = "visible";
                img.style.display = "block";
                img.src = "data:image/jpeg;base64," + data;
                //img.src = data;
                document.getElementById('camera_status').innerHTML = "Success";
            },
            function(e) {
                console.log("Error getting picture: " + e);
                document.getElementById('camera_status').innerHTML = "Error getting picture.";
            },
            { quality: 50, destinationType: navigator.camera.DestinationType.DATA_URL, sourceType : navigator.camera.PictureSourceType.CAMERA});
    };

