function toggleDropdown() {
    const dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}

function logout() {
    // Redireciona para a página de logout ou executa a lógica de logout
    window.location.href = "index.html";
}

// Fecha o dropdown se o usuário clicar fora dele
window.onclick = function(event) {
    const dropdown = document.getElementById("dropdown");
    if (!event.target.closest('.profile-icon') && dropdown.style.display === "block") {
        dropdown.style.display = "none";
    }
}
