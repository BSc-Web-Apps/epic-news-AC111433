import { type LinksFunction } from '@remix-run/node'
import Document from '~/components/shared-layout/Document'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'
import FooterMenuRight from './components/organisms/Footer/FooterMenuRight'
import HeaderWithSearch from './components/organisms/HeaderWithSearch'
import HeroCallToAction from './components/organisms/Hero/HeroCallToAction.tsx'
import heroImage from '~/assets/jpg/sample-hero.jpg'
import { Button } from './components/atoms/Button.tsx'
export const links: LinksFunction = () => {
	return rootLinkElements
}
export { headers, meta } from './__root.client.tsx'
export { action, loader } from './__root.server.tsx'

export default function App() {
	const nonce = useNonce()

	return (
		<Document nonce={nonce}>
			<div className="flex h-screen flex-col justify-between">
				<div className="flex-1">
					<HeaderWithSearch />
					<main className="grid h-full place-items-center">
						<h1 className="text-mega">Your Journey Begins!</h1>
					</main>
					<div className="w-full py-16">
						<HeroCallToAction image={heroImage} imageRight={true}>
							<div className="flex flex-col gap-8 px-8">
								<h2 className="text-h2">Welcome to Epic News</h2>
								<p className="text-lg">
									Keep up to date with the latest tech news.
								</p>
								<Button>Sign Up</Button>
							</div>
						</HeroCallToAction>
					</div>
					<FooterMenuRight />
				</div>
			</div>
		</Document>
	)
}
