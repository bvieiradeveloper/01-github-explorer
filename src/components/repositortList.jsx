import { RepositoryItem } from "./RepositoryItem"
const repositoryName = 'unform'

const repository = [{
  name: 'unform',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
},
{
  name: 'unform2',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
},
{
  name: 'unform3',
  description: 'Forms in React',
  link: 'https://github.com/unform/unform'
}]

export function RepositoryList(){
  return (
      <section className="repository-list">
        <h1>Lista de repositório</h1>
        <ul>
         {repository.map(element => {
           return <RepositoryItem key ={element.name} repository= {element}/>
         })}
        </ul>
      </section>
  )
}