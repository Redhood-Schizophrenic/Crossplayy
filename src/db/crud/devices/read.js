import db from "@/db/connector";

// Get all devices
export async function read_devices() {
	try {

		// Inserting the record
		const result = await db.devices.findMany({
			where: {
				NOT: {
					Status: "Inactive"
				}
			},
			orderBy: {
				DeviceName: "asc"
			},
			include: {
				Category: true
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


// Get device info
export async function read_device_info({ device_name }) {
	try {

		// Inserting the record
		const result = await db.devices.findMany({
			where: {
				DeviceName: device_name,
				NOT: {
					Status: "Inactive"
				}
			},
			include: {
				Category: true
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
