export function RepositoryItem(props){

  const {name, description, link} = props.repository;

  return (
          <li>
            <strong>{description}</strong>
            <p>{name}</p>
            <a href="">{link}</a>
          </li>
  ) 
}