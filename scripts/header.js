// Header geral do site
function loadHeader() {
	const headerHTML = `
<header class="header" id="header">
		<div class="container">
			<img style="max-width: 120px;" src="assets/img/logo-ks.png" alt="logo oficial do site">
				<div class="logo">
					<h1 class="hero-title">Kynos Studio</h1>
				</div>
				<nav class="nav">
					<ul>
						<li><a href="#home" class="active">Home</a></li>
						<li><a href="#projetos">Projetos</a></li>
						<li><a href="#sobre">Sobre</a></li>
						<li><a href="#contato">Contato</a></li>
					</ul>
				</nav>
				<div class="mobile-menu-toggle">
					<span></span>
					<span></span>
					<span></span>
				</div>
		</div>
	</header>
	`;
	document.getElementById('loadingHeader').innerHTML = headerHTML;
}

document.addEventListener('DOMContentLoaded', loadHeader);