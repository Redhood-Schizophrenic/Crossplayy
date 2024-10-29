import { close_session } from "./controller";

export async function PUT(request) {
	try {

		const data = await request.json();
		const result = await close_session(data);

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
			message: `Error closing session: ${error.message}`,
			output: []
		}, {
			status: 500
		});

	}
}
