import { update_device_status } from "@/db/crud/devices/update";

export const edit_device_status = async (data) => {

	try {

		const device_id = await data['device_id'] || null;
		const status = await data['status'] || null;

		if (device_id === null || status === null) {

			return {
				returncode: 400,
				message: "Input Values Missing",
				output: []
			};
		}

		const result = await update_device_status({
			device_id,
			status
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
