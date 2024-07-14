db.createUser({
	user: "root",
	pwd: "root",
	roles: [
		{
			role: "readWrite",
			db: "spellingGameDB",
		},
	],
});

db = new Mongo().getDB("spellingGameDB");

db.createCollection("users", { capped: false });