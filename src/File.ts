import Entry from './Entry';
import Visitor from './Visitor';

export default class File extends Entry {
    name: string;
    size: number;
    constructor (name: string, size: number) {
        super();
        this.name = name;
        this.size = size;
    }

    getName (): string {
        return this.name;
    }

    getSize (): number {
        return this.size;
    }

    accept (visitor: Visitor): void {
        visitor.visit(this);
    }
}
