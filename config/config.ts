const paths = {
  api: {
    dashboard: "/api/dashboard",
    interact: "/api/interact",
  },
  auth: {
    login: "/auth/login",
    signup: "/auth/signup",
  },
  dashboard: "/dashboard",
};

const configLocal = {
  baseUrl: "http://localhost:3000",
  authServerUrl: process.env.NEXT_PUBLIC_SB_URL_DEV!,
  authServerAnon: process.env.NEXT_PUBLIC_SB_ANON_DEV!,
  authServerServiceKey: process.env.SB_SERVICE_DEV!,
  paths,
};

const configProd = {
  baseUrl: configLocal.baseUrl, //CHANGE THIS
  authServerUrl: process.env.SB_URL_PROD!,
  authServerAnon: process.env.SB_ANON_PROD!,
  authServerServiceKey: process.env.SB_SERVICE_PROD!,
  paths,
};

export default process.env.NODE_ENV === "production" ? configProd : configLocal;
