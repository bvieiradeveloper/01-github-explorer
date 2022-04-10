import { RepositoryItem } from "./RepositoryItem"
import '../styles/repositories.scss'
import { useEffect, useState } from "react"
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

  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/{HERE YOU USER}/repos')
    .then(response => response.json())
    .then(data =>setRepositories(data));
  },[])

  console.log(repositories);
  return (
      <section className="repository-list">
        <h1>Lista de repositório</h1>
        <ul>
         {repositories.map(element => {
           return <RepositoryItem key ={element.name} repository= {element}/>
         })}
        </ul>
      </section>
  )
}