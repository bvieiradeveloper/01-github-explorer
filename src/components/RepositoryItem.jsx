export function RepositoryItem(props){

  const { name, description, html_url: link } = props.repository;

  return (
          <li>
            <strong>{description}</strong>
            <p>{name}</p>
            <a href={link} target='_blank'>{link}</a>
          </li>
  ) 
}