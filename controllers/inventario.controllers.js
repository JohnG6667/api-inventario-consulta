const { db } = require('../cnn')

const getProducts = async (req, res) => {
    const response = await db.any(`select p.pro_nombre, p.pro_descripcion, p.pro_costo, s.st_cantidad as stock 
    from product p inner join stock s on s.st_id = p.pro_id
    group by p.pro_nombre, p.pro_descripcion, p.pro_costo, s.st_cantidad
    order by p.pro_nombre;`)
    res.json(response)
}

module.exports = {
    getProducts
}