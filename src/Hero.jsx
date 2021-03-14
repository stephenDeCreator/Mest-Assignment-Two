import hero from './img/hero-car.svg';
import heroCSS from './Hero.css';

const Hero = () => {
	return (
		<header id="hero">
			<div class="container hero-inner">
				<div class="heading animated fadeIn">
					<h1>Start driving your credit.</h1>
					<p class="lead py-1">
						No Appointments, no obligation and free to apply. Are you looking
						for a new car?
					</p>
					<a href="#" class="btn-apply-light">
						Get a car now
					</a>
				</div>

				<div class="car animated fadeIn">
					<img src={hero} alt="car" />
				</div>
			</div>
		</header>
	);
};

export default Hero;
