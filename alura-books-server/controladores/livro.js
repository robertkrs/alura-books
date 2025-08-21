const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deleteLivroPorId } = require('../servicos/livro');

function getLivros(request, response) {
    try{
        const livros = getTodosLivros();
        response.send(livros);
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
}

function getLivro(request, response) {
    try{
        const id = request.params.id;

        if(id && Number(id)) {
            const livro = getLivroPorId(id);
            response.send(livro);
        }else{
            response.status(422);
            response.send('Id inválido');
        }
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
}

function postLivro(request, response) {
    try{
        const livroNovo = request.body;

        if(request.body.nome) {
            insereLivro(livroNovo);
            response.status(201);
            response.send('Livro inserido com sucesso');
        }else{
            response.status(422);
            response.send('O campo nome é obrigatório');
        }
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
}

function patchLivro(request, response) {
    try{
        const id = request.params.id;

        if(id && Number(id)) {
            const body = request.body;

            if(request.body.nome) {
                modificaLivro(body, id);
                response.send('Item modificado com sucesso');
            }else{
                response.status(422);
                response.send('O campo nome é obrigatório');
            }
        }else{
            response.status(422);
            response.send('Id inválido');
        }
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
}

function deleteLivro(request, response) {
    try{
        const id = request.params.id;
        
        if(id && Number(id)) {
            deleteLivroPorId(id);
            response.send('Item removido com sucesso');
        }else{
            response.status(422);
            response.send('Id inválido');
        }
    }catch(error){
        response.status(500);
        response.send(error.message);
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}