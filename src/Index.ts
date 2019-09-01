import Teacher from './Teacher';
import GanariTeacher from './GanariTeacher';
import NobiHome from './NobiHome';
import DekisugiHome from './DekisugiHome';

console.log('先生「さて、家庭訪問行きますか。」');
const teacher: Teacher = new GanariTeacher();

console.log('\n・1軒目：野比家');
const nobiHome: NobiHome = new NobiHome();
nobiHome.accept(teacher);

console.log('\n・2軒目：出来杉家');
const dekisugiHome: DekisugiHome = new DekisugiHome();
dekisugiHome.accept(teacher);
