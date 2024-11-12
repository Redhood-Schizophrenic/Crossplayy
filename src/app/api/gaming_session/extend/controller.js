import { read_session } from "@/db/crud/gaming_sessions/read";
import { update_session_extend } from "@/db/crud/gaming_sessions/update";

export const extend_gaming_session = async (data) => {

	try {

		const session_id = await data['session_id'] || null;
		let minutes = await data['minutes'] || 15;
		let hours = (minutes / 60) | 0;
		const out_time = await data['out_time'] || null;
		let session_price;

		if (session_id === null || out_time === null) {

			return {
				returncode: 400,
				message: "Input Values Missing",
				output: []
			};
		}

		const session_info = await read_session({ session_id });
		const device_category = session_info.output[0]?.Device?.Category?.CategoryName;
		const discount = session_info.output[0]?.Discount;
		const player_type = session_info.output[0]?.PlayerType;
		const no_of_players = session_info.output[0]?.NoOfPlayer;
		const old_session_price = session_info.output[0]?.SessionPrice;
		const old_minutes = session_info.output[0]?.Minutes;
		const old_hours = session_info.output[0]?.Hours;

		// For Playstation Devices
		if (device_category === "Playstation") {

			// Happy Hours 
			if (discount === "Happy Hours") {

				if (player_type === "Single") {

					if (minutes === 15) {
						session_price = old_session_price + 20;
					}

					if (minutes === 30) {
						session_price = old_session_price + 40;
					}

					if (minutes === 60) {
						session_price = old_session_price + 75;
					}

				} else if (player_type === "Multiplayer") {

					if (minutes === 15) {
						session_price = old_session_price + 10 * no_of_players;
					}

					if (minutes === 30) {
						session_price = old_session_price + 20 * no_of_players;
					}

					if (minutes === 60) {
						session_price = old_session_price + 35 * no_of_players;
					}
				}
			}

			// None
			if (discount === "None") {

				if (player_type === "Single") {

					if (minutes === 15) {
						session_price = old_session_price + 40;
					}

					if (minutes === 30) {
						session_price = old_session_price + 75;
					}

					if (minutes === 60) {
						session_price = old_session_price + 150;
					}

				} else if (player_type === "Multiplayer") {

					if (minutes === 15) {
						session_price = old_session_price + 20 * no_of_players;
					}

					if (minutes === 30) {
						session_price = old_session_price + 35 * no_of_players;
					}

					if (minutes === 60) {
						session_price = old_session_price + 75 * no_of_players;
					}
				}
			}

			minutes = minutes + parseInt(old_minutes);
			const hours = parseFloat(minutes / 60);

			const result = await update_session_extend({
				session_id,
				out_time,
				hours,
				minutes,
				session_price,
				status: "Extended"
			});

			return result;
		}

		// For PC-Gaming Devices
		if (device_category === "PC-Gaming") {

			hours = hours + old_hours
			minutes = hours * 60;

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

			const result = await update_session_extend({
				session_id,
				out_time,
				hours,
				minutes,
				session_price,
				status: "Extended"
			});

			return result;

		}


	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
