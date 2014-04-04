function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "my_widget/" + s : s.substring(0, index) + "/my_widget/" + s.substring(index + 1);
    return path;
}

function Controller() {
    function clickEvent() {
        alert("Hello Widget");
    }
    new (require("alloy/widget"))("my_widget");
    this.__widgetId = "my_widget";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.widget = Ti.UI.createView({
        id: "widget"
    });
    $.__views.widget && $.addTopLevelView($.__views.widget);
    $.__views.__alloyId0 = Ti.UI.createLabel({
        text: "Hello Widget/Jade!",
        id: "__alloyId0"
    });
    $.__views.widget.add($.__views.__alloyId0);
    clickEvent ? $.__views.__alloyId0.addEventListener("click", clickEvent) : __defers["$.__views.__alloyId0!click!clickEvent"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.__alloyId0!click!clickEvent"] && $.__views.__alloyId0.addEventListener("click", clickEvent);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;