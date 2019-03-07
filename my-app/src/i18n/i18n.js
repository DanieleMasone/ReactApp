import Config from "react-native-config";
import i18n from "i18n-js";
import moment from "moment";

import en from "./locale/en.json";
import it from "./locale/it.json";

// The method we'll use instead of a regular string
export function strings(name, params = {}) {
    return i18n.t(name, params);
}

export function getCurrentLocale() {
    let locale = Config.LOCALE  || "en";
    //TODO
    return locale;
}

export function date(time) {
    return moment.unix(time).fromNow();
}


export function initLocale() {
    i18n.locale = getCurrentLocale();
    i18n.translations = { en, it };
    
    if (i18n.locale.indexOf("it") === 0) {
        require("moment/locale/it.js");
        moment.locale("it");
    }else {
        moment.locale("en");
    }
}

initLocale();
