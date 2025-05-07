import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  console.log("req", req.route);

  let token;
  let authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      return res
        .status(401)
        .json({ message: "No token, authorization denied" });
    }
    try {
      const decode = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decode;
      console.log("The decoded user is:", req.user);
      next();
    } catch (err) {
      res.status(400).json({ message: "Token is not valid" });
    }
  } else {
    return res
      .status(401)
      .json({ message: "Authorization header not found or invalid" });
  }
};
