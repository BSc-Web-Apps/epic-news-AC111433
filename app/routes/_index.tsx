import { type MetaFunction } from '@remix-run/node'
import HeroCallToAction from '#app/components/organisms/Hero/HeroCallToAction.tsx'
import { Button } from '#app/components/ui/button.tsx'
import heroImage from '~/assets/jpg/sample-hero.jpg'

export const meta: MetaFunction = () => [{ title: 'Epic News' }]

export default function Index() {
	return (
		<main>
			<div className="w-full">
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
		</main>
	)
}
