import Teacher from './Teacher';
import GanariTeacher from './GanariTeacher';
import NobiHome from './NobiHome';
import DekisugiHome from './DekisugiHome';

const Index = async () => {
    console.log('先生「さて、家庭訪問行きますか。」');
    const teacher: Teacher = new GanariTeacher();

    await sleep(3000);

    console.log('\n・1軒目：野比家');
    await sleep(2000);
    const nobiHome: NobiHome = new NobiHome();
    nobiHome.accept(teacher);

    await sleep(3000);

    console.log('\n・2軒目：出来杉家');
    await sleep(2000);
    const dekisugiHome: DekisugiHome = new DekisugiHome();
    dekisugiHome.accept(teacher);

    await sleep(4000);
    console.log('家庭訪問終了');
};

const sleep = (milliseconds: number) => {
    return new Promise<void>(resolve => {
        setTimeout(() => resolve(), milliseconds);
    });
};

Index();
