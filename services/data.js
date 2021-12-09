import fs from 'fs'

const getFile = (filePath) => {
	try {
		const response = fs.readFileSync(filePath)

		return JSON.parse(response)
	} catch (error) {
		throw new Error(`Sorry, but file isn't found in the system`)
	}
}

const getData = () => {
	try {
		return getFile('./files/data.json')
	} catch (error) {
		throw error
	}
}

export const dataService = {
	getData,
}
