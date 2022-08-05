module.export = app => {
    app.get('/', (req, res) => {
        return res.status(200).send('Backend executando!')
    })
    
}