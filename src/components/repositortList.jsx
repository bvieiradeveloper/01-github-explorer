const repositoryName = 'unform'

export function RepositoryList(){
  return (
      <section className="repository-list">
        <h1>Lista de repositório</h1>
        <ul>
          <li>
            <strong>Forms in React</strong>
            <p>{repositoryName}</p>
            <a href="">Acessar repositório</a>
          </li>
          <li>
          <strong>Forms in React</strong>
            <p>unform2</p>
            <a href="">Acessar repositório</a>
          </li>
          <li>
          <strong>Forms in React</strong>
            <p>unform3</p>
            <a href="">Acessar repositório</a>
          </li>
        </ul>
      </section>
  )
}