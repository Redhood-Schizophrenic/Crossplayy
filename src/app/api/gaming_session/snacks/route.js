import { edit_snacks } from "./controller";

export async function PUT(request) {
	try {

		const data = await request.json();
		const result = await edit_snacks(data);

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
			message: `Error calculating snacks: ${error.message}`,
			output: []
		}, {
			status: 500
		});

	}
}
