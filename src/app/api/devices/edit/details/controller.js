import { update_device_details } from "@/db/crud/devices/update";

export const edit_device_details = async (data) => {

	try {

		const device_id = await data['device_id'] || null;
		const device_name = await data['device_name'] || null;

		if (device_id === null || device_name === null) {

			return {
				returncode: 400,
				message: "Input Values Missing",
				output: []
			};
		}

		const result = await update_device_details({
			device_id,
			device_name
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
