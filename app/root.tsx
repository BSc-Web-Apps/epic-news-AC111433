import { type LinksFunction } from '@remix-run/node'
import Document from '~/components/shared-layout/Document'
import { useNonce } from '~/utils/nonce-provider.ts'
import rootLinkElements from '~/utils/providers/rootLinkElements'
import HeaderWithSearch from './components/organisms/HeaderWithSearch'
import FooterMenuRight from './components/organisms/Footer/FooterMenuRight'
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
			  <h1 className="text-mega">Welcome to Epic News!</h1>
			</main>
			<FooterMenuRight />
		  </div>
		</div>
	  </Document>
	  
	)
  }
