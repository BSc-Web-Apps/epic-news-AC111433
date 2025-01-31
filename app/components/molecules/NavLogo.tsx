import logo from '~/assets/svg/news.svg'

export default function NavLogo() {
	return (
		<div>
			<img src={logo} alt="Epic News Logo" className="w-16" />
			<span className="text-sm text-foreground">Welcome to Epic News</span>
		</div>
	)
}
