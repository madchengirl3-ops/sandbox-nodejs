import DataSource from "./dataSource.js"; 

try {
const ds = new DataSource('db/database.json');
/*ds.create({
    author: 'Александр Пушкин',
    title: 'Евгений Онегин',
    description: 'Роман в стихах'
});*/

//ds.delete(3);

/*const all = ds.getAll();
console.log('All:', all);*/

const oneBefore = ds.getOne(1);
console.log('ONE BEFORE:', oneBefore);

ds.update(1, {title: 'Онегин Евгений'});

const oneAfter = ds.getOne(1);
console.log('ONE AFTER:', oneAfter);

ds.debug();
} catch (e) {
    console.error('Error detected:', e)}