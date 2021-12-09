import Link from 'next/link'

const IndexPage = ({ tails }) => {
	return (
		<div>
			Tails:
			<div>
				{tails.map(({ tail, json_id }) => {
					return (
						<Link key={json_id} href={`/${tail}`} passHref>
							<div>{tail}</div>
						</Link>
					)
				})}
			</div>
		</div>
	)
}

export default IndexPage
