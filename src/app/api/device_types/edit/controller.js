import { update_device_category_details } from "@/db/crud/devices_type/update";

export const edit_device_type = async (data) => {

	try {

		const category_id = await data['category_id'] || null;
		const category_name = await data['category_name'] || null;

		if (category_id === null || category_name === null) {

			return {
				returncode: 400,
				message: "Input Values Missing",
				output: []
			};
		}

		const result = await update_device_category_details({
			category_id,
			category_name
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
