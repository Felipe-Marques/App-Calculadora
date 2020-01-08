    function calcular(tipo, valor) {

        //Verificar tipo: acao/valor e valor:0 até 9/ operadores entre ''
        //console.log(tipo, valor)

        //Estrutura condicional para detrminar tipo.
        if (tipo === 'acao') {

            if (valor === 'C') {
                //limpar a tela do visor. id. resultado
                document.getElementById('resultado').value = ''
            }

            //if para concatenação dos operadores na expressão.
            if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
                document.getElementById('resultado').value += valor
            }

            if (valor === '=') {

                //Recuperando valor e passando na variavel valor_campo.
                //utilização do Eval() para realizar a enterpretação da string com a operação como um operação gerando um resultado numérico.
                var valor_campo = eval(document.getElementById('resultado').value)
                console.log(valor_campo)
                document.getElementById('resultado').value = valor_campo


            }

        } else if (tipo === 'valor') {

            //criando variavel recupaerando valor e concatenando na tela de resultado.
            /*
            var valor_campo = document.getElementById('resultado').value
            document.getElementById('resultado').value = valor_campo + valor
            //Concatenando com outros valores. valor_campo(string) e valor(numérico)
            */

            //Código menor executando mesma função
            document.getElementById('resultado').value += valor
                //Neste código não precisamos recuperar o valor antes, pois, o sinal "+=" no mesmo tempo em que aribui o valor realiza a concatenação do valor já contido.
        }

    };