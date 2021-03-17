db.createUser(
    {
        user: "ringface-bff",
        pwd: "lskdnf23!",
        roles: [
            {
                role: "readWrite",
                db: "ringfacedb"
            }
        ]
    }
)