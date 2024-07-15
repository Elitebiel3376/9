document.addEventListener('DOMContentLoaded', function() {
    const m3uForm = document.getElementById('m3uForm');

    m3uForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const m3uUrl = document.getElementById('m3u').value.trim();
        if (m3uUrl) {
            // Aqui você processaria o link M3U e poderia redirecionar para a tela principal
            // Exemplo de redirecionamento para tela.html
            window.location.href = 'tela.html';
        }
    });
});