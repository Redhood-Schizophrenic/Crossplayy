import { edit_device_type } from "./controller";

export async function PUT(request) {
	try {
		const data = await request.json();
		const result = await edit_device_type(data);

		return Response.json({
			returncode: result.returncode,
			message: result.message,
			output: result.output,
		});

	} catch (error) {
		return Response.json({
			returncode: 500,
			message: `Error editing Device Type: ${error.message}`,
			output: []
		}, {
			status: 500
		});
	}
}
