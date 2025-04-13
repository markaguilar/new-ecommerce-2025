const Url = process.env.NEXT_PUBLIC_API_URL
  ? `${process.env.NEXT_PUBLIC_API_URL}`
  : `http://localhost:3000`;

export const API = {
  SIGNIN: `${Url}/signin`,
};

export const PRIVATE_ROUTES = ["/cart", "/checkout"];

export const PUBLIC_ROUTES = ["/", "/signin", "/register", "forgot-password"];

export const ROUTES = {
  SIGNIN: "/signin",
  FORGOT_PASSWORD: "/forgot-password",
};
