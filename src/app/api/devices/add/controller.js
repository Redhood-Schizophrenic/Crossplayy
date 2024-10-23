import { create_device } from "@/db/crud/devices/create";

export const add_device = async (data) => {

	try {

		const category_id = await data['category_id'] || null;
		const device_name = await data['device_name'] || null;

		if (category_id === null || device_name === null) {

			return {
				returncode: 400,
				message: "Input Values Missing",
				output: []
			};
		}

		const result = await create_device({
			category_id,
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
