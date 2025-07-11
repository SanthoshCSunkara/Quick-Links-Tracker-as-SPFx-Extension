var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
import { override } from '@microsoft/decorators';
import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
import { sp } from '@pnp/sp/presets/all';
import '@pnp/sp/items';
import '@pnp/sp/webs';
import '@pnp/sp/lists';
import '@pnp/sp/site-users/web';
var QuickLinksTrackerApplicationCustomizer = /** @class */ (function (_super) {
    __extends(QuickLinksTrackerApplicationCustomizer, _super);
    function QuickLinksTrackerApplicationCustomizer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    QuickLinksTrackerApplicationCustomizer.prototype.onInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                sp.setup({
                    spfxContext: this.context
                });
                this.trackQuickLinks();
                return [2 /*return*/, Promise.resolve()];
            });
        });
    };
    QuickLinksTrackerApplicationCustomizer.prototype.trackQuickLinks = function () {
        var _this = this;
        document.body.addEventListener('click', function (event) { return __awaiter(_this, void 0, void 0, function () {
            var target, linkTitle, linkElement, linkUrl, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        target = event.target;
                        if (!(target && target.hasAttribute('data-automation-id') && target.getAttribute('data-automation-id') === 'quick-links-item-title')) return [3 /*break*/, 5];
                        linkTitle = target.innerText.trim();
                        linkElement = target.closest('a');
                        linkUrl = (linkElement === null || linkElement === void 0 ? void 0 : linkElement.href) || 'No URL';
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, sp.web.currentUser()];
                    case 2:
                        user = _a.sent();
                        return [4 /*yield*/, sp.web.lists.getByTitle('ClickAnalytics').items.add({
                                Title: linkTitle,
                                LinkUrl: linkUrl,
                                ClickedTime: new Date().toISOString(),
                                User: user.Title
                            })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        error_1 = _a.sent();
                        console.error("Error logging click event:", error_1);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); });
    };
    __decorate([
        override
    ], QuickLinksTrackerApplicationCustomizer.prototype, "onInit", null);
    return QuickLinksTrackerApplicationCustomizer;
}(BaseApplicationCustomizer));
export default QuickLinksTrackerApplicationCustomizer;
//# sourceMappingURL=QuickLinksTrackerApplicationCustomizer.js.map