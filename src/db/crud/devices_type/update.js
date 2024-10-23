import db from "@/db/connector";

// Change Category Name
export async function update_device_category_details({
	category_id,
	category_name
}) {
	try {

		// Inserting the record
		const result = await db.deviceCategory.update({
			where: {
				id: category_id
			},
			data: {
				CategoryName: category_name
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Updated",
			output: result
		};

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}
