import db from "@/db/connector";

// Add new Device
export async function create_device_type({
	category_name
}) {
	try {

		// Inserting the record
		const result = await db.deviceCategory.create({
			data: {
				CategoryName: category_name,
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Inserted",
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
