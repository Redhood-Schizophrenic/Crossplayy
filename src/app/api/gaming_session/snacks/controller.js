import { update_snacks } from "@/db/crud/gaming_sessions/update";

export const edit_snacks = async (data) => {

	try {

		const session_id = await data['session_id'] || null;
		const snacks = await data['snacks'] || 0;
		const water_bottles = await data['water_bottles'] || 0;

		if (session_id === null) {

			return {
				returncode: 400,
				message: "Input Values Missing",
				output: []
			};
		}

		const result = await update_snacks({
			session_id,
			water_bottles,
			snacks
		});

		return result;

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
