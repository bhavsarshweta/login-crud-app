globalThis._importMeta_={url:import.meta.url,env:process.env};import 'file://D:/YMS/node_modules/node-fetch-native/dist/polyfill.mjs';
import { Server } from 'http';
import { tmpdir } from 'os';
import { join } from 'path';
import { mkdirSync } from 'fs';
import { parentPort, threadId } from 'worker_threads';
import { provider, isWindows } from 'file://D:/YMS/node_modules/std-env/dist/index.mjs';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener, setCookie, readBody, getCookie, assertMethod, getQuery, createError } from 'file://D:/YMS/node_modules/h3/dist/index.mjs';
import { PrismaClient } from 'file://D:/YMS/node_modules/@prisma/client/index.js';
import bcrypt from 'file://D:/YMS/node_modules/bcrypt/bcrypt.js';
import jwt from 'file://D:/YMS/node_modules/jsonwebtoken/index.js';
import express$2 from 'file://D:/YMS/node_modules/express/index.js';
import { createRenderer } from 'file://D:/YMS/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import devalue from 'file://D:/YMS/node_modules/@nuxt/devalue/dist/devalue.mjs';
import { renderToString } from 'file://D:/YMS/node_modules/vue/server-renderer/index.mjs';
import { parseURL, withQuery, joinURL } from 'file://D:/YMS/node_modules/ufo/dist/index.mjs';
import destr from 'file://D:/YMS/node_modules/destr/dist/index.mjs';
import { snakeCase } from 'file://D:/YMS/node_modules/scule/dist/index.mjs';
import { createFetch as createFetch$1, Headers } from 'file://D:/YMS/node_modules/ofetch/dist/node.mjs';
import { createCall, createFetch } from 'file://D:/YMS/node_modules/unenv/runtime/fetch/index.mjs';
import { createHooks } from 'file://D:/YMS/node_modules/hookable/dist/index.mjs';
import { hash } from 'file://D:/YMS/node_modules/ohash/dist/index.mjs';
import { createStorage } from 'file://D:/YMS/node_modules/unstorage/dist/index.mjs';
import unstorage_47drivers_47fs from 'file://D:/YMS/node_modules/unstorage/drivers/fs.mjs';
import defu from 'file://D:/YMS/node_modules/defu/dist/defu.mjs';
import { toRouteMatcher, createRouter } from 'file://D:/YMS/node_modules/radix3/dist/index.mjs';

const _runtimeConfig = {"app":{"baseURL":"/","buildAssetsDir":"/_nuxt/","cdnURL":""},"nitro":{"routeRules":{"/__nuxt_error":{"cache":false}},"envPrefix":"NUXT_"},"public":{}};
const ENV_PREFIX = "NITRO_";
const ENV_PREFIX_ALT = _runtimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_";
const getEnv = (key) => {
  const envKey = snakeCase(key).toUpperCase();
  return destr(process.env[ENV_PREFIX + envKey] ?? process.env[ENV_PREFIX_ALT + envKey]);
};
function isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function overrideConfig(obj, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey);
    if (isObject(obj[key])) {
      if (isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
      }
      overrideConfig(obj[key], subKey);
    } else {
      obj[key] = envValue ?? obj[key];
    }
  }
}
overrideConfig(_runtimeConfig);
const config$1 = deepFreeze(_runtimeConfig);
const useRuntimeConfig = () => config$1;
function deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
}

const globalTiming = globalThis.__timing__ || {
  start: () => 0,
  end: () => 0,
  metrics: []
};
const timingMiddleware = eventHandler((event) => {
  const start = globalTiming.start();
  const _end = event.res.end;
  event.res.end = function(chunk, encoding, cb) {
    const metrics = [["Generate", globalTiming.end(start)], ...globalTiming.metrics];
    const serverTiming = metrics.map((m) => `-;dur=${m[1]};desc="${encodeURIComponent(m[0])}"`).join(", ");
    if (!event.res.headersSent) {
      event.res.setHeader("Server-Timing", serverTiming);
    }
    _end.call(event.res, chunk, encoding, cb);
    return this;
  }.bind(event.res);
});

const serverAssets = [{"baseName":"server","dir":"D:/YMS/server/assets"}];

const assets = createStorage();

