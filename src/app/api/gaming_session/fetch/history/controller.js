import { read_sessions } from "@/db/crud/gaming_sessions/read";

export const fetch_sessions = async () => {

	try {

		const result = await read_sessions();
		return result;

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
