import Entry from './Entry';
import Visitor from './Visitor';

export default class Directory extends Entry {
    name: string;
    directory: Directory[] = [];

    constructor (name: string) {
        super();
        this.name = name;
    }

    getName (): string {
        return this.name;
    }

    getSize (): number {
        let size = 0;
        const iterator: Iterator<Entry> = this.directory[Symbol.iterator]();
        while (iterator.next()) {
            const entry: Entry = iterator.next();
            size += entry.getSize();
        }
        return size;
    }

    add (entry: Entry): Entry {
        this.directory.push(entry);
        return this;
    }

    iterator (): Iterator<Entry> {
        return this.directory[Symbol.iterator]();
    }

    accept (visitor: Visitor): void {
        visitor.visit(this);
    }
}
