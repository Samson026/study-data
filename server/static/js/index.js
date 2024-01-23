const url = "/api/get-data"
var data = []
var body = document.body

async function run() {
    await fetch(url)
        .then((r) => r.json())
        .then((rd => {
            console.log("test for old mate")
            console.log(rd['lines'])
            data = rd['lines']
        })
    );

    console.log("this test")
    for (let i = 0; i < data.length; i++) {
        body.innerHTML = body.innerHTML + "<p>" + data[i] + "</p>"
        console.log(data[i])
    }
}

run()