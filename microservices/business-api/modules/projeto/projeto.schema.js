'use strict';
var mongoose  = require('mongoose'),
    Schema    = mongoose.Schema;
    
module.exports = {
  nome:               {type: String, required: true, min: 3, max: 200},
  descricao:          {type: String, min: 3, max: 600},
  modulos: [{type: Schema.Types.ObjectId, ref: 'Modulos'}],
  gitHub: {type: Object},
  equipes: [
    {
      nome:           {type: String, required: true, min: 3, max: 60},
      membros: [{type: Schema.Types.ObjectId, ref: 'Contas'}]
    }
  ],
  dataCadastro:       {type: Date, default: Date.now},
  status:             {
    codigo : {type: Number},
    display: {type: String}
  }
};