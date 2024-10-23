import { read_session } from "@/db/crud/gaming_sessions/read";
import { update_device_status } from "@/db/crud/devices/update";
import { update_session_close } from "@/db/crud/gaming_sessions/update";

export const close_session = async (data) => {

	try {

		const session_id = await data['session_id'] || null;

		if (session_id === null) {

			return {
				returncode: 400,
				message: "Input Values Missing",
				output: []
			};
		}

		const session_info = await read_session({ session_id });
		const session_price = session_info.output[0]?.SessionPrice;
		const snacks_qty = session_info.output[0]?.Snacks;
		const water_bottles_qty = session_info.output[0]?.WaterBottles;
		const device_id = session_info.output[0]?.DeviceId;

		const total_price = session_price + (snacks_qty * 25) + (water_bottles_qty * 10);

		const result = await update_session_close({
			session_id,
			total_price,
			status: "Close"
		});

		await update_device_status({ device_id, status: "Booked" });

		return result;

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};
	}
}
