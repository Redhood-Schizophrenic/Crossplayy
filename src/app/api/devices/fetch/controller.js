import { read_devices } from "@/db/crud/devices/read";

export const fetch_devices = async () => {

	try {

		const result = await read_devices();
		return result;

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
