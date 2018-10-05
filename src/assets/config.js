//***  NOTE ***//
// Put required Api Url key in "apiUrls" variable

var dotNet = {
    local: "http://localhost",
    dev: "http://xyz.com/",
}

apiUrls = {
    dotNet: dotNet.dev,
};

PROD = false;

var __DISABLE_LOGGING__ = false;

if(__DISABLE_LOGGING__) {
    console.log = function() {}
}