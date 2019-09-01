import Element from './Element';

export default abstract class Entry implements Element {
    abstract getName(): string;
    abstract getSize(): number;
    add (entry: Entry): Entry {
        throw new Error('ファイルにEntryを追加することはできません');
    }

    iterator (): Iterator<Entry> {
        throw new Error('');
    }

    toString (): string {
        return this.getName() + ' (' + this.getSize() + ')';
    }
}
