function login(event) {
    event.preventDefault(); // Evita que el formulario se envíe
  
    // Obtén los valores del nombre de usuario y la contraseña
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
  
    // Realiza la verificación del inicio de sesión
    if ((username === 'admin@gmail.com' && password === '123456') || (username === 'alumno@gmail.com' && password === 'pass')) {
      alert('Inicio de sesión exitoso');
      window.location.href = 'perfil.html';    } else {
      alert('Nombre de usuario o contraseña incorrectos');
    }
  
    // Limpia los campos de entrada
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
  
    return false;
  }