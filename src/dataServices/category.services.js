import 'server-only';
import DatabaseConnect from './database';


export const getCategoriesFromDatabase = async () => {
    const db = await DatabaseConnect();
    const categoriesCollection = db.collection('categories');
    return categoriesCollection.find({}).toArray()
}

