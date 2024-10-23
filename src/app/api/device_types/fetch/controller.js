import { read_device_types } from "@/db/crud/devices_type/read";

export const fetch_device_types = async () => {

	try {

		const result = await read_device_types();
		return result;

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
