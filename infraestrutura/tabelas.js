// banco de dados

class Tabelas{
    init(conexao){
        this.conexao = conexao

        this.criarAtendimentos()
    }

    criarAtendimentos(){
        const sql = `CREATE TABLE IF NOT EXISTS cadastroidosos 
            (id int AUTO_INCREMENT not null,
            nome text,
            cpf varchar(15),
            dataDeNascimento text,
            tel text,
            tel2 text,
            logradouro text,
            numero text,
            bairro text,
            municipio text,
            estado text,
            PRIMARY KEY(id),
            FOREIGN KEY (cpf) REFERENCES atendimentosidosos60 (cpf))`
        

        this.conexao.query( sql, erro => {
            if(erro){
                console.log(erro)
            } else{
                console.log('Tabela Atendimentos criada com sucesso')
            }
        } )
    }
}

module.exports = new Tabelas