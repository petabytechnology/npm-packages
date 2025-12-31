function CORS(options, res) {
  const {
    origin = ["*"],
    methods = "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders = "Content-Type,Authorization",
    exposedHeaders = "",
    credentials = false,
    maxAge = 600,
  } = options;

  return function (req, res, next) {
    try {
      if (origin[0] === "*") {
        res.header("Access-Control-Allow-Origin", origin[0]);
        res.header("Access-Control-Allow-Methods", methods);
        res.header("Access-Control-Allow-Headers", allowedHeaders);
        if (exposedHeaders) {
          res.header("Access-Control-Expose-Headers", exposedHeaders);
        }
        if (credentials) {
          res.header("Access-Control-Allow-Credentials", true);
        }
        if (maxAge) {
          res.header("Access-Control-Max-Age", maxAge.toString());
        }
        // Handle preflight (OPTIONS) request
        if (req.method === "OPTIONS") {
          return res.sendStatus(204); // No Content
        }
        // Continue to next middleware
        next();
      } else {
        let getfrontorigin = req.get("origin");
        if (getfrontorigin === undefined) {
          res.send({
            Status: 0,
            Message: "Origin not found",
          });
        } else {
          origin.map((items, index) => {
            if (origin[index] == getfrontorigin) {
              if (
                !getfrontorigin.includes(Boolean) &&
                !getfrontorigin.includes("$") &&
                !getfrontorigin.includes("{") &&
                !getfrontorigin.includes("}") &&
                !getfrontorigin.includes("?") &&
                !getfrontorigin.includes(">") &&
                !getfrontorigin.includes("<")
              ) {
                res.header("Access-Control-Allow-Origin", items);
                res.header("Access-Control-Allow-Methods", methods);
                res.header("Access-Control-Allow-Headers", allowedHeaders);
                if (exposedHeaders) {
                  res.header("Access-Control-Expose-Headers", exposedHeaders);
                }
                if (credentials) {
                  res.header("Access-Control-Allow-Credentials", true);
                }
                if (maxAge) {
                  res.header("Access-Control-Max-Age", maxAge.toString());
                }
                // Handle preflight (OPTIONS) request
                if (req.method === "OPTIONS") {
                  return res.sendStatus(204); // No Content
                }

                // Continue to next middleware
                next();
              } else {
                res.send({
                  Status: 0,
                  Message: "Query Doesn't Allow",
                });
              }
            } else {
              return {
                Status: 0,
                Message: "Invalid Origin",
              };
            }
          });
        }
      }
    } catch (error) {
      res.send({
        Status: 0,
        Message: "Something went wrong in cors",
      });
    }
  };
}

module.exports = CORS;
