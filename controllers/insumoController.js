// insumoController.js
const Insumo = require('../model/Insumo');

// Mostrar todos los insumos
module.exports.mostrarInsumos = (req, res) => {
    Insumo.find({}, (error, insumos) => {
        if (error) {
            return res.status(500).json({
                message: 'Error mostrando los insumos'
            });
        }
        return res.render('../views/insumos/index', { insumos: insumos });
    });
};

// Crear un nuevo insumo
module.exports.crearInsumo = (req, res) => {
    const insumo = new Insumo({
        idinsumo: req.body.idinsumo,
        nominsumo: req.body.nominsumo,
        idproveedor: req.body.idproveedor,
        preUni: req.body.preUni,
        stock: req.body.stock
    });
    insumo.save((error, insumoGuardado) => {
        if (error) {
            return res.status(500).json({
                message: 'Error al crear el insumo'
            });
        }
        res.redirect('/insumos');
    });
};

// Editar un insumo existente
module.exports.editarInsumo = (req, res) => {
    const id = req.body.id_editar.trim();
    const { nominsumo, idproveedor, preUni, stock } = req.body;

    Insumo.findByIdAndUpdate(id, { nominsumo, idproveedor, preUni, stock }, (error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error actualizando el insumo',
                error: error.message
            });
        }
        res.redirect('/insumos');
    });
};

// Borrar un insumo existente
module.exports.borrarInsumo = (req, res) => {
    const id = req.params.id;

    Insumo.findByIdAndRemove(id, (error, insumo) => {
        if (error) {
            return res.status(500).json({
                message: 'Error eliminando el insumo',
                error: error.message
            });
        }
        res.redirect('/insumos');
    });
};
