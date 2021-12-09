import fs from 'fs'

const getFile = (filePath) => {
	try {
		const response = fs.readFileSync(filePath)

		return JSON.parse(response)
	} catch (error) {
		return new Error(`Sorry, but file isn't found in the system`)
	}
}

export const fileService = {
	getFile,
}
