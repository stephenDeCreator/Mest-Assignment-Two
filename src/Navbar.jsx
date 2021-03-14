import NavbarCss from './Navbar.css';

const Navbar = () => {
	return (
		<nav id="navbar">
			<div class="container navbar-inner">
				<div class="logo">
					<a href="#hero"> APPROVAL1 </a>
				</div>

				<ul class="links">
					<li>
						<a href="#about">About us</a>
					</li>
					<li>
						<a href="#inventory">Inventory</a>
					</li>
					<li>
						<a href="#contact">Contact us</a>
					</li>
					<li>
						<a href="#submit" class="btn-apply-dark">
							Apply now
						</a>
					</li>
				</ul>
				<div class="hamburger" onclick="showMenu()">
					<i data-feather="menu"></i>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
