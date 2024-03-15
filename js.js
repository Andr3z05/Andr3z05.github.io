document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const edad = document.getElementById('edad').value;
    console.log(`Nombre: ${nombre}, Correo: ${correo}, Edad: ${edad}`);

    function x() {
        window.location.href = "Omega.html";
    }
});
