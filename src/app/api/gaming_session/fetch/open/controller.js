import { read_open_session } from "@/db/crud/gaming_sessions/read";

export const fetch_open_session = async () => {

	try {

		const result = await read_open_session();
		return result;

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
