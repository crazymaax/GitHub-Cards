import {Div, Section} from "./styles"

export const Repos = (repo) => {
    const {created_at, description, name, html_url:repo_html, language} = repo.repo

    const {avatar_url, html_url, login} = repo.repo.owner

    const year = created_at.slice(0,4);
    const month = created_at.slice(5,7);
    const day = created_at.slice(8,10);

    const date = `${day}/${month}/${year}`



    return (

        <Section>
            <div>
                <a href={html_url} target="_blank">
                    <figure>
                        <img src={avatar_url} alt={login} />
                        <figcaption>{login}</figcaption>
                    </figure>
                </a>  
                    
            </div>

            <Div>
                <h4>
                    <a href={repo_html} target="_blank">{name}</a>
                </h4>

                <p>{description}</p>

                <div>
                    <span>Criado em: {date}</span>
                    <span>{language}</span>
                </div>

            </Div>
        </Section>

    )
}