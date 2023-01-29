const request = require("supertest");
const app = require("../index");

describe("GET /api/opportunities/events", () => {
  it("Should return an array of event data from the database", async () => {
    const response = await request(app).get("/api/opportunities/events");
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body.data)).toBeTruthy();
  });
});
