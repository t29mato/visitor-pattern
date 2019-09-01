import Visitor from './Visitor';
import Directory from './Directory';
import Entry from './Entry';

export default class ListVisitor extends Visitor {
    currentDirectory: string;
    visit (file: File): void {
        console.log(this.currentDirectory + '/' + file);
    }

    // eslint-disable-next-line no-dupe-class-members
    visit (directory: Directory): void {
        console.log(this.currentDirectory + '/' + directory);
        const saveDirectory: string = directory;
        this.currentDirectory = this.currentDirectory + '/' + directory.getName();
        const iterator: Iterator = directory.iterator();
        while (iterator.next()) {
            const directory: Directory = iterator.next();
            directory.accept(this);
        }
    }
}
