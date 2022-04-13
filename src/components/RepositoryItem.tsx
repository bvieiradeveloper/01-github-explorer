 interface Repository{
   repository: {
    name: string,
    description: string, 
    html_url: string 
   }
}
export function RepositoryItem(props: Repository){

  const { name, description, html_url: link } = props.repository;

  return (
          <li>
            <strong>{description}</strong>
            <p>{name}</p>
            <a href={link} target='_blank'>{link}</a>
          </li>
  ) 
}