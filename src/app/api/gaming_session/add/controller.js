import { read_device_info } from "@/db/crud/devices/read";
import { create_gaming_session } from "@/db/crud/gaming_sessions/create";
import { update_device_status } from "@/db/crud/devices/update";

export const add_gaming_session = async (data) => {

	try {

		const customer_name = await data['customer_name'] || null;
		const customer_contact = await data['customer_contact'] || null;
		const device_name = await data['device_name'] || null;
		const date = await data['date'] || null;
		const hours = await data['hours'] || 0;
		const minutes = hours * 60;
		const in_time = await data['in_time'] || null;
		const out_time = await data['out_time'] || null;
		const discount = await data['discount'] || "None";
		const no_of_players = await data['no_of_players'] || null;
		const snacks = await data['snacks'] || 0;
		const water_bottles = await data['water_bottles'] || 0;
		let session_price;
		let player_type;

		if (customer_name === null || customer_contact === null || device_name === null || date === null || hours === null || in_time === null || out_time === null || no_of_players === null) {

			return {
				returncode: 400,
				message: "Input Values Missing",
				output: []
			};
		}

		// Supporting Values
		if (no_of_players >= 2) {
			player_type = "Multiplayer";
		} else {
			player_type = "Single";
		}

		const device_info = await read_device_info({ device_name });
		const device_id = device_info.output[0].id;
		const device_category = device_info.output[0].Category.CategoryName;

		// For Playstation Devices
		if (device_category === "Playstation") {

			// Happy Hours 
			if (discount === "Happy Hours") {
				if (player_type === "Single") {
					session_price = 75 * hours;
				} else if (player_type === "Multiplayer") {
					session_price = 35 * no_of_players * hours;
				}
			}

			// Normal Rates
			if (discount === "None") {
				if (player_type === "Single") {
					session_price = 150 * hours;
				} else if (player_type === "Multiplayer") {
					session_price = 70 * no_of_players * hours;
				}
			}
		}

		// For PC-Gaming Devices
		if (device_category === "PC-Gaming") {

			if (minutes <= 150) {
				session_price = minutes;
			} else {
				if (hours == 24) {
					session_price = 500
				}
				else {
					session_price = 50 * hours;
				}
			}
		}

		const result = await create_gaming_session({
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
			total_price: 0,
			status: "Open"
		});

		await update_device_status({ device_id, status: "Booked" })

		return result;

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
