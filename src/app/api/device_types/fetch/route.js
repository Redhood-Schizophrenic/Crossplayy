import { fetch_device_types } from "./controller";

export async function GET() {
	try {
		const result = await fetch_device_types();

		return Response.json({
			returncode: result.returncode,
			message: result.message,
			output: result.output,
		});

	} catch (error) {
		return Response.json({
			returncode: 500,
			message: `Error fetching Device Type: ${error.message}`,
			output: []
		}, {
			status: 500
		});
	}
}
