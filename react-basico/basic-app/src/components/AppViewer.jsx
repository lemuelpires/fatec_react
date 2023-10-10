import styles from './AppViewer.module.css'
//Camada de Compilação de Serviços
const AppViewer =()=> {
  //Retorno no display
const professores = [
  {id:1, nome: "José Armando Vargas", idade: 42, formacao:"Engenharia da Compuitação", titulacao:"Latus Semsu"},
  {id:2, nome: "Maria da Silva", idade: 30, formacao:"Administração de Empresas", titulacao:"Bacharel"},
  {id:3, nome: "Carlos Oliveira", idade: 28, formacao:"Economia", titulacao:"Mestre em Finanças"},
  {id:4, nome: "Ana Luiza Pereira", idade: 35, formacao:"Ciência da Computação", titulacao:"Doutora em Inteligência Artificial"},
  {id:5, nome: "Pedro Henrique Santos", idade: 28, formacao:"Engenharia de Software", titulacao:"Mestre em Desenvolvimento de Software"},
  {id:6, nome: "Carolina Pereira", idade: 30, formacao:"Sistemas de Informação", titulacao:"Bacharel em Tecnologia da Informação"},
  {id:7, nome: "André Silva", idade: 27, formacao:"Engenharia Elétrica", titulacao:"Latus Semsu"},
  {id:8, nome: "Mariana Oliveira", idade: 32, formacao:"Ciências da Computação", titulacao:"Especialista em Redes de Computadores"},
  {id:9, nome: "Ricardo Pereira", idade: 40, formacao:"Engenharia de Software", titulacao:"Mestre em Engenharia de Software"},
  {id:10, nome: "Isabela Santos", idade: 26, formacao:"Engenharia da Computação", titulacao:"Doutora em Inteligência Artificial"}             
]

  return (
    <>
    <h2>Lista de Professores</h2> 
    {
      professores.map((professor)=>{
        return(

          <table>
            <tr>
              <th>Nome:</th>
              <th>Idade:</th>
              <th>Formação</th>
              <th>Titulação</th>
            </tr>
            
            <tr className={professor.id %2==1? styles.linhaCinza: null}key={professor.id}>
              <td>{professor.nome}</td>
              <td>{professor.idade}</td>
              <td>{professor.formacao}</td>
              <td className={professor.titulacao=="mestrado" || professor.titulacao =="doutorado"?
               styles.superTitulo: styles.normalTitulo}>{professor.titulacao}</td>
            </tr>
          </table>




          /*<table key={professor.id}> <strong>Professores</strong>
            <tr className={professor.id %2==0? styles.linhaCinza: null}key={professor.id}> 
            <td><strong>Nome:</strong></td>      
            <td>{professor.nome}</td> 
            </tr>
            <tr> <td><strong>Idade:</strong></td>     
            <td>{professor.idade}</td> 
            </tr>
            <tr> 
              <td><strong>Formação:</strong></td> 
              <td>{professor.formacao}</td> 
             </tr>
            <tr> 
              <td><strong>Titulação:</strong></td> 
              <td>{professor.titulacao}</td> </tr>
          </table>*/



          /*<div key={professor.id}>
              <ul>
                  <li><strong>Nome:</strong> {professor.nome}</li>
                  <li><strong>Idade:</strong> {professor.idade}</li>
                  <li><strong>Formação:</strong>{professor.formacao}</li>
                  <li><strong>Titulação:</strong>{professor.titulacao}</li>
              </ul>
          </div>*/

        )

        
      })
    }
    
     
    </>
  )
}

export default AppViewer