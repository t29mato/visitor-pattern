import TeacherAcceptor from './TeacherAcceptor';
import Home from './Home';
import Teacher from './Teacher';

export default class DekisugiHome extends Home implements TeacherAcceptor {
    private childTestScore: number = 100;

    getChildTestScore (): number {
        return this.childTestScore;
    }

    praisedChild (): void {
        console.log('母親「自慢の息子ですわ♪」');
    }

    reprovedChild (): void {
        console.log('母親「ウチの子ではありません。」');
    }

    accept (teacher: Teacher) {
        teacher.visit(this);
    }
}
