const selectForma = document.getElementById('select-forma');
const listaPagamentos = document.getElementById('lista-pagamentos');
const btnConfirmar = document.getElementById('btn-confirmar');

function mostrarToast(mensagem) {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `${mensagem}<div class="toast-bar"></div>`;
  document.body.appendChild(toast);

  
  const barra = toast.querySelector('.toast-bar');
  setTimeout(() => {
    barra.style.width = '100%';
  }, 100);

  
  setTimeout(() => {
    toast.remove();
  }, 3100);
}

btnConfirmar.addEventListener('click', () => {
  const formaSelecionada = selectForma.value;

  
  const existentes = Array.from(listaPagamentos.children).map(p => p.textContent.replace('• ', ''));
  if (existentes.includes(formaSelecionada)) {
    mostrarToast('⚠ Atenção! Método de pagamento já adicionado.');
    return;
  }

  
  const novoPagamento = document.createElement('p');
  novoPagamento.textContent = "• " + formaSelecionada;
  listaPagamentos.appendChild(novoPagamento);
});