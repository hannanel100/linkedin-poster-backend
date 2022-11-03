declare global {
  namespace NodeJS {
    interface ProcessEnv {
      CLIENT_ID: string;
      NODE_ENV: "development" | "production";
      CLIENT_SECRET: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
