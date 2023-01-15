import logo from 'images/function-logo.svg';

const Logo = ({ className }) => {
	return (
		<img src={logo} alt='logo' className={className} width='70' height='70' />
	);
};

export default Logo;
