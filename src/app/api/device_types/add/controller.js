import { create_device_type } from "@/db/crud/devices_type/create"

export const add_device_type = async (data) => {

	try {

		const category_name = await data['category_name'] || null;

		if (category_name === null) {

			return {
				returncode: 400,
				message: "Input Values Missing",
				output: []
			};
		}

		const result = await create_device_type({ category_name });
		return result;

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
