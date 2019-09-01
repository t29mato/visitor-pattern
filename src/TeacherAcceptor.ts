import Teacher from './Teacher';

export default interface TeacherAcceptor {
    accept(teacher: Teacher): void;
}
