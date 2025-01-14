/*****************************************************************
 * Objetivo: Arquivo de funções para realizar cálculos matemáticos
 * Data: 03/02/2023
 * Autor: Stephany
 * Versão: 1.0
 *****************************************************************/

 //Forma 1 de se criar uma função no JS
//Realizar  cálculos matemáticos das quatro operações (SOMAR, SUBTRAIR, MULTIPLICAR E DIVIDIR)
//function calcular(numero1, numero2, tipoCalculo){

    // let valor1 = Number (numero1);
    // let valor2 = Number (numero2);
    // let operacao = tipoCalculo.toUpperCase();

    // let resultado;
    // let status = true; //Variavel booleana para identificar o status do calculo

    // // if(operacao == 'SOMAR')
    // //     resultado = valor1 + valor2;

    // // else if(operacao == 'SUBTRAIR')
    // //     resultado = valor1 - valor2;

    // // else if(operacao == 'MULTIPLICAR')
    // //     resultado = valor1 * valor2;

    // // else if(operacao == 'DIVIDIR'){
    // //     //Validação da divisão por 0.
    // //     if (valor2 == 0){
    // //      console.log('ERRO: Não é posível fazer uma divisão por 0.');
    // //      entradaDados.close();
    // //      status = false;
    // //     }else

    // //         resultado = valor1 / valor2;
    // // }else{
    // //     console.log('ERRO: A operação informada não é válida. Confira a sua entrada.')
    // //     //entradaDados.close(); //Fecha o objeto de entrada de dados (encerra o programa)
    // //     status = false;
    // // }

    // switch (operacao)
    // {
    //     case 'SOMAR':
    //         resultado = valor1 + valor2;
    //          break;

    //     case 'SUBTRAIR':
    //         resultado = valor1 - valor2;
    //             break;

    //     case 'MULTIPLICAR':
    //          resultado = valor1 * valor2;
    //              break;

    //     case 'DIVIDIR':            
    // //Validação da divisão por 0.
    //   if (valor2 == 0){
    //   console.log('ERRO: Não é posível fazer uma divisão por 0.');
    //      entradaDados.close();
    //      status = false;
    //     }else
    //       resultado = valor1 / valor2;

    //         break;  

    //  //Similar ao alse final de uma estrutura baseada em If / else (se nenhuma das opções for veradadeiras,
    //  //sempre passará pelo default)

    //     default:
    //         console.log('ERRO: A operação informada não é válida. Confira a sua entrada.');
    //         status = false;

    // }

    // //Validação para tratar a variável resultado quandp nenhum cálculo é realizado.
    // if(resultado != undefined)
    //     return resultado;
    // else
    //     return status;
        
//}

//Forma 2 de criar uma função no JS
const calcular = function (numero1, numero2, tipoCalculo){

    let valor1 = Number (numero1);
    let valor2 = Number (numero2);
    let operacao = tipoCalculo.toUpperCase();

    let resultado;
    let status = true; //Variavel booleana para identificar o status do calculo

    

    switch (operacao)
    {
        case 'SOMAR':
            resultado = valor1 + valor2;
             break;

        case 'SUBTRAIR':
            resultado = valor1 - valor2;
                break;

         case 'MULTIPLICAR':
              resultado = valor1 * valor2;
                  break;

         case 'DIVIDIR':            
     //Validação da divisão por 0.
       if (valor2 == 0){
       console.log('ERRO: Não é posível fazer uma divisão por 0.');
          entradaDados.close();
          status = false;
         }else
           resultado = valor1 / valor2;

             break;  

      //Similar ao alse final de uma estrutura baseada em If / else (se nenhuma das opções for veradadeiras,
      //sempre passará pelo default)

         default:
             console.log('ERRO: A operação informada não é válida. Confira a sua entrada.');
             status = false;

     }

     //Validação para tratar a variável resultado quandp nenhum cálculo é realizado.
     if(resultado != undefined)
         return resultado;
     else
        return status;
        

}

//Todas essas funções serão calculo privados
//Forma 3 de se criar uma função em JS (Modelo arrow function)
const somar          = (valor1, valor2)     => Number (valor1) + (valor2);
const subtrair       = (valor1, valor2)     => Number (valor1) - (valor2);
const multiplicar    = (valor1, valor2)     => Number (valor1) * (valor2);
const dividir        = (valor1, valor2)     => Number (valor1) / (valor2);


//Exporta uma função para ser utilizada em outro arquivo
module.exports = {
    calcular
}