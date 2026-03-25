import ConnectDB from './conexao.js'

class Crud {

//Consulta geral
    static selectALL(callback){
        let connecion = ConnectDB.connect()
        let sql = "select id, nome, titulo, editora, ano from autor"
        let query = Connection.query(sql, function(error, results, fields){
            if(error) throw error
            callback(results)
        })
        connection.end()
    }

//Consulta por id
    static selectById(Id, callblack){
        let connecion = ConnectDB.connect()
        let sql = "select * fromm autor where id = ?"
        let query = connection.query(sql, id, function(error, results, fields){
        if(error) throw error
        callback(results)
        })
        connection.end()
    }
//Inserir Dados
    static insert(livros, callback){
        let connecion = ConnectDB.connect()
        let sql = "insert into auto set ?"
        let query = connection.query(sql, livros, function(error, results, fields){
            livros.id = results.insertId
            if(error) throw error
            callback(livros)
        })
            connection.end()
    }

//Atualizar
    static update(livros, callback){
        let connection = ConectDB.connect()
        let sql = "update autor set ? where id = ?"
        let id = livros.id
        let query = connection.query(sql, [livros,id], function(error, results, fields){
            if(error) throw error
            callblack(livros)
        })
            connection.end()
    }

//Apagar
    static deleteById(livros, callblack){
        let connecion = ConnectDB.connect()
        let sql = "delete from autor where id = ?"
        let id = livros.id
        let query = connection.query(sql, livros, function(error, results, fields){
            if(error) throw error
            callblack(livros)
    })
    connection.end()
}

}//Fecha classe