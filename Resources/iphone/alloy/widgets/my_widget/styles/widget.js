function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "my_widget/" + s : s.substring(0, index) + "/my_widget/" + s.substring(index + 1);
    return path;
}

module.exports = [];