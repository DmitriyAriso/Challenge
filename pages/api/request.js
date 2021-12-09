export const request = async (url) => {
	const BASE_URL = `${process.env.BASE_URL}/${url}`
	const options = {
		headers: {
			'x-hasura-admin-secret': process.env.HASURA_SECRET,
		},
	}

	return fetch(BASE_URL, options).then((res) => res.json())
}
