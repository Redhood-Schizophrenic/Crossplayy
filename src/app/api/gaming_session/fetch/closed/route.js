import { fetch_closed_session } from "./controller";

export async function GET() {
	try {
		const result = await fetch_closed_session();

		return Response.json({
			returncode: result.returncode,
			message: result.message,
			output: result.output,
		});

	} catch (error) {
		return Response.json({
			returncode: 500,
			message: `Error fetching Sessions: ${error.message}`,
			output: []
		}, {
			status: 500
		});
	}
}
