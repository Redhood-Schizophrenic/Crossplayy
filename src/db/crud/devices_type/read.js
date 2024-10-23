import db from "@/db/connector";

// Get all devices
export async function read_device_types() {
	try {

		// Inserting the record
		const result = await db.deviceCategory.findMany({
			orderBy: {
				CategoryName: "asc"
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Fetched",
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
