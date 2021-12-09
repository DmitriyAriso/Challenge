export const request = async (url) => {
    const BASE_URL = `${process.env.NEXT_PUBLIC_HTTPS_URL}/${url}`
    const options = {
        headers: {
            'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_SECRET
        }
    }

    return fetch(BASE_URL, options).then(res => res.json())
}
