const uri = "https://react-component-library-pink.vercel.app";
const localUrl = "http://localhost:3000";
export const url = process.env.NODE_ENV === "production" ? uri : localUrl;
