import { type_log, type_warn, type_error } from "./constant.js";
// import * as constant from "./constant.js";

function logger_2(log, type = type_log) {
  console[type](log);
}

export default logger_2;
