import mysql from 'mysql12'

export default class ConectDB {

    static connect(){

        let connecion = mysql.createConnection({
            local:'localhost',
            user:'root',
            password:'',
            database:'livro'
        })
            Connection.connect()
            return connection


    }


}