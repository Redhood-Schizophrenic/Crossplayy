import { fetch_devices } from "./controller";

export async function GET() {
	try {
		const result = await fetch_devices();

		return Response.json({
			returncode: result.returncode,
			message: result.message,
			output: result.output,
		}, {
			status: result.returncode
		});

	} catch (error) {
		return Response.json({
			returncode: 500,
			message: `Error fetching Devices: ${error.message}`,
			output: []
		}, {
			status: 500
		});
	}
}
