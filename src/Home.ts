import TeacherAcceptor from './TeacherAcceptor';
import Teacher from './Teacher';

export default abstract class Home implements TeacherAcceptor {
    abstract getChildTestScore(): number;
    abstract praisedChild (): void;
    abstract reprovedChild (): void;
    abstract accept (teacher: Teacher): void;
}
