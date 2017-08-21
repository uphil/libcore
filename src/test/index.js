'use strict';


global.libcore = require("../index.js");


require("./type/signature.js");
require("./type/object.js");
require("./type/array.js");
require("./type/native-object.js");
require("./type/string.js");
require("./type/number.js");
require("./type/scalar.js");
require("./type/date.js");
require("./type/regex.js");
require("./type/type.js");

require("./string/encode64.js");
require("./string/decode64.js");
require("./string/utf2bin.js");
require("./string/bin2utf.js");
require("./string/camelize.js");
require("./string/uncamelize.js");

require("./object/each.js");
require("./object/assign.js");
require("./object/fillin.js");
require("./object/rehash.js");
require("./object/contains.js");
require("./object/clone.js");
require("./object/compare.js");


require("./json/parse-path.js");
require("./json/find.js");
require("./json/compare.js");
require("./json/clone.js");
require("./json/set.js");
require("./json/unset.js");
require("./json/fill.js");
