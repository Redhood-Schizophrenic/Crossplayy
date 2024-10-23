import db from "@/db/connector";

// Increase or Decrease snacks quantities
export async function update_snacks({
	session_id,
	water_bottles,
	snacks
}) {
	try {

		// Inserting the record
		const result = await db.gaming_Sessions.update({
			where: {
				id: session_id
			},
			data: {
				WaterBottles: water_bottles,
				Snacks: snacks
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

// Extend Session
export async function update_session_extend({
	session_id,
	out_time,
	minutes,
	hours,
	session_price,
	status
}) {
	try {

		// Inserting the record
		const result = await db.gaming_Sessions.update({
			where: {
				id: session_id
			},
			data: {
				SessionPrice: session_price,
				Hours: hours,
				Minutes: minutes,
				OutTime: out_time,
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

// Close Session
export async function update_session_close({
	session_id,
	total_price,
	status
}) {
	try {

		// Inserting the record
		const result = await db.gaming_Sessions.update({
			where: {
				id: session_id
			},
			data: {
				TotalPrice: total_price,
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
