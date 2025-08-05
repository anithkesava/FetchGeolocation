function getgeolocation() {
    navigator.geolocation.getCurrentPosition((position) => {
        document.getElementById('latitude').value = position.coords.latitude;
        document.getElementById('longitude').value = position.coords.longitude;
    })
}