for (const asset of serverAssets) {
  assets.mount(asset.baseName, unstorage_47drivers_47fs({ base: asset.dir }));
}

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets);

storage.mount('root', unstorage_47drivers_47fs({"driver":"fs","base":"D:\\YMS","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('src', unstorage_47drivers_47fs({"driver":"fs","base":"D:\\YMS\\server","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('build', unstorage_47drivers_47fs({"driver":"fs","base":"D:\\YMS\\.nuxt","ignore":["**/node_modules/**","**/.git/**"]}));
storage.mount('cache', unstorage_47drivers_47fs({"driver":"fs","base":"D:\\YMS\\.nuxt\\cache","ignore":["**/node_modules/**","**/.git/**"]}));

function defineRenderHandler(handler) {
  return eventHandler(async (event) => {
    if (event.req.url.endsWith("/favicon.ico")) {
      event.res.setHeader("Content-Type", "image/x-icon");
      event.res.end("data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7");
      return;
    }
    const response = await handler(event);
    if (!response) {
      if (!event.res.writableEnded) {
        event.res.statusCode = event.res.statusCode === 200 ? 500 : event.res.statusCode;
        event.res.end("No response returned from render handler: " + event.req.url);
      }
      return;
    }
    const nitroApp = useNitroApp();
    await nitroApp.hooks.callHook("render:response", response, { event });
    if (!event.res.headersSent && response.headers) {
      for (const header in response.headers) {
        event.res.setHeader(header, response.headers[header]);
      }
      if (response.statusCode) {
        event.res.statusCode = response.statusCode;
      }
      if (response.statusMessage) {
        event.res.statusMessage = response.statusMessage;
      }
    }
    return typeof response.body === "string" ? response.body : JSON.stringify(response.body);
  });
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(createRouter({ routes: config.nitro.routeRules }));
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(event, routeRules.redirect.to, routeRules.redirect.statusCode);
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(path);
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      if (!pending[key]) {
        entry.value = void 0;
        entry.integrity = void 0;
        entry.mtime = void 0;
        entry.expires = void 0;
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      entry.mtime = Date.now();
      entry.integrity = integrity;
      delete pending[key];
      if (validate(entry)) {
        useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return Promise.resolve(entry);
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const entry = await get(key, () => fn(...args));
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length ? hash(args, {}) : "";
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const url = event.req.originalUrl || event.req.url;
      const friendlyName = decodeURI(parseURL(url).pathname).replace(/[^a-zA-Z0-9]/g, "").substring(0, 16);
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [
      opts.integrity,
      handler
    ]
  };
  const _cachedHandler = cachedFunction(async (incomingEvent) => {
    const reqProxy = cloneWithProxy(incomingEvent.req, { headers: {} });
    const resHeaders = {};
    let _resSendBody;
    const resProxy = cloneWithProxy(incomingEvent.res, {
      statusCode: 200,
      getHeader(name) {
        return resHeaders[name];
      },
      setHeader(name, value) {
        resHeaders[name] = value;
        return this;
      },
      getHeaderNames() {
        return Object.keys(resHeaders);
      },
      hasHeader(name) {
        return name in resHeaders;
      },
      removeHeader(name) {
        delete resHeaders[name];
      },
      getHeaders() {
        return resHeaders;
      },
      end(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      write(chunk, arg2, arg3) {
        if (typeof chunk === "string") {
          _resSendBody = chunk;
        }
        if (typeof arg2 === "function") {
          arg2();
        }
        if (typeof arg3 === "function") {
          arg3();
        }
        return this;
      },
      writeHead(statusCode, headers2) {
        this.statusCode = statusCode;
        if (headers2) {
          for (const header in headers2) {
            this.setHeader(header, headers2[header]);
          }
        }
        return this;
      }
    });
    const event = createEvent(reqProxy, resProxy);
    event.context = incomingEvent.context;
    const body = await handler(event) || _resSendBody;
    const headers = event.res.getHeaders();
    headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
    headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
    const cacheControl = [];
    if (opts.swr) {
      if (opts.maxAge) {
        cacheControl.push(`s-maxage=${opts.maxAge}`);
      }
      if (opts.staleMaxAge) {
        cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
      } else {
        cacheControl.push("stale-while-revalidate");
      }
    } else if (opts.maxAge) {
      cacheControl.push(`max-age=${opts.maxAge}`);
    }
    if (cacheControl.length) {
      headers["cache-control"] = cacheControl.join(", ");
    }
    const cacheEntry = {
      code: event.res.statusCode,
      headers,
      body
    };
    return cacheEntry;
  }, _opts);
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.res.headersSent || event.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.res.statusCode = response.code;
    for (const name in response.headers) {
      event.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.req.url?.endsWith(".json") || event.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: statusCode !== 404 ? `<pre>${stack.map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n")}</pre>` : "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('file://D:/YMS/node_modules/@nuxt/ui-templates/dist/templates/error-dev.mjs') ;
    {
      errorObject.description = errorObject.message;
    }
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const _lazy_KdeK1Z = () => Promise.resolve().then(function () { return signout$1; });
const _lazy_yLionr = () => Promise.resolve().then(function () { return data$1; });
const _lazy_2CArsK = () => Promise.resolve().then(function () { return Update_User_put$1; });
const _lazy_6qg74V = () => Promise.resolve().then(function () { return GetUser_post$1; });
const _lazy_olG83V = () => Promise.resolve().then(function () { return Delete_User_delete$1; });
const _lazy_WvuJLM = () => Promise.resolve().then(function () { return Create_User_post$1; });
const _lazy_L99mhE = () => Promise.resolve().then(function () { return testToken$1; });
const _lazy_pAaQAR = () => Promise.resolve().then(function () { return signup_post$1; });
const _lazy_ixNc0z = () => Promise.resolve().then(function () { return signin$1; });
const _lazy_OZO3Fk = () => Promise.resolve().then(function () { return jwt_service; });
const _lazy_FGdu0O = () => Promise.resolve().then(function () { return express$1; });
const _lazy_cikjbL = () => Promise.resolve().then(function () { return Create_Admin_post$1; });
const _lazy_mJ8tse = () => Promise.resolve().then(function () { return renderer$1; });

const handlers = [
  { route: '/api/signoutapi/signout', handler: _lazy_KdeK1Z, lazy: true, middleware: false, method: undefined },
  { route: '/api/data/data', handler: _lazy_yLionr, lazy: true, middleware: false, method: undefined },
  { route: '/api/CreateUser_Api/Update_User', handler: _lazy_2CArsK, lazy: true, middleware: false, method: "put" },
  { route: '/api/CreateUser_Api/GetUser', handler: _lazy_6qg74V, lazy: true, middleware: false, method: "post" },
  { route: '/api/CreateUser_Api/Delete_User', handler: _lazy_olG83V, lazy: true, middleware: false, method: "delete" },
  { route: '/api/CreateUser_Api/Create_User', handler: _lazy_WvuJLM, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/testToken', handler: _lazy_L99mhE, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/signup', handler: _lazy_pAaQAR, lazy: true, middleware: false, method: "post" },
  { route: '/api/auth/signin', handler: _lazy_ixNc0z, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/jwt.service', handler: _lazy_OZO3Fk, lazy: true, middleware: false, method: undefined },
  { route: '/api/auth/express', handler: _lazy_FGdu0O, lazy: true, middleware: false, method: undefined },
  { route: '/api/Admin_Api/Create_Admin', handler: _lazy_cikjbL, lazy: true, middleware: false, method: "post" },
  { route: '/__nuxt_error', handler: _lazy_mJ8tse, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_mJ8tse, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(true),
    onError: errorHandler
  });
  h3App.use(config.app.baseURL, timingMiddleware);
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(/\/+/g, "/");
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(h.route.replace(/:\w+|\*\*/g, "_"));
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({ fetch: localFetch, Headers, defaults: { baseURL: config.app.baseURL } });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const server = new Server(toNodeListener(nitroApp.h3App));
function getAddress() {
  if (provider === "stackblitz" || process.env.NITRO_NO_UNIX_SOCKET) {
    return "0";
  }
  const socketName = `worker-${process.pid}-${threadId}.sock`;
  if (isWindows) {
    return join("\\\\.\\pipe\\nitro", socketName);
  } else {
    const socketDir = join(tmpdir(), "nitro");
    mkdirSync(socketDir, { recursive: true });
    return join(socketDir, socketName);
  }
}
const listenAddress = getAddress();
server.listen(listenAddress, () => {
  const _address = server.address();
  parentPort.postMessage({
    event: "listen",
    address: typeof _address === "string" ? { socketPath: _address } : { host: "localhost", port: _address.port }
  });
});
{
  process.on("unhandledRejection", (err) => console.error("[nitro] [dev] [unhandledRejection]", err));
  process.on("uncaughtException", (err) => console.error("[nitro] [dev] [uncaughtException]", err));
}

const signout = defineEventHandler(async (event) => {
  var _a;
  try {
    const token = (_a = event.node.req.headers.cookie) == null ? void 0 : _a.split(";").map((cookie) => cookie.trim()).find((cookie) => cookie.startsWith("token="));
    if (token) {
      try {
        setCookie(event, "token", "", { expires: new Date(0) });
        setCookie(event, "user", "", { expires: new Date(0) });
        return { message: "User signed out successfully." };
      } catch (error) {
        console.error("Invalid token:", error);
      }
    }
  } catch (error) {
    return error;
  }
});

const signout$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': signout
});

var en = {
	Home: "Home",
	Logout: "Logout",
	lang: "Languages",
	sr: "Sr No.",
	username: "Username",
	password: "Password",
	role: "Role",
	actions: "Actions",
	createuser: "Create User",
	displayuser: "Display User",
	enterusername: "Enter Username",
	enterpassword: "Enter Password",
	login: "Login",
	submit: "Submit",
	Role: "Role",
	admin: "Admin",
	user: "User",
	umessage: "Username must be between 5 and 10 characters.",
	pmessage: "Password must be between 5 and 10 characters.",
	alert1: "Please Enter Username and Password !",
	alert2: "Please Enter Username!",
	alert3: "Please Enter Password!",
	alert4: "Username or password is incorrect",
	alert5: "Please enter all the fields !",
	alert6: "Please Enter Username and Password!",
	alert7: "Please Enter Username!",
	alert8: "Please Enter Password!",
	alert9: "Please Enter Role!",
	alert10: "Please enter valid details",
	edit: "Edit User!",
	deletemsg: "Delete User!",
	update: "UPDATE",
	"delete": "DELETE",
	close: "CLOSE",
	alert11: "Are you sure you want to delete?",
	alert12: "Logged out succesfully!"
};
var hn = {
	Home: "होम ",
	Logout: "लॉग आउट",
	lang: "भाषाएँ",
	sr: "क्रमांक",
	username: "युजरनेम",
	password: "पासवर्ड",
	role: "रोल",
	actions: "एक्शन",
	createuser: "युजर बनाइये",
	displayuser: "युजर देखिये ",
	enterusername: "युजरनेम दर्ज करें",
	enterpassword: "पासवर्ड दर्ज करें",
	login: "लॉग इन करें",
	submit: "सबमिट करें",
	Role: "भूमिका",
	admin: "एडमिन",
	user: "युजर",
	umessage: "युजरनेम 5 से 10 अक्षरों के बीच होना चाहिए.",
	pmessage: "पासवर्ड 5 से 10 अक्षरों के बीच होना चाहिए.",
	alert1: "कृपया युजरनेम और पासवर्ड दर्ज करें!",
	alert2: "कृपया युजरनेम दर्ज करें!",
	alert3: "कृपया पासवर्ड दर्ज करें!",
	alert4: "युजरनेम या पासवर्ड गलत है",
	alert5: "कृपया सभी फ़ील्ड दर्ज करें !",
	alert6: "कृपया युजरनेम और पासवर्ड दर्ज करें!",
	alert7: "कृपया युजरनेम दर्ज करें!",
	alert8: "कृपया पासवर्ड दर्ज करें!",
	alert9: "कृपया भूमिका दर्ज करें!",
	alert10: "कृपया वैध विवरण दर्ज करें",
	edit: "एडीट युजर!",
	deletemsg: "युजर डिलीट करें!",
	update: "अपडेट",
	"delete": "डिलीट",
	close: "बंद करें",
	alert11: "क्या आपको डिलीट करना है?",
	alert12: "सफलतापूर्वक लॉग आउट हो गया!"
};
const json = {
	en: en,
	hn: hn
};

const data = defineEventHandler(async () => {
  return json;
});

const data$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': data
});

const prisma$5 = new PrismaClient();
const Update_User_put = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  let hashedPassword = await bcrypt.hash(postdata.Password, 10);
  try {
    const Usercreation = await prisma$5.usercreation.update({
      where: {
        id: postdata.id
      },
      data: {
        Username: postdata.Username,
        Password: hashedPassword,
        newPassword: postdata.Password
      }
    });
    return Usercreation;
  } catch (error) {
    return error;
  }
});

const Update_User_put$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Update_User_put
});

