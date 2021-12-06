const config = {
	'dev': {
		apiUrl: 'http://localhost:3000'
	},
	'production': {
		apiUrl: 'https://prabhat.website'
	}
}

export const ENVIRONMENT = 'production';
export const API_URL = config[ENVIRONMENT].API_URL;