import logo from '#/app/assets/svg/icon-placeholder.svg'

export interface FooterProps {
	companyName?: string
	altText?: string
}

const FooterBasic = ({
	companyName = 'Daily news',
	altText = 'Our company logo',
}: FooterProps) => {
	return (
		<footer className="bg-secondary py-16 dark:bg-slate-50">
			<div className="container flex flex-col items-center justify-between gap-y-8 lg:flex-row">
				<div className="w-16">
					<img src={logo} alt={altText} />
				</div>

				<div className="dark:text-dark-muted-foreground text-xs text-muted-foreground text-opacity-50">
					&copy; {companyName} | {new Date().getFullYear()}
				</div>
			</div>
		</footer>
	)
}

export default FooterBasic