const prisma$4 = new PrismaClient();
const GetUser_post = defineEventHandler(async (event) => {
  let cookie = JSON.parse(getCookie(event, "user"));
  let response;
  await prisma$4.usercreation.findMany({
    where: {
      NOT: {
        Username: cookie.Username
      }
    }
  }).then((res) => {
    response = res;
  }).catch((err) => {
    response = err;
  });
  return response;
});

const GetUser_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': GetUser_post
});

const prisma$3 = new PrismaClient();
const Delete_User_delete = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const Usercreation = await prisma$3.usercreation.delete({
      where: {
        id: postdata.id
      }
    });
    return Usercreation;
  } catch (error) {
    return error;
  }
});

const Delete_User_delete$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Delete_User_delete
});

const prisma$2 = new PrismaClient();
const Create_User_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const Usercreation = await prisma$2.usercreation.create({
      data: {
        Username: postdata.Username,
        Password: postdata.Password,
        Role: "User"
      }
    });
    return Usercreation;
  } catch (error) {
    return error;
  }
});

const Create_User_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Create_User_post
});

const db = new PrismaClient();
const db$1 = db;

const secretKey$1 = "abcd";
function verifyToken(token) {
  try {
    if (!token) {
      return { message: "No token provided!" };
    }
    const value = token;
    const decoded = jwt.verify(value, secretKey$1);
    return decoded;
  } catch (error) {
    console.log(error);
  }
}

