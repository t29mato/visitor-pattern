import Home from './Home';

export default abstract class Teacher {
    abstract visit (studentHome: Home): void;
}
