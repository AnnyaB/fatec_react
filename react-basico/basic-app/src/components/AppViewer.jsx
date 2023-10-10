import styles from './AppViewer.module.css'
//Camada de Compilação de Serviços
function somaNumero(n1, n2) {
  return (n1 + n2)
}
const AppViewer = () => {
  //Retorno no display
  const professores = [
    { id: 1, nome: "Jose Armando Vargas", idade: 42, formacao: "Engenharia da computação", titulacao: "Latu-Senso" },
    { id: 2, nome: "Maria Silva", idade: 35, formacao: "Ciência da Informação", titulacao: "Mestrado" },
    { id: 3, nome: "Carlos Oliveira", idade: 28, formacao: "Sistemas de Informação", titulacao: "Bacharelado" },
    { id: 4, nome: "Ana Souza", idade: 50, formacao: "Engenharia Elétrica", titulacao: "Doutorado" },
    { id: 5, nome: "Pedro Santos", idade: 38, formacao: "Ciência da Computação", titulacao: "Especialização" },
    { id: 6, nome: "Fernanda Costa", idade: 45, formacao: "Engenharia de Software", titulacao: "Mestrado" },
    { id: 7, nome: "Ricardo Pereira", idade: 32, formacao: "Tecnologia da Informação", titulacao: "Graduação" },
    { id: 8, nome: "Patricia Martins", idade: 48, formacao: "Matemática", titulacao: "Especialização" },
    { id: 9, nome: "Gustavo Lima", idade: 36, formacao: "Engenharia Mecatrônica", titulacao: "Doutorado" }
  ]

  return (
    <>
      <h2>lista de professores - lista</h2>
      {
        professores.map((professor) => {
          return (
            <div key={professor.id}>
              <ul>
                <li><strong>Nome:</strong>{professor.nome}</li>
                <li><strong>Idade:</strong>{professor.idade}</li>
                <li><strong>Formação:</strong>{professor.formacao}</li>
                <li><strong>Titulação:</strong>{professor.titulacao}</li>
                <li>-----------</li>
              </ul>
            </div>
          )
        }) // .map mesma coisa do foreach/for em um vetor. Ja a ((promisse)=> {}) é uma promessa que vai voltar algo daquela ação
      }

      <h2>lista de professores - tabela</h2>
      <table>
        <tr>
          <th>Id</th>
          <th>Nome</th>
          <th>Idade</th>
          <th>Formação</th>
          <th>Titulação</th>
        </tr>
        {professores.map((professor) => {
          return (
            <tr className={professor.id % 2 == 0 ? styles.linhaCinza : null} key={professor.id}>
              <td>{professor.id}</td>
              <td>{professor.nome}</td>
              <td>{professor.idade}</td>
              <td>{professor.formacao}</td>
              <td className={professor.titulacao == "Mestrado" || professor.titulacao == "Doutorado"
                ? styles.superTitulo : styles.normalTitulo}>{professor.titulacao}</td>
            </tr>
          )
        }) // .map mesma coisa do foreach/for em um vetor. Ja a ((promisse)=> {}) é uma promessa que vai voltar algo daquela ação
        }</table>

      {/*
        shift, alt, baixo = copia varios elementos um embaixo do outro 
        alt, cima = move
        alt, seleção = cria varios atributos ao msm tempo
        shift, alt, F = formata
      */}
    </>
  )
}

export default AppViewer