const jwt_service = /*#__PURE__*/Object.freeze({
  __proto__: null,
  verifyToken: verifyToken
});

const testToken = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  try {
    const token = getCookie(event, "token");
    const userID = verifyToken(token);
    const user = await db$1.usercreation.findUnique({
      where: {
        id: userID == null ? void 0 : userID.userId
      }
    }).then(async (user2) => {
    });
    return "done";
  } catch (error) {
    return "This is error" + error;
  }
});

const testToken$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': testToken
});

const prisma$1 = new PrismaClient();
({
  password: process.env.SESSION_PASSWORD,
  cookieName: "session",
  cookieOptions: {
    secure: false
  }
});
const signup_post = defineEventHandler(async (event) => {
  const postData = await readBody(event);
  assertMethod(event, "POST");
  try {
    const { Username, Password, Role } = postData;
    {
      const existingUser = await prisma$1.usercreation.findUnique({
        where: {
          Username: postData.Username
        }
      });
      if (existingUser) {
        return "Username already exists.";
      }
      let hashedPassword = await bcrypt.hash(Password, 10);
      const user = await prisma$1.usercreation.create({
        data: {
          Username: postData.Username,
          Password: hashedPassword,
          newPassword: postData.Password,
          Role: postData.Role
        }
      });
      if (!user) {
        return { message: "User creating failed." };
      }
      if (user) {
        const str = "User Created  Sucessfully!";
        return "User Created  Sucessfully!";
      }
    }
  } catch (error) {
    return error;
  }
});

