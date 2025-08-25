# 🧮 Calculadora de Partidas Rankeadas

## 📖 Descrição
Projeto desenvolvido como desafio prático da *DIO (Digital Innovation One)*.  
O objetivo é calcular o *saldo de vitórias* de um jogador e classificar seu *nível* em um sistema de ranking fictício.  

Este projeto faz parte do meu portfólio de estudos em *JavaScript* e reforça conceitos de:
- Lógica de programação
- Funções
- Operadores
- Estruturas condicionais

---

## 🚀 Tecnologias Utilizadas
- JavaScript (ES6+)
- Node.js (para execução no terminal)

---

## 📂 Estrutura do Projeto
calculadora-partidas-rankeadas/
│
├── index.js       # Código principal
└── README.md      # Documentação do projeto

---

## ⚙️ Funcionalidades
- Calcula o **saldo de vitórias** de um jogador  
- Determina o **nível** do jogador com base no saldo:  

| Faixa de Vitórias | Nível      |
|------------------|------------|
| ≤ 10             | Ferro 🥉    |
| 11 – 20          | Bronze 🥉   |
| 21 – 50          | Prata 🥈    |
| 51 – 80          | Ouro 🥇     |
| 81 – 90          | Diamante 💎 |
| 91 – 100         | Lendário 🔥 |
| ≥ 101            | Imortal 👑 |

- Exibe uma mensagem final formatada no console

---

## 💻 Como Executar
1. Clone o repositório:

```git clone https://github.com/seu-usuario/calculadora-partidas-rankeadas.git```

2.	Entre na pasta do projeto:
```cd calculadora-partidas-rankeadas```

3.	Execute o arquivo com Node.js:
```node index.js ```

## 🧪 Exemplo de Uso

```const scoreBalance = finalMatchResults(75, 15);```
```const rankLevel = findRankLevel(scoreBalance);```

```console.log(`🦸 O Herói tem de saldo de ${scoreBalance} está no nível de ${rankLevel}`);```

Saída esperada:
```🦸 O Herói tem de saldo de 60 está no nível de Ouro ```

## 📚 Aprendizados
•	Declaração e uso de funções em JavaScript
•	Manipulação de parâmetros e retorno de valores
•	Estruturas condicionais (if, else if, else)
•	Organização da lógica em funções separadas
•	Uso de template strings para mensagens dinâmicas no console

## 🔗 Links
•	Meu Perfil no GitHub
•	Meu Perfil na DIO

⸻

## 📝 Licença

    Este projeto está sob a licença MIT.