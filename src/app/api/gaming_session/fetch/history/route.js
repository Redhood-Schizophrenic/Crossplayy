import { fetch_sessions } from "./controller";

export async function GET() {
	try {
		const result = await fetch_sessions();

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
			message: `Error fetching Sessions: ${error.message}`,
			output: []
		}, {
			status: 500
		});
	}
}
