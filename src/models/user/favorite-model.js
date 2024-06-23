const connection = require('../../config/connection');

const getFavorites = async(user_id)=>{
    const query = `SELECT * FROM favorite WHERE user_id=?`

    return await connection.queryDatabase(query,[user_id])
}
const insertFavorite = async (values)=>{
    const query =`INSERT INTO favorite (product_id, user_id) VALUES (?, ?)`;

    return await connection.queryDatabase(query, values)
}

const deleteFavorite = async (favorite_id) =>{
    const query = `DELETE FROM favorite WHERE favorite_id= ?`

    return await connection.queryDatabase(query, [favorite_id])
}

const addOrDeleteFav = async (product_id, user_id) => {
    const checkQuery = `SELECT favorite_id FROM favorite WHERE product_id=? AND user_id=?`;
    const favorites = await connection.queryDatabase(checkQuery, [product_id, user_id]);

    if (favorites.length > 0) {
        const favorite_id = favorites[0].favorite_id;
        await deleteFavorite(favorite_id);
    } else {
        await insertFavorite([product_id, user_id]);
    }
}
module.exports={
    getFavorites,
    insertFavorite,
    deleteFavorite,
    addOrDeleteFav
}