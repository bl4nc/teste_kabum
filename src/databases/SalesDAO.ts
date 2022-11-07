import { uuid } from './../utils/uuid';
import { conn } from './connection';
import { SalesModel } from '../model/Sales'
import { month_now, year_now } from '../utils/date'

class SalesDAO {

    async create(sale: SalesModel) {
        const id = uuid()
        const connection = await conn();
        const [rows, fields, err] = await connection.execute(`INSERT INTO sales 
        (sale_id,sale_date,client,product_service,type,value,payment_method,nf,installments)
        values (?,?,?,?,?,?,?,?,?)`,
            [id, sale.sale_date, sale.client, sale.product_service, sale.type, sale.value, sale.payment_method, sale.nf, sale.installments])
        connection.end()
        return rows
    }

    async getMonth() {
        const connection = await conn();
        const [rows, fields, err] = await connection.execute(`SELECT * from sales 
        where month(sale_date) = ? and year(sale_date) = ?`,
            [month_now(), year_now()])
        connection.end()
        return rows
    }
    async getSale(sale_id: string) {
        const connection = await conn();
        const [rows, fields, err] = await connection.execute(`SELECT * from sales 
        where sale_id = ?`,
            [sale_id])
        connection.end()
        return rows
    }

    async getPeriod(start: string, end: string) {
        const connection = await conn();
        const [rows, fields, err] = await connection.execute(`SELECT * from sales 
        where date(sale_date) between ? and ?`,
            [start, end])
        connection.end()
        return rows
    }

    async setFinish(sale_id: string) {
        const connection = await conn();
        const [rows, fields, err] = await connection.execute(`UPDATE sales 
        set finish = 1
        where sale_id = ?`,
            [sale_id])
        connection.end()
        return rows
    }

    async updateSale(sale: SalesModel) {
        const connection = await conn();
        const [rows, fields, err] = await connection.execute(`UPDATE sales 
        set sale_date = ?,client = ?,product_service = ?,type = ?,
        value = ?,payment_method = ?,nf = ?,installments = ?,finish = ?
        where sale_id = ?`,
            [sale.sale_date, sale.client, sale.product_service, sale.type,
            sale.value, sale.payment_method, sale.nf, sale.installments, sale.finish, sale.sale_id])
        connection.end()
        connection.end()
        return rows
    }

    async removeFinish(sale_id: string) {
        const connection = await conn();
        const [rows, fields, err] = await connection.execute(`UPDATE sales 
        set finish = 0
        where sale_id = ?`,
            [sale_id])
        connection.end()
        return rows
    }


    async deleteSale(sale_id: string) {
        const connection = await conn();
        const [rows, fields, err] = await connection.execute(`DELETE from sales 
        where sale_id = ?`,
            [sale_id])
        connection.end()
        return rows
    }

}

export { SalesDAO }