exports.createBook = (req, res, next) => {
    res.send({message: "create book handler"});
}

exports.findOneBook = (req, res, next) => {
    res.send({message: "find one book handler"});
}

exports.findAllBook = (req, res, next) => {
    res.send({message: "find all book handler"});
}

exports.updateBook = (req, res, next) => {
    res.send({message: "update book handler"});
}

exports.deleteBook = (req, res, next) => {
    res.send({message: "delete book handler"});
}

exports.deleteAllBook = (req, res, next) => {
    res.send({message: "delete all book handler"});
}