## Trilha 2:

Exercício 1: 
Crie uma classe ContaBancaria com os atributos: titular (string), saldo (number). Adicione métodos para depositar e sacar dinheiro, ajustando o saldo.

Exercício 2: 
Crie uma classe Livro com os atributos título (string), autor (string), páginas (number) e lido (boolean). Adicione um método para marcar o livro como lido.

Exercício 3: 
Crie uma classe Produto com os atributos nome (string), preço (number) e quantidade (number). Adicione um método para calcular o valor total em estoque (preço * quantidade).

Exercício 4: 
Crie uma classe Temperatura com um atributo valor (number em Celsius). Adicione métodos para converter o valor para Fahrenheit e Kelvin.

Exercício 5: 
Crie uma classe Agenda que tenha um atributo compromissos (array de strings). Adicione métodos para adicionar compromissos e listar todos os compromissos.

## Trilha 3:

Exercício 1: 
Crie uma classe Veiculo com um método mover() que imprima "O veículo está se movendo". Crie duas subclasses Carro e Bicicleta, ambas herdam de Veiculo. A subclasse Carro deve sobrescrever o método mover() para imprimir "O carro está dirigindo" e Bicicleta deve sobrescrever para "A bicicleta está pedalando". Instancie objetos de ambas as subclasses e chame o método mover().



Exercício 2:
Crie uma classe abstrata FiguraGeometrica com um método abstrato calcularArea(). Crie subclasses Circulo, Quadrado e Triangulo que implementem o método calcularArea() para calcular a área de suas respectivas formas geométricas. Em seguida, crie uma função que aceite um array de diferentes FiguraGeometrica e imprima a área de cada uma.

 

Exercício 3:
Crie uma classe Pagamento com um método processar(). Crie subclasses PagamentoCartao e PagamentoBoleto, cada uma com sua própria implementação do método processar(). A classe PagamentoCartao deve validar o número do cartão e processar o pagamento, e PagamentoBoleto deve gerar um código de boleto. Crie uma função que aceite diferentes tipos de pagamento e processe-os usando polimorfismo.



Exercício 4:
Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia. Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia() que exibe o nível de energia do animal. Use polimorfismo para chamar esses métodos para diferentes animais.



Exercício 5:
Crie uma classe abstrata Funcionario com atributos encapsulados nome, salario e um método abstrato calcularBonus(). Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%. Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final, aplicando o bônus específico de cada um, usando polimorfismo.