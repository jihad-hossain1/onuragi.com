import 'server-only'
import { ObjectId } from "mongodb";
import DatabaseConnect from "./database";


export const getProductsFromDb = async (categoryId) => {
    const db = await DatabaseConnect()
    const productsCollection = db.collection("products");
    const query = {};
    if (categoryId) {
        query.categoryId = categoryId;
    }
    return productsCollection.find(query).toArray();
};

export const getProductByIdFromDb = async (id) => {
    const db = await DatabaseConnect()
    const productsCollection = db.collection("products");
    const query = {
        _id: new ObjectId(id),
    };
    return productsCollection.findOne(query);
};


export const getProductsByIdsFromDb = async (ids = []) => {
    const db = await DatabaseConnect()
    const productsCollection = db.collection("products");
    const idsWithObjectId = ids.map((id) => new ObjectId(id));
    const query = {
        _id: { $in: idsWithObjectId },
    };
    return productsCollection.find(query).toArray();
};