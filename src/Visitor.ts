import Directory from './Directory';

export default abstract class Visitor {
    abstract visit(file: File): void;
    abstract visit(directory: Directory): void;
}
