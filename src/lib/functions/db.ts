import r from "rethinkdb"

let connection = null;

r.connect({host: 'localhost', port: 28015}, (err, conn) => {
    if(err) throw err;
    connection = conn;
})

r.db('dev').tableCreate('vehicles').run(connection, (err, res) => {
    if (err) throw err;
    console.log(JSON.stringify(res, null, 2))
})