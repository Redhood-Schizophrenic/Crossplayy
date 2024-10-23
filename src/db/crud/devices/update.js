import db from "@/db/connector";

// Change Device Name
export async function update_device_details({
	device_id,
	device_name
}) {
	try {

		// Inserting the record
		const result = await db.devices.update({
			where: {
				id: device_id
			},
			data: {
				DeviceName: device_name
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

// Status Update
export async function update_device_status({
	device_id,
	status
}) {
	try {

		// Inserting the record
		const result = await db.devices.update({
			where: {
				id: device_id
			},
			data: {
				Status: status
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
