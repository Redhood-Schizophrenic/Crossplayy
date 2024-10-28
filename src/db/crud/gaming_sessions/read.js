import db from "@/db/connector";

// Get all sessions
export async function read_sessions() {
	try {

		// Inserting the record
		const result = await db.gaming_Sessions.findMany({
			orderBy: {
				createdAt: "desc"
			},
			include: {
				Device: {
					include: {
						Category: true
					}
				}
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Fetched",
			output: result
		};

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}

// Get session info
export async function read_session({ session_id }) {
	try {

		// Inserting the record
		const result = await db.gaming_Sessions.findMany({
			where: {
				id: session_id
			},
			include: {
				Device: {
					include: {
						Category: true
					}
				}
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Fetched",
			output: result
		};

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}

// Sessions Filter 
export async function read_open_session() {
	try {

		// Inserting the record
		const result = await db.gaming_Sessions.findMany({
			where: {
				Status: {
					in: ["Open", "Extended"]
				}
			},
			orderBy: {
				createdAt: "desc"
			},
			include: {
				Device: {
					include: {
						Category: true
					}
				}
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Fetched",
			output: result
		};

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}

// Sessions Filter 
export async function read_session_by_status({ status }) {
	try {

		// Inserting the record
		const result = await db.gaming_Sessions.findMany({
			where: {
				Status: status
			},
			orderBy: {
				createdAt: "desc"
			},
			include: {
				Device: {
					include: {
						Category: true
					}
				}
			}
		});

		// Database is disconnected
		db.$disconnect();

		return {
			returncode: 200,
			message: "Data Fetched",
			output: result
		};

	} catch (error) {
		return {
			returncode: 500,
			message: error.message,
			output: []
		};

	}
}
