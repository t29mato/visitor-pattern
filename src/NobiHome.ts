import TeacherAcceptor from './TeacherAcceptor';
import Home from './Home';
import Teacher from './Teacher';

export default class NobiHome extends Home implements TeacherAcceptor {
    private childTestScore: number = 0;

    getChildTestScore (): number {
        return this.childTestScore;
    }

    praisedChild (): void {
        console.log('母親「あら、私に似たのかしら♪」');
    }

    reprovedChild (): void {
        console.log('母親「のびたーーーーーーーーー！」');
    }

    accept (teacher: Teacher) {
        teacher.visit(this);
    }
}
