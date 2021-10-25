var Generator = require('yeoman-generator');
const fs = require('fs');

module.exports = class extends Generator {

    constructor(args, opts) {
        super(args, opts);
        this.argument('arquivo', { type: String, required: true });
    }

    initializing() {
        this.log(this.options.arquivo)

        let rawdata = fs.readFileSync(this.options.arquivo);
        let resultado = JSON.stringify(JSON.parse(rawdata), null, 2);
        
        this.log(resultado);

    }



};