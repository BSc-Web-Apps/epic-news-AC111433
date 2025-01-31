import { Link, NavLink } from '@remix-run/react'
import logo from '#app/assets/svg/icon-placeholder.svg'
import SocialMediaButtons from '#app/components/molecules/SocialMediaButtons'
import { type FooterProps } from './FooterBasic'

const FooterLogoCentre = ({
	companyName = 'Daily news',
	altText = 'Our company logo',
}: FooterProps) => {
	return (
		<footer className="dark:bg-dark-secondary bg-secondary lg:py-24">
			<div className="container">
				<div className="dark:border-dark-muted-foreground/75 flex flex-col items-center justify-around border-b border-muted-foreground/75 lg:flex-row lg:pb-8">
					<div
						className="dark:text-dark-secondary-foreground flex flex-col items-start gap-6
					py-8 font-bold text-secondary-foreground lg:flex-row"
					>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
					</div>

					<Link to="/" className="flex w-20 items-center justify-center">
						<img src={logo} alt={altText} />
					</Link>

					<div
						className="dark:text-dark-secondary-foreground flex flex-col items-start gap-9
					py-8 font-bold text-secondary-foreground lg:flex-row"
					>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
						<div>
							<NavLink to="#">Nav Label</NavLink>
						</div>
					</div>
				</div>

				<div className="flex items-center justify-center py-8">
					<div className="block">
						<div className="mb-11 flex justify-center">
							<SocialMediaButtons />
						</div>
						<div className="dark:text-dark-secondary-foreground/75 text-center text-secondary-foreground/75">
							{companyName} | {new Date().getFullYear()}
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default FooterLogoCentre
