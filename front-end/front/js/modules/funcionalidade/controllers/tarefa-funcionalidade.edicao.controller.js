'use strict';

var controllersModule = require('./_index');

/**
 * @ngInject
 */
function TarefaFuncionalidadeEdicaoController($scope, $routeParams, FuncionalidadeService, ModuloService, globalMessage) {
  function alterarCb(funcionalidade) {
    globalMessage.info('Funcionalidade alterada com sucesso');
    delete $scope.novaTarefafuncionalidade;
  }

  function carregarFuncionalidade(id) {
    FuncionalidadeService.buscarPorId(function(funcionalidade) {
      funcionalidade.dataInicio = funcionalidade.dataInicio ? new Date(funcionalidade.dataInicio) : funcionalidade.dataInicio;
      funcionalidade.dataFim = funcionalidade.dataFim ? new Date(funcionalidade.dataFim) : funcionalidade.dataFim;
      $scope.novaTarefaFuncionalidade = funcionalidade;
    }, id);
  }

  function alterar(funcionalidade) {
    console.log('funcionalidade para alterar', funcionalidade);
    FuncionalidadeService.alterar(alterarCb, funcionalidade);
  }

  function inicializar() {
    $scope.cadastrar = alterar;
    $scope.edicao = true;
    
    carregarFuncionalidade($routeParams.id);

    ModuloService.buscarTodosPorProjeto(function(projetoModulos) {
      $scope.projetoModulos = projetoModulos;
    });
  }
  inicializar();
}

controllersModule.controller('TarefaFuncionalidadeEdicaoController', TarefaFuncionalidadeEdicaoController);