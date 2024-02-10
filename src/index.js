import app from "./app/app.js";
import authRoutes from "./routes/auth.routes.js";
import userRouters from "./routes/user.routes.js";
import regionRouter from "./routes/region.routes.js";

const PORT = process.env.PORT ?? 3000;

app.use("/api/auth", authRoutes);
app.use("/api/users", userRouters);
app.use("/api/region", regionRouter);

//not found
app.use((req, res) => {
  res.status(404).send("<h1>404</h1>");
});

app.listen(PORT, () => {
  console.log(`Server running on port  http://localhost:${PORT}`);
});
