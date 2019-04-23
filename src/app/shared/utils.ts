export {};

export type KeysOfType<T, Condition> = { [P in keyof T]: T[P] extends Condition ? P : never }[keyof T];

declare global {
    interface Math {
        randomInt(min?: number, max?: number): number;
    }

    interface StringConstructor {
        random(length?: number): string;
    }

    interface Array<T> {
        random<T>(this: T[]): T;

        pluck<T, K extends keyof T>(this: T[], key: K): T[K][];

        findWhere<T, K extends keyof T>(this: T[], property: K, value: T[K]): T;

        first(this: T[], defaultValue?: Object): T;

        contains(this: T[], value: T): boolean;

        remove<T>(this: T[], item: T): boolean;

        where<T, K extends keyof T>(this: T[], property: K, value: T[K]): T[];

        whereEmpty<T, K extends keyof T>(this: T[], property: K): T[];

        whereNotEmpty<T, K extends keyof T>(this: T[], property: K): T[];

        sum(this: T[], property: KeysOfType<T, number>): number;
    }
}

Math.randomInt = function(min: number = Number.MIN_SAFE_INTEGER, max: number = Number.MAX_SAFE_INTEGER) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

Array.prototype.random = function() {
    return this[Math.randomInt(0, this.length - 1)];
};

Array.prototype.findWhere = function(property, value) {
    return this.find(item => item[property] === value);
};

Array.prototype.pluck = function(key) {
    return this.map(item => item[key]);
};

Array.prototype.remove = function(item) {
    const index = this.indexOf(item);
    if (index === -1) {
        return undefined;
    }
    this.splice(this.indexOf(item), 1);
    return true;
};

Array.prototype.where = function(property, value) {
    return this.filter(item => item[property] === value);
};
Array.prototype.first = function(defaultValue = undefined) {
    return this[0] || defaultValue;
};
Array.prototype.contains = function(value) {
    return this.indexOf(value) !== -1;
};

Array.prototype.whereEmpty = function(property) {
    return this.filter(item => !item[property]);
};
Array.prototype.whereNotEmpty = function(property) {
    return this.filter(item => item[property]);
};
Array.prototype.sum = function(property) {
    return this.reduce((a, b) => a + b[property], 0);
};
String.random = function(length = Math.randomInt(1, 15)) {
    const characters = '!"#$%&\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~'.split('');
    let word = '';
    for (let i = 0; i < length; i++) {
        word += characters.random();
    }
    return word;
};
export const USER_ID = 'userId';
export const USER_EMAIL = 'userEmail';
