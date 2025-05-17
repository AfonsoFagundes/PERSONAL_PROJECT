const form = document.getElementById('formulario-contato');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const error = document.getElementById('message-error');
const successMessage = document.getElementById('message-success');
const loading = document.getElementById('loading');

// Função para validar os campos e aplicar feedback visual
function validateField(field) {
  if (field.value.trim() === '') {
    field.classList.add('error');
    field.classList.remove('success');
    return false;
  } else {
    field.classList.add('success');
    field.classList.remove('error');
    return true;
  }
}

// Função de validação do email
function validateEmail(email) {
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return validEmail.test(email.value);
}

// Evento de submit
form.addEventListener('submit', function (e) {
  e.preventDefault();
  error.textContent = '';
  successMessage.textContent = '';  // Limpa a mensagem de sucesso
  loading.style.display = 'block';  // Mostra o loading

  const isNameValid = validateField(name);
  const isEmailValid = validateField(email) && validateEmail(email);
  const isMessageValid = validateField(message);

  if (!isNameValid || !isEmailValid || !isMessageValid) {
    error.textContent = 'Please fill in all fields correctly.';
    loading.style.display = 'none';  // Esconde o loading
    return;
  }

  if (!isEmailValid) {
    error.textContent = 'Please enter a valid email.';
    loading.style.display = 'none';  // Esconde o loading
    return;
  }

  // Simulação de envio do formulário com um delay
  setTimeout(function () {
    form.reset();
    loading.style.display = 'none';  // Esconde o loading
    successMessage.textContent = 'Form submitted successfully!';  // Exibe a mensagem de sucesso

    // Opcionalmente, redireciona após um tempo
    setTimeout(function () {
      window.location.href = "/Portifolio/index.html";  // Redireciona após 2 segundos
    }, 2000); // Espera 2 segundos antes de redirecionar
  }, 1500); // Simula o envio com um atraso de 1,5 segundos
});