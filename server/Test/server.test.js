const request = require("supertest");
const server = require("../src/server");

const arr = [
  { id: 1, name: "alumno1" },
  { id: 2, name: "alumno2" },
  { id: 3, name: "alumno3" },
];

describe("'server.js'", () => {
  //? DRIVERS
  //* GET '/'
  it("Debe responder con un status 200 cuando se realiza req GET a '/'", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toEqual(200);
  });

  //* GET '/drivers'
  it("Debe responder con un status 200 cuando se realiza req GET a '/drivers'", async () => {
    const res = await request(server).get("/drivers");
    expect(res.statusCode).toEqual(200);
  });

  //* GET '/drivers?name='
  it("Debe responder con un status 200 cuando se realiza req GET a '/drivers?name='", async () => {
    const name = "lewis";
    const res = await request(server).get(`/drivers?name=${name}`);
    expect(res.statusCode).toEqual(200);
  });

  //* GET '/drivers/id'
  it("Debe responder con un status 200 cuando se realiza req GET a '/drivers/:id'", async () => {
    const id = "123";
    const res = await request(server).get(`/drivers/${id}`);
    expect(res.statusCode).toEqual(200);
  });

  //? TEAMS
  //* GET '/teams'
  it("Debe responder con un status 200 cuando se realiza req GET a '/teams'", async () => {
    const res = await request(server).get("/teams");
    expect(res.statusCode).toEqual(200);
  });

  //* GET '/teams?name='
  it("Debe responder con un status 200 cuando se realiza req GET a '/teams?name='", async () => {
    const name = "ferrari";
    const res = await request(server).get(`/teams?name=${name}`);
    expect(res.statusCode).toEqual(200);
  });

  //* GET '/teams/id'
  it("Debe responder con un status 200 cuando se realiza req GET a '/teams/:id'", async () => {
    const id = "123";
    const res = await request(server).get(`/teams/${id}`);
    expect(res.statusCode).toEqual(200);
  });

  //? API DRIVERS
  //* GET '/api/drivers'
  it("Debe responder con un status 200 cuando se realiza req GET a '/api/drivers'", async () => {
    const res = await request(server).get("/api/drivers");
    expect(res.statusCode).toEqual(200);
  });

  //* GET '/api/drivers?name='
  it("Debe responder con un status 200 cuando se realiza req GET a '/api/drivers?name='", async () => {
    const name = "ferrari";
    const res = await request(server).get(`/api/drivers?name=${name}`);
    expect(res.statusCode).toEqual(200);
  });

  //? API DRIVERS
  //* GET '/api/teams'
  it("Debe responder con un status 200 cuando se realiza req GET a '/api/teams'", async () => {
    const res = await request(server).get("/api/teams");
    expect(res.statusCode).toEqual(200);
  });

  //* GET '/api/teams?name='
  it("Debe responder con un status 200 cuando se realiza req GET a '/api/teams?name='", async () => {
    const name = "ferrari";
    const res = await request(server).get(`/api/teams?name=${name}`);
    expect(res.statusCode).toEqual(200);
  });
 
});