const signup_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': signup_post
});

new PrismaClient();
const secretKey = "abcd";
const generateToken = (id) => {
  return jwt.sign({ userId: id }, secretKey, {
    expiresIn: "10h"
  });
};
const signin = defineEventHandler(async (event) => {
  assertMethod(event, "POST");
  const postData = await readBody(event);
  const { Username } = postData;
  try {
    let user = await db$1.usercreation.findUnique({
      where: {
        Username
      }
    });
    if (!user) {
      return { message: "Username does not exists." };
    }
    const isPasswordValid = await bcrypt.compare(postData.Password, user.Password);
    if (!isPasswordValid) {
      return { message: "password mismatch." };
    }
    if (user && isPasswordValid) {
      let use = user.Role;
      let users;
      if (use == "User")
        users = "https://www.google.com";
      else if (use == "Admin")
        users = "/UserData";
      const token = generateToken(user.id);
      setCookie(event, "user", JSON.stringify(user));
      setCookie(event, "token", token);
      return { users, token };
    }
  } catch (error) {
    console.log(error);
    return error;
  }
});

const signin$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': signin
});

new PrismaClient();
const app = express$2();
app.use(express$2.json());
app.use(express$2.urlencoded({ extended: true }));
function express(req, res) {
  const { action } = req.params;
  if (action === "signin") {
    res.json({ message: "Signin successful" });
  } else if (action === "signup") {
    res.json({ message: "Signup successful" });
  } else {
    res.status(400).json({ error: "Invalid action" });
  }
}

