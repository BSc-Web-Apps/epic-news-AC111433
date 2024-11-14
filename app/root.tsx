import { type LinksFunction } from '@remix-run/node'
import Document from '~/components/shared-layout/Document'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'

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
					<main className="grid h-full place-items-center">
						<h1 className="text-mega">Your Journey Begins!</h1>
						<p className="text-base text-gray-600 md:text-lg lg:text-2xl">
							Welcome to Epic News, where the latest development in tech are found</p>
							<button className="bg-black px-8 py-4 font-bold hover:bg to-blue-500">Click me</button>
					</main>
				</div>
			</div>
		</Document>
	)
}
