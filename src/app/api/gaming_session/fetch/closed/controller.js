import { read_session_by_status } from "@/db/crud/gaming_sessions/read";

export const fetch_closed_session = async () => {

	try {

		const result = await read_session_by_status({ status: "Close" });
		return result;

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
