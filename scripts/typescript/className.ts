enum TestEnum {
    un = 1,
    deux = 2,
    trois = 3
}

module Validation {
    export class ClassName {
        name: string;

        constructor(name: string) {
            this.name = name;
        }

        getName() {
            return this.name;
        }
    }
}
