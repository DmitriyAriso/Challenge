import { useMemo } from 'react'
import { useRouter } from 'next/router'
import { fileService } from '../services/file'

export default function Tail({ data = [], tails = [], error }) {
	const {
		query: { tail: tailLabel },
	} = useRouter()

	const currentTail = useMemo(() => tails.find(({ tail }) => tail === tailLabel), [tails, tailLabel])
	const currentData = useMemo(
		() => (Array.isArray(data) ? data.find(({ id }) => id === currentTail?.json_id) : null),
		[data, currentTail]
	)

	if (error) return <div>{error}</div>
	if (!data.length || !tails.length) return <div>Loading data...</div>

	if (!currentData) return <div>Sorry, but url identifier doesn&apos;t match any data in data base</div>

	const { title, description } = currentData

	return (
		<div>
			<h1>Title: {title}</h1>
			<p>Description: {description}</p>
		</div>
	)
}

export async function getServerSideProps() {
	const data = fileService.getFile('./files/data.json')

	if (typeof data.message === 'string') {
		return {
			props: {
				error: data.message,
			},
		}
	}

	if (!data)
		return {
			props: {
				data: null,
				error: '',
			},
		}

	return {
		props: {
			data,
			error: '',
		},
	}
}
