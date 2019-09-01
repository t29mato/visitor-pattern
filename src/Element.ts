import Visitor from './Visitor';

export default interface Element {
    accept(visitor: Visitor): void;
}
