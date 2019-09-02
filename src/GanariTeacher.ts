/* eslint-disable no-dupe-class-members */
import Teacher from './Teacher';
import Home from './Home';

export default class GanariTeacher extends Teacher {
    visit (studentHome: Home): void {
        const score: number = studentHome.getChildTestScore();
        if (score > 80) {
            console.log(`先生「テストの点数は${score}点です、優秀なお子さんですね (キラキラ)」`);
            studentHome.praisedChild();
        } else {
            console.log(`先生「テストの点数は${score}点です笑」`);
            studentHome.reprovedChild();
        }
    };
}
