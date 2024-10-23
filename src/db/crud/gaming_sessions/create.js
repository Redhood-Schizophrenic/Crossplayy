import db from "@/db/connector";

// Add new Session
export async function create_gaming_session({
	customer_name,
	customer_contact,
	device_id,
	date,
	hours,
	minutes,
	in_time,
	out_time,
	discount,
	water_bottles,
	snacks,
	no_of_players,
	player_type,
	session_price,
	total_price,
	status
}) {
	try {

		// Inserting the record
		const result = await db.gaming_Sessions.create({
			data: {
				CustomerName: customer_name,
				CustomerContact: customer_contact,
				DeviceId: device_id,
				Date: date,
				Hours: hours,
				Minutes: minutes,
				InTime: in_time,
				OutTime: out_time,
				Discount: discount,
				WaterBottles: water_bottles,
				Snacks: snacks,
				NoOfPlayer: no_of_players,
				PlayerType: player_type,
				SessionPrice: session_price,
				TotalPrice: total_price,
				Status: status
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
