import { Pipe, PipeTransform } from '@angular/core';

enum Assertions {
    asc = 'asc',
    desc = 'desc'
}

type Assertion = keyof typeof Assertions;
const assertions = {
    [Assertions.asc]: <T>(a: T, b: T) => a > b,
    [Assertions.desc]: <T>(a: T, b: T) => a < b
};

@Pipe({
    name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {

    transform<T, K extends keyof T>(items: T[] = [], field: K, direction: Assertion): T[] {
        console.log('value ->', items, field, direction);

        return items.sort((a, b) => {
            return Number(assertions[direction](a, b));
        });
    }

}
