var TestEnum;
(function (TestEnum) {
    TestEnum[TestEnum["un"] = 1] = "un";
    TestEnum[TestEnum["deux"] = 2] = "deux";
    TestEnum[TestEnum["trois"] = 3] = "trois";
})(TestEnum || (TestEnum = {}));
var Validation;
(function (Validation) {
    var ClassName = (function () {
        function ClassName(name) {
            this.name = name;
        }
        ClassName.prototype.getName = function () {
            return this.name;
        };
        return ClassName;
    })();
    Validation.ClassName = ClassName;
})(Validation || (Validation = {}));
