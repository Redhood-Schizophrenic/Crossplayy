import db from "@/db/connector";

// Add new Device
export async function create_device({
	category_id,
	device_name
}) {
	try {

		// Inserting the record
		const result = await db.devices.create({
			data: {
				CategoryId: category_id,
				DeviceName: device_name,
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
