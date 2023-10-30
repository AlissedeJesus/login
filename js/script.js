// Função para abrir o modal
function openModal() {
    modal.style.display = 'block';
}

// Função para fechar o modal
function closeModalFunction() {
    modal.style.display = 'none';
}

// Evento de envio do formulário
cpfForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const cpfInput = document.getElementById('cpf');
    const cpfValue = cpfInput.value;})
