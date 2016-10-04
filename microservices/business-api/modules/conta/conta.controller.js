(function () {
  'use strict';
  var Service = require('./conta.service');

  function cadastrar(req, res) {
    Service.cadastrar(req, res);
  }

  function alterar(req, res) {
    Service.alterar(req, res);
  }

  function adicionarProjeto(req, res) {
    Service.adicionarProjeto(req, res);
  }

  function buscarTodos (req, res) {
    Service.buscarTodos(req, res);
  }

  function buscarPorId (req, res) {
    Service.buscarPorId(req, res);
  }

  function requestToken(req, res) {
    Service.login(req, res);
  }

  var controller = {
    cadastrar: cadastrar,
    alterar: alterar,
    adicionarProjeto: adicionarProjeto,
    buscarTodos: buscarTodos,
    buscarPorId: buscarPorId,
    requestToken: requestToken
  };

  module.exports = controller;
}());