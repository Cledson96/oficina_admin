
class Env {
	private static instance: Env;

	private constructor() {
	
		if (!process.env.API_URL) {
			console.warn('API_URL is not defined in .env, using default "database"');
		}
		
	}

	public static getInstance(): Env {
		if (!Env.instance) {
			Env.instance = new Env();
		}
		return Env.instance;
	}


	get api(): string {
		return process.env.API_URL || 'database';
	}
}

export default Env.getInstance();
