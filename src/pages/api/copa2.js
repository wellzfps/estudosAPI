export default function questao(req, res){
    if (req.method === "GET") {
        res.status(200).json({
            titulo: "Ultimos 6 Campeões da Copa do Mundo de Futebol. ",
            times: ['Brasil - 2002', 'Itália - 2006', 'Espanha - 2010', 'Alemanha - 2014', 'França - 2018', 'Argentina - 2022']
        })
    }else {
        res.status(405).send
    }
}