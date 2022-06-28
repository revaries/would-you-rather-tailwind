import { SESSION_EVENT } from "../constants";

const USER_TOKEN = "userToken";

const sessionEvent = new Event(SESSION_EVENT);

const authenticationService = {

    getToken: function() {
        return window.sessionStorage.getItem(USER_TOKEN);
    },

    isLoggedin: function () {
        const userToken = this.getToken();
        return userToken ? true : false;
    },

    login: function(loginName) {
        window.sessionStorage.setItem(USER_TOKEN, loginName);
        window.dispatchEvent(sessionEvent)
    },

    logout: function() {
        window.sessionStorage.removeItem(USER_TOKEN);
        window.dispatchEvent(sessionEvent);
    }
}

export default authenticationService;