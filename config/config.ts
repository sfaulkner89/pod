const p = process.env;

const paths = {
  api: {
    dashboard: "/api/dashboard",
  },
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
  },
};

const configLocal = {
  baseUrl: "http://localhost:3000",
  authServerUrl: p.SB_URL_DEV!,
  authServerAnon: p.SB_ANON_DEV!,
  authServerServiceKey: p.SB_SERVICE_DEV!,
  paths,
};

const configProd = {
  baseUrl: "https://next-supabase.vercel.app", //CHANGE THIS
  authServerUrl: p.SB_URL_PROD!,
  authServerAnon: p.SB_ANON_PROD!,
  authServerServiceKey: p.SB_SERVICE_PROD!,
  paths,
};

export default process.env.NODE_ENV === "production" ? configProd : configLocal;
