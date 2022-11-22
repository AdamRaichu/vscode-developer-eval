const vscode = require("vscode");

(function () {
  function g(a, c) {
    a.setHours(a.getHours() + parseFloat(c));
    return a;
  }
  function h(a, c) {
    var b = "Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(
      " "
    );
    return c ? b[a.getDay()].substr(0, 3) : b[a.getDay()];
  }
  function k(a, c) {
    var b =
      "January February March April May June July August September October November December".split(
        " "
      );
    return c ? b[a.getMonth()].substr(0, 3) : b[a.getMonth()];
  }
  function e(a, c) {
    if (a) {
      if ("compound" == a) {
        if (!1 === c) return this.format.compound;
        var b = {},
          d;
        for (d in Date.prototype.format.compound)
          b[d] = this.format(Date.prototype.format.compound[d]);
        return b;
      }
      if (Date.prototype.format.compound[a])
        return this.format(Date.prototype.format.compound[a], c);
      if ("constants" == a) {
        if (!1 === c) return this.format.constants;
        b = {};
        for (d in Date.prototype.format.constants)
          b[d] = this.format(Date.prototype.format.constants[d]);
        return b;
      }
      if (Date.prototype.format.constants[a])
        return this.format(Date.prototype.format.constants[a], c);
      if ("pretty" == a) {
        if (!1 === c) return this.format.pretty;
        b = {};
        for (d in Date.prototype.format.pretty)
          b[d] = this.format(Date.prototype.format.pretty[d]);
        return b;
      }
      if (Date.prototype.format.pretty[a])
        return this.format(Date.prototype.format.pretty[a], c);
      var b = a.split(""),
        e = "";
      for (d in b) {
        var f = b[d];
        f &&
          /[a-z]/i.test(f) &&
          !/\\/.test(e + f) &&
          (b[d] = l[f] ? l[f].apply(this) : f);
        e = b[d];
      }
      return b.join("").replace(/\\/g, "");
    }
    return a;
  }
  var l = {
      d: function () {
        var a = this.getDate();
        return 9 < a ? a : "0" + a;
      },
      D: function () {
        return h(this, !0);
      },
      j: function () {
        return this.getDate();
      },
      l: function () {
        return h(this);
      },
      N: function () {
        return this.getDay() + 1;
      },
      S: function () {
        var a = this.getDate();
        return /^1[0-9]$/.test(a)
          ? "th"
          : /1$/.test(a)
          ? "st"
          : /2$/.test(a)
          ? "nd"
          : /3$/.test(a)
          ? "rd"
          : "th";
      },
      w: function () {
        return this.getDay();
      },
      z: function () {
        return Math.round(
          Math.abs(
            (this.getTime() - new Date("1/1/" + this.getFullYear()).getTime()) /
              864e5
          )
        );
      },
      W: function () {
        var a = new Date(this.getFullYear(), 0, 1);
        return Math.ceil(((this - a) / 864e5 + a.getDay() + 1) / 7);
      },
      F: function () {
        return k(this);
      },
      m: function () {
        var a = this.getMonth() + 1;
        return 9 < a ? a : "0" + a;
      },
      M: function () {
        return k(this, !0);
      },
      n: function () {
        return this.getMonth() + 1;
      },
      t: function () {
        return new Date(this.getFullYear(), this.getMonth() + 1, 0).getDate();
      },
      L: function () {
        var a = this.getFullYear();
        return (0 == a % 4 && 0 != a % 100) || 0 == a % 400;
      },
      o: function () {
        return parseInt(this.getFullYear());
      },
      Y: function () {
        return parseInt(this.getFullYear());
      },
      y: function () {
        return parseInt((this.getFullYear() + "").substr(-2));
      },
      a: function () {
        return 12 <= this.getHours() ? "pm" : "am";
      },
      A: function () {
        return 12 <= this.getHours() ? "PM" : "AM";
      },
      B: function () {
        return (
          "@" +
          (
            "00" +
            Math.floor(
              (60 * (((this.getHours() + 1) % 24) * 60 + this.getMinutes()) +
                this.getSeconds() +
                0.001 * this.getMilliseconds()) /
                86.4
            )
          ).slice(-3)
        );
      },
      g: function () {
        var a = this.getHours();
        return 0 == a ? 12 : 12 >= a ? a : a - 12;
      },
      G: function () {
        return this.getHours();
      },
      h: function () {
        var a = this.getHours(),
          a = 12 >= a ? a : a - 12;
        return 0 == a ? 12 : 9 < a ? a : "0" + a;
      },
      H: function () {
        var a = this.getHours();
        return 9 < a ? a : "0" + a;
      },
      i: function () {
        var a = this.getMinutes();
        return 9 < a ? a : "0" + a;
      },
      s: function () {
        var a = this.getSeconds();
        return 9 < a ? a : "0" + a;
      },
      u: function () {
        return this.getMilliseconds();
      },
      e: function () {
        var a = this.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/);
        return 1 < a.length ? a[1] : "";
      },
      I: function () {
        var a = new Date(this.getFullYear(), 0, 1),
          c = new Date(this.getFullYear(), 6, 1),
          a = Math.max(a.getTimezoneOffset(), c.getTimezoneOffset());
        return this.getTimezoneOffset() < a ? 1 : 0;
      },
      O: function () {
        var a = this.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/);
        return 2 < a.length ? a[2] : "";
      },
      P: function () {
        var a = this.toString().match(/ ([A-Z]{3,4})([-|+]?\d{4})/);
        return 2 < a.length ? a[2].substr(0, 3) + ":" + a[2].substr(3, 2) : "";
      },
      T: function () {
        return this.toLocaleString("en", { timeZoneName: "short" })
          .split(" ")
          .pop();
      },
      Z: function () {
        return 60 * this.getTimezoneOffset();
      },
      c: function () {
        return g(
          new Date(this),
          -(this.getTimezoneOffset() / 60)
        ).toISOString();
      },
      r: function () {
        return g(
          new Date(this),
          -(this.getTimezoneOffset() / 60)
        ).toISOString();
      },
      U: function () {
        return (this.getTime() / 1e3) | 0;
      },
    },
    m = {
      commonLogFormat: "d/M/Y:G:i:s",
      exif: "Y:m:d G:i:s",
      isoYearWeek: "Y\\WW",
      isoYearWeek2: "Y-\\WW",
      isoYearWeekDay: "Y\\WWj",
      isoYearWeekDay2: "Y-\\WW-j",
      mySQL: "Y-m-d h:i:s",
      postgreSQL: "Y.z",
      postgreSQL2: "Yz",
      soap: "Y-m-d\\TH:i:s.u",
      soap2: "Y-m-d\\TH:i:s.uP",
      unixTimestamp: "@U",
      xmlrpc: "Ymd\\TG:i:s",
      xmlrpcCompact: "Ymd\\tGis",
      wddx: "Y-n-j\\TG:i:s",
    },
    n = {
      AMERICAN: "F j, Y",
      AMERICANSHORT: "m/d/Y",
      AMERICANSHORTWTIME: "m/d/Y h:i:sA",
      ATOM: "Y-m-d\\TH:i:sP",
      COOKIE: "l, d-M-Y H:i:s T",
      EUROPEAN: "j F Y",
      EUROPEANSHORT: "d.m.Y",
      EUROPEANSHORTWTIME: "d.m.Y H:i:s",
      ISO8601: "Y-m-d\\TH:i:sO",
      LEGAL: "j F Y",
      RFC822: "D, d M y H:i:s O",
      RFC850: "l, d-M-y H:i:s T",
      RFC1036: "D, d M y H:i:s O",
      RFC1123: "D, d M Y H:i:s O",
      RFC2822: "D, d M Y H:i:s O",
      RFC3339: "Y-m-d\\TH:i:sP",
      RSS: "D, d M Y H:i:s O",
      W3C: "Y-m-d\\TH:i:sP",
    },
    p = {
      "pretty-a": "g:i.sA l jS \\o\\f F, Y",
      "pretty-b": "g:iA l jS \\o\\f F, Y",
      "pretty-c": "n/d/Y g:iA",
      "pretty-d": "n/d/Y",
      "pretty-e": "F jS - g:ia",
      "pretty-f": "g:iA",
      "pretty-g": "F jS, Y",
      "pretty-h": "F jS, Y g:mA",
    };
  Object.defineProperty
    ? Object.defineProperty(e, "compound", { value: m })
    : (e.compound = m);
  Object.defineProperty
    ? Object.defineProperty(e, "constants", { value: n })
    : (e.constants = n);
  Object.defineProperty
    ? Object.defineProperty(e, "pretty", { value: p })
    : (e.pretty = p);
  Object.defineProperty && !Date.prototype.hasOwnProperty("format")
    ? Object.defineProperty(Date.prototype, "format", { value: e })
    : (Date.prototype.format = e);
})();

var o = vscode.window.createOutputChannel("Developer Tools");
var f = "Y-m-d H:i:s";
vscode.window.showInformationMessage("Output channel created");
o.appendLine(`${new Date().format(f)} Log created`);

var _ConsoleLog = console.log;
var _ConsoleInfo = console.info;
var _ConsoleWarn = console.warn;
var _ConsoleError = console.error;
var _ConsoleGroup = console.group;
var _ConsoleDebug = console.debug;
console.log = function () {
  var args = [];
  // Note: arguments is part of the prototype
  for (var i = 0; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  o.appendLine(args.join(" "));
  _ConsoleLog.apply(console, args);
};

vscode.commands.registerCommand("AdamRaichu.devtools.evalInput", function () {
  vscode.window
    .showInputBox({
      title: "Code to eval",
      prompt: "USE WITH CAUTION",
      placeHolder: 'console.log("Hello world")',
    })
    .then(function (code) {
      console.log("Evaluating code...");
      console.log(code);
      try {
        eval(code);
      } catch (error) {
        console.error(error);
        vscode.window.showErrorMessage(error.toString());
      }
    });
});
