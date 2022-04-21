const Permission = require("../models/Permission");
const { validateErrors } = require("../utils/functions");
const Logger = require("../config/logger");



module.exports = {
    async findDeliveries(req, res){
        // #swagger.tags = ['Deliveries']
        // #swagger.description = 'Endpoint para buscar deliveries conforme critério query params'
        try {
            const { address_id, sale_id } = req.query
            await Permission.create({description})
           Logger.info("Sucesso na requisição para buscar entregas")
            return res.status(200).send({message: 'Ok'})
        } catch (error) {
            const message = validateErrors(error)
            Logger.error("Erro ao tarzer entragas")
            return res.status(400).send(message)
        }
    }
}