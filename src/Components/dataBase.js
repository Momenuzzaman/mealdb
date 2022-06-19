const addToDb = item =>{
    const db = getDb();
    if(item in db){
        db[item] = db[item] + 1;
    }
    else{
        db[item] = 1;
    }
    setDb(db);
}

const setDb = db => {
    const dbJSON = JSON.stringify(db);
    localStorage.setItem('meal',dbJSON);
}

const getDb= () => {
    let savedDb = localStorage.getItem('meal');
    return savedDb ? JSON.parse(savedDb) : {}; 
}
export { addToDb, getDb, setDb };

