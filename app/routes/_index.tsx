import { type MetaFunction } from '@remix-run/node'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import heroImage from '~/assets/jpg/sample-hero.jpg'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	return (
		<main>
			<div className="w-full">
				<HeroCallToAction
					image={heroImage}
					imageRight={true}
					children={undefined}
				></HeroCallToAction>
			</div>
		</main>
	)
}
