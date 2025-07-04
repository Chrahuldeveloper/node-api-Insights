"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var generateGitFile = require("giv-gitignore");
generateGitFile();
var ApiTracker = /** @class */ (function () {
    function ApiTracker() {
        this.reqCounter = 0;
    }
    ApiTracker.prototype.requestCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, console.log(this.reqCounter)];
            });
        });
    };
    ApiTracker.prototype.payLoadSize = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var jsonData, size;
            return __generator(this, function (_a) {
                try {
                    jsonData = JSON.stringify(data);
                    size = Buffer.from(jsonData).length;
                    console.log(size);
                }
                catch (error) {
                    console.log(error);
                }
                return [2 /*return*/];
            });
        });
    };
    ApiTracker.prototype.insights = function (fn) {
        return __awaiter(this, void 0, void 0, function () {
            var start, end, dur, time, performance_1, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this.reqCounter++;
                        start = process.hrtime();
                        return [4 /*yield*/, fn()];
                    case 1:
                        _a.sent();
                        end = process.hrtime(start);
                        dur = end[0] * 1000 + end[1] / 1000000;
                        time = dur.toFixed(3);
                        performance_1 = "";
                        if (dur < 100)
                            performance_1 = "🚀 Excellent";
                        else if (dur < 300)
                            performance_1 = "✅ Good";
                        else if (dur < 800)
                            performance_1 = "⚠️ Acceptable";
                        else if (dur < 1500)
                            performance_1 = "🐢 Slow";
                        else
                            performance_1 = "🔥 Poor";
                        console.log("Response Time: ".concat(time, "ms - ").concat(performance_1));
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("Error in apiTime:", error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return ApiTracker;
}());
exports.default = ApiTracker;
