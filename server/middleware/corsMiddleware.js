import cors from "cors";

const corsOptions = {
  origin: "http://localhost:3000",
  methods: ['GET', 'POST'],
  credentials: true // if using cookies or auth
};

const corsMiddleware = cors(corsOptions);

export default corsMiddleware;
