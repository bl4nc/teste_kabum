import { config } from "./db_conf"

const mysql = require('mysql2/promise');

export const conn = async () => {
    const connection = await mysql.createConnection(config)
    return connection
};
// async conn() {
//         const connection = await mysql.createConnection(config);
//         return connection
//     }


// export const mysql_exec = async (query: string, values?: any[]) => {
//     const result = await mysqli.query(query, values ?? [], (err: any, result: any, fields: any) => {
//         if (err) {
//             return (err)
//         } else {
//             return ({
//                 result: result,
//                 data: fields
//             })
//         }
//     })
//     return result
// }