const express$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': express
});

const prisma = new PrismaClient();
const Create_Admin_post = defineEventHandler(async (event) => {
  const postdata = await readBody(event);
  try {
    const Usercreation = await prisma.usercreation.create({
      data: {
        Username: postdata.Username,
        Password: postdata.Password,
        Role: "Admin"
      }
    });
    return Usercreation;
  } catch (error) {
    return error;
  }
});

const Create_Admin_post$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Create_Admin_post
});

const appRootId = "__nuxt";

const appRootTag = "div";

function buildAssetsURL(...path) {
  return joinURL(publicAssetsURL(), useRuntimeConfig().app.buildAssetsDir, ...path);
}
function publicAssetsURL(...path) {
  const publicBase = useRuntimeConfig().app.cdnURL || useRuntimeConfig().app.baseURL;
  return path.length ? joinURL(publicBase, ...path) : publicBase;
}

globalThis.__buildAssetsURL = buildAssetsURL;
globalThis.__publicAssetsURL = publicAssetsURL;
const getClientManifest = () => import('file://D:/YMS/.nuxt/dist/server/client.manifest.mjs').then((r) => r.default || r).then((r) => typeof r === "function" ? r() : r);
const getStaticRenderedHead = () => Promise.resolve().then(function () { return _virtual__headStatic$1; }).then((r) => r.default || r);
const getServerEntry = () => import('file://D:/YMS/.nuxt/dist/server/server.mjs').then((r) => r.default || r);
const getSSRRenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  if (!manifest) {
    throw new Error("client.manifest is not available");
  }
  const createSSRApp = await getServerEntry();
  if (!createSSRApp) {
    throw new Error("Server bundle is not available");
  }
  const options = {
    manifest,
    renderToString: renderToString$1,
    buildAssetsURL
  };
  const renderer = createRenderer(createSSRApp, options);
  async function renderToString$1(input, context) {
    const html = await renderToString(input, context);
    if (process.env.NUXT_VITE_NODE_OPTIONS) {
      renderer.rendererContext.updateManifest(await getClientManifest());
    }
    return `<${appRootTag} id="${appRootId}">${html}</${appRootTag}>`;
  }
  return renderer;
});
const getSPARenderer = lazyCachedFunction(async () => {
  const manifest = await getClientManifest();
  const options = {
    manifest,
    renderToString: () => `<${appRootTag} id="${appRootId}"></${appRootTag}>`,
    buildAssetsURL
  };
  const renderer = createRenderer(() => () => {
  }, options);
  const result = await renderer.renderToString({});
  const renderToString = (ssrContext) => {
    const config = useRuntimeConfig();
    ssrContext.payload = {
      serverRendered: false,
      config: {
        public: config.public,
        app: config.app
      },
      data: {},
      state: {}
    };
    ssrContext.renderMeta = ssrContext.renderMeta ?? getStaticRenderedHead;
    return Promise.resolve(result);
  };
  return {
    rendererContext: renderer.rendererContext,
    renderToString
  };
});
const PAYLOAD_URL_RE = /\/_payload(\.[a-zA-Z0-9]+)?.js(\?.*)?$/;
const renderer = defineRenderHandler(async (event) => {
  const ssrError = event.node.req.url?.startsWith("/__nuxt_error") ? getQuery(event) : null;
  if (ssrError && event.node.req.socket.readyState !== "readOnly") {
    throw createError("Cannot directly render error page!");
  }
  let url = ssrError?.url || event.node.req.url;
  const isRenderingPayload = PAYLOAD_URL_RE.test(url);
  if (isRenderingPayload) {
    url = url.substring(0, url.lastIndexOf("/")) || "/";
    event.node.req.url = url;
  }
  const routeOptions = getRouteRules(event);
  const ssrContext = {
    url,
    event,
    runtimeConfig: useRuntimeConfig(),
    noSSR: !!event.node.req.headers["x-nuxt-no-ssr"] || routeOptions.ssr === false || (false),
    error: !!ssrError,
    nuxt: void 0,
    payload: ssrError ? { error: ssrError } : {}
  };
  const renderer = ssrContext.noSSR ? await getSPARenderer() : await getSSRRenderer();
  const _rendered = await renderer.renderToString(ssrContext).catch((error) => {
    throw !ssrError && ssrContext.payload?.error || error;
  });
  await ssrContext.nuxt?.hooks.callHook("app:rendered", { ssrContext });
  if (ssrContext.payload?.error && !ssrError) {
    throw ssrContext.payload.error;
  }
  if (isRenderingPayload) {
    const response2 = renderPayloadResponse(ssrContext);
    return response2;
  }
  const renderedMeta = await ssrContext.renderMeta?.() ?? {};
  const inlinedStyles = "";
  const htmlContext = {
    htmlAttrs: normalizeChunks([renderedMeta.htmlAttrs]),
    head: normalizeChunks([
      renderedMeta.headTags,
      null,
      _rendered.renderResourceHints(),
      _rendered.renderStyles(),
      inlinedStyles,
      ssrContext.styles
    ]),
    bodyAttrs: normalizeChunks([renderedMeta.bodyAttrs]),
    bodyPrepend: normalizeChunks([
      renderedMeta.bodyScriptsPrepend,
      ssrContext.teleports?.body
    ]),
    body: [
      _rendered.html
    ],
    bodyAppend: normalizeChunks([
      `<script>window.__NUXT__=${devalue(ssrContext.payload)}<\/script>`,
      _rendered.renderScripts(),
      renderedMeta.bodyScripts
    ])
  };
  const nitroApp = useNitroApp();
  await nitroApp.hooks.callHook("render:html", htmlContext, { event });
  const response = {
    body: renderHTMLDocument(htmlContext),
    statusCode: event.node.res.statusCode,
    statusMessage: event.node.res.statusMessage,
    headers: {
      "Content-Type": "text/html;charset=UTF-8",
      "X-Powered-By": "Nuxt"
    }
  };
  return response;
});
function lazyCachedFunction(fn) {
  let res = null;
  return () => {
    if (res === null) {
      res = fn().catch((err) => {
        res = null;
        throw err;
      });
    }
    return res;
  };
}
function normalizeChunks(chunks) {
  return chunks.filter(Boolean).map((i) => i.trim());
}
function joinTags(tags) {
  return tags.join("");
}
function joinAttrs(chunks) {
  return chunks.join(" ");
}
function renderHTMLDocument(html) {
  return `<!DOCTYPE html>
<html ${joinAttrs(html.htmlAttrs)}>
<head>${joinTags(html.head)}</head>
<body ${joinAttrs(html.bodyAttrs)}>${joinTags(html.bodyPrepend)}${joinTags(html.body)}${joinTags(html.bodyAppend)}</body>
</html>`;
}
function renderPayloadResponse(ssrContext) {
  return {
    body: `export default ${devalue(splitPayload(ssrContext).payload)}`,
    statusCode: ssrContext.event.node.res.statusCode,
    statusMessage: ssrContext.event.node.res.statusMessage,
    headers: {
      "content-type": "text/javascript;charset=UTF-8",
      "x-powered-by": "Nuxt"
    }
  };
}
function splitPayload(ssrContext) {
  const { data, prerenderedAt, ...initial } = ssrContext.payload;
  return {
    initial: { ...initial, prerenderedAt },
    payload: { data, prerenderedAt }
  };
}

const renderer$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': renderer
});

const _virtual__headStatic = {"headTags":"<meta charset=\"utf-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">","bodyTags":"","bodyTagsOpen":"","htmlAttrs":"","bodyAttrs":""};

const _virtual__headStatic$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': _virtual__headStatic
});
//# sourceMappingURL=index.mjs.map
