export default {
  PORT: 5173,
  callbackUrlDomain: "http://127.0.0.1",
  callbackUrl: "/linkedin",
  authUrl: "/auth/linkedin",
  successUrl: "/",
  failureUrl: "/login",
  linkedInScopes: ["r_emailaddress", "r_liteprofile"],
  strategy: "linkedin",
};
