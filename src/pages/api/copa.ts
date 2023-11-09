import type { NextApiRequest, NextApiResponse } from 'next'


type Data = Array<{
    nome: string;
    ano: string;
}>;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
){
    res.status(200).json([
        {ano: '2002', nome: 'Brasil'},
        {ano: '2006', nome: 'Itália'},
        {ano: '2010', nome: 'Espanha'},
        {ano: '2014', nome: 'Alemanha'},
        {ano: '2018', nome: 'França'},
        {ano: '2022', nome: 'Argentina'}

    ])
}