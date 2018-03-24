
import Express from 'express';
import compression from 'compression';
var app = Express();
import path from "path";
import session from "express-session";
import bodyParser from "body-parser";
import { SESSION_SECRET } from "./utils/secrets";


var ngfilepath = path.join(__dirname, "ngfile");
app.set("port", process.env.PORT || 3000);

app.use(compression({
  filter: (req, res) => {
    if (req.headers['x-no-compression']) {
      return false
    }
    return compression.filter(req, res)
  }
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));

//匹配angular路由
app.get("/*", function (req, res, next) {

  var filter = /([^<>/\\\|:""\*\?]+\.\w+$)/.test(req.url);

  if (filter) {
    next();
  } else {
    res.sendFile(path.join(ngfilepath, 'index.html'));
  }

});

app.use(
  Express.static(ngfilepath, { maxAge: 31557600000 })
);

export default app;