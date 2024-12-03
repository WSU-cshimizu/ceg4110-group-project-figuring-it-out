const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
const app = require("express")(); // Minimal Express instance for testing
const authRouter = require("../routes/auth.router");
require("dotenv").config();

// Use middleware to parse JSON
app.use(require("express").json());
app.use("/auth", authRouter);

let mongoServer;

beforeAll(async () => {
  // Start in-memory MongoDB
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  // Connect Mongoose to the in-memory server
  await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
});

afterAll(async () => {
  // Close Mongoose connection and stop in-memory MongoDB
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe("Admin Controller", () => {
  const adminSignup = {
    username: "adminUser",
    password: "adminPass",
    role: "admin",
  };

  const studentSignup = {
    username: "studentUser",
    password: "studentPass",
    role: "student",
  };

  const loginData = {
    username: "adminUser",
    password: "adminPass",
    role: "admin",
  };

  it("POST /auth/signup - Should create a new admin user", async () => {
    const res = await request(app).post("/auth/signUp").send(adminSignup);
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.user).toHaveProperty("username", adminSignup.username);
  });

  it("POST /auth/signup - Should create a new student user", async () => {
    const res = await request(app).post("/auth/signUp").send(studentSignup);
    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.user).toHaveProperty("username", studentSignup.username);
  });

  it("POST /auth/signup - Should not create a duplicate user", async () => {
    const res = await request(app).post("/auth/signUp").send(adminSignup);
    expect(res.status).toBe(409);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("User already exists with this username");
  });

  it("POST /auth/login - Should authenticate admin with correct credentials", async () => {
    const res = await request(app).post("/auth/login").send(loginData);
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body).toHaveProperty("token");
  });

  it("POST /auth/login - Should reject login with invalid credentials", async () => {
    const res = await request(app).post("/auth/login").send({
      username: "adminUser",
      password: "wrongPass",
      role: "admin",
    });
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("Credentials Not Valid");
  });

  it("POST /auth/reset - Should update admin password with correct current password", async () => {
    const res = await request(app).post("/auth/reset").send({
      username: "adminUser",
      password: "adminPass",
      newpassword: "newAdminPass",
      role: "admin",
    });
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.message).toBe("Updated successfully");
  });

  it("POST /auth/reset - Should reject update with incorrect current password", async () => {
    const res = await request(app).post("/auth/reset").send({
      username: "adminUser",
      password: "wrongPass",
      newpassword: "newAdminPass",
      role: "admin",
    });
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(false);
    expect(res.body.message).toBe("Provided password is incorrect");
  });
});
