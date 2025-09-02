// Footer geral do site
function loadFooter() {
	const footerHTML = `
	<footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section">
                    <h3>Kynos Studio</h3>
                    <p>Transformando ideias em universos, uma história de cada vez.</p>
                </div>
                <div class="footer-section">
                    <h4>Projetos</h4>
                    <ul>
                        <li><a href="KynosMusic/">Kynos Music</a></li>
                        <li><a href="KynosStorys/">Kynos Storys</a></li>
                        <li><a href="FutureProjects/">Future Projects</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <h4>Recursos</h4>
                    <ul>
                        <li><a href="assets/">Assets Compartilhados</a></li>
                        <li><a href="LandingPage/">Site Oficial</a></li>
                        <li><a href="README.md">Documentação</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <p>&copy; 2025 Kynos Studio – Todos os direitos reservados</p>
            </div>
        </div>
    </footer>
	`;
	document.getElementById('loadingFooter').innerHTML = footerHTML;
}

document.addEventListener('DOMContentLoaded', loadFooter);