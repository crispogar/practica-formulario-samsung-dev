/* Aquí marcamos lo que vamos a utilizar, en este caso las constantes que luego servirán para las variables. */

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

/* Expresiones regulares que se aplican a varios campos y así no tenemos que ponerlas cada vez. Password solo aparece una vez porque se aplica a dos campos (password y confirma). */

const expresion = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,}$/, 
	email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
    password: /^.{1,8}$/, 
}

/* Campos que vamos a validar y que deberían ser correctos. */

var inputName = document.getElementById('name');
var inputEmail = document.getElementById('email');
var inputPassword = document.getElementById('password');
var inputConfirma = document.getElementById('confirma');

/* Campos que se van a demostrar como erróneos. */

var malName = document.getElementById('errorName');
var malEmail = document.getElementById('errorEmail');
var malPassword = document.getElementById('errorPassword');
var malConfirma = document.getElementById('errorConfirma');

/* Establecemos los parámetros de las distintas funciones, en este caso para el campo Nombre. Le ponemos console.log para que lo podamos ver en la consola del navegador.
Las alhomdaillas son para que se puedan leer mejor los mensajes que vayamos poniendo en cada condición. */

inputName.oninput = function () {
    validarName();
};

function validarName() {
    console.log('###############################');
    console.log('Entra en validarName');
    if (!inputName.value) {
        inputName.classList.add('input-name');
        malName.style.display = "block";
        malName.innerHTML = 'Rellene este campo';
        console.log('Nombre está vacío');
        return false
    } else if
        (!expresion.name.test(inputName.value)) {
        inputName.setAttribute("valid", false);
        inputName.classList.add('input-name');
        malName.style.display = "block";
        malName.innerHTML = 'No se admiten caracteres numéricos';
        console.log('No se admiten caracteres numéricos');
        return false
    } else {
        malName.style.display = "none";
        malName.innerHTML = '';
        console.log('Nombre correcto');
        return true
    }
};

/* Establecemos los parámetros de la función para el campo Email. */

inputEmail.oninput = function () {
    validarEmail();
};

function validarEmail() {
    console.log('###############################');
    console.log('Entra en validarEmail');
    if (!inputEmail.value) {
        inputEmail.classList.add('input-email');
        malEmail.style.display = "block";
        malEmail.innerHTML = 'Rellene este campo';
        console.log('Email está vacio');
        return false
    } else if
        (!expresion.email.test(inputEmail.value)) {
        inputEmail.setAttribute("valid", false);
        inputEmail.classList.add('input-email');
        malEmail.style.display = "block";
        malEmail.innerHTML = 'Email inv&aacute;lido';
        console.log('Email inválido');
        return false
    } else {
        malEmail.style.display = "none";
        malEmail.innerHTML = '';
        console.log('Email correcto');
        return true
    }
};

/* Establecemos los parámetros de la función para el campo Clave. */

inputPassword.oninput = function () {
    validarPassword();
};

function validarPassword () {
    console.log('###############################');
    console.log('Entra en validarPassword');
    if (!inputPassword.value) {
        inputPassword.classList.add('input-password');
        malPassword.style.display = "block";
        malPassword.innerHTML = 'Rellene este campo';
        console.log('Clave está vacío');
        return false
    } else if
        (!expresion.password.test(inputPassword.value)) {
        inputPassword.setAttribute("valid", false);
        inputPassword.classList.add('input-password');
        malPassword.style.display = "block";
        malPassword.innerHTML = 'No debe tener más de 8 caracteres';
        console.log('No debe tener más de 8 caracteres');
        return false
    } else {
        malPassword.style.display = "none";
        malPassword.innerHTML = '';
        console.log('Clave correcto');
        return true
    }
};

/* Establecemos los parámetros de la función para el campo Confirma su clave. En este caso, para que el color varíe en función de si coincide o no la contreseña usamos customValidity,
porque se aplica al input, que es donde tenemos puesto el cambio de color. Además, no validamos Confirma en el sentido de si cumple con las propiedades de la contraseña o no porque
lo que de verdad nos interesa es ver si es igual que la anterior o no. */

inputConfirma.oninput = function () {
    validarConfirma();
}; 

function validarConfirma() {
    console.log('###############################');
    console.log('Entra en validarConfirma');
    if (!inputConfirma.value) {
        inputConfirma.classList.add('input-confirma');
        malConfirma.style.display = "block";
        malConfirma.innerHTML = 'Rellene este campo';
        console.log('Valide su clave está vacío');
        return false
    } if (inputConfirma.value !== inputPassword.value) {
        inputConfirma.setAttribute("valid", false);
        inputConfirma.classList.add('input-confirma');
        malConfirma.style.display = "block";
        malConfirma.innerHTML = 'Las contraseñas no coinciden';
        inputConfirma.setCustomValidity("Las contraseñas no coinciden");
        console.log('Las contraseñas no coinciden');
        return false
    } else {
        malConfirma.style.display = "none"
        malConfirma.innerHTML = '';
        inputConfirma.setCustomValidity("");
        console.log('ValidarConfirma correcto');
        return true
    }
};

/* Una vez validado lo anterior, se validará por ende el formulario. */

function validarFormulario() {
    console.log('Entra en validarFormulario');
    return validarName() && validarEmail() && validarPassword() && validarConfirma()
}

/* Establecemos lo que ocurre si todos los campos están validados correctamente, que sale el aviso. */

formulario.onsubmit = function (e) {
    e.preventDefault();
    validarFormulario() ? (alert('La inscripción se ha completado correctamente'))
        : (alert('Error en el formulario. Revise los parámetros'))
}
