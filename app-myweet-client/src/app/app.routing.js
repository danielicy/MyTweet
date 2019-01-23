"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_1 = require("./loginmodule/home");
var login_1 = require("./loginmodule/login");
var register_1 = require("./loginmodule/register");
var _guards_1 = require("./loginmodule/_guards");
var tweet_1 = require("./tweetmodule/tweet");
var appRoutes = [
    { path: '', component: home_1.HomeComponent, canActivate: [_guards_1.AuthGuard] },
    { path: 'login', component: login_1.LoginComponent },
    { path: 'register', component: register_1.RegisterComponent },
    { path: 'tweet', component: tweet_1.TweetComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map