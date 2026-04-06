// Seleciona os elementos necessários
const toggle = document.getElementById('toggleSwitch');
const statusText = document.getElementById('statusText');

// Ouve a mudança de estado (ligado/desligado)
toggle.addEventListener('change', () => {
    if (toggle.checked) {
        statusText.textContent = "Enabled";
        statusText.classList.add('text-active');
    } else {
        statusText.textContent = "Disabled";
        statusText.classList.remove('text-active');
    }
}); 