// npm install "Nome da dependencia" -e (Faz com que a dependência não possa ser atualizada)
// --save-dev (pode ser adicionado ao comando de install para que ele seja salvo com uma dependencia de desenvolvimento e ela não funcionará em produção)
// --save-prod (pode ser adicionado ao comando de install para que ele seja salvo com uma dependencia de produção e ela funcionará em produção)

// npm outdated (mostra todas as dependências que estão desatualizadas)

// npm update (atualiza todos os arquivos que possam ser atualizados);

// npm install 'nomeDaDependencia'@x.x.x (escolhe a versão da dependência)

// npm install 'nomeDaDependencia'@4.x (escolhe apenas a versão major da dependência, a minor e a patch virão na ultima atualiazação e virão com a possibilidade de serem atualizadas)

// 2.     2.     0
// Major  minor  patch

// Patch:
// Caso seja atualizado somente um bug então alteraria apenas o Patch, ficando por exemplo 2.2.1

// Minor:
// Caso seja adicionado um novo recurso que não mexa na compatibilidade da versão major, então a versão que seria alterada seria a minor, ficando, por exemplo, 2.2.0

// Major:
// Caso você altere completamente a compatibilidade da aplicação então é o Major que será alterado. Mudando, por exemplo para 3.0.0

// Caso tenha um ^ na versão da dependência, então o valor que será alterado será o do Minor e do Patch

// Já, caso tenha um ~ na versão da dependência, então o valor que será alterado será apenas o do Patch

// npm uninstall "nomeDaDependência" (desinstala a dependência)

// npm ls (lista todas as dependências instaladas)
// npm ls --depth=x(lista todas as dependências instaladas e suas camadas de acordo com a quantidade de camadas que você escolheu para ver)