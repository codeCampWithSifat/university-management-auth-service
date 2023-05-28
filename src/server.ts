import mongoose from "mongoose";
import config from "./config/index";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    app.listen(config.port, () => {
      console.log(`Listening on port ${config.port}`);
    });
    console.log("Database connected Successfully");
  } catch (err) {
    console.log("Database Error", err);
  }
}
main();
