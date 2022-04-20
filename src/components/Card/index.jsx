import StyledCard from "./style";

const Card = ({repo}) =>{

    return(
        <StyledCard key={repo.id}>
                    <h2>{repo.name}</h2>
                    <p>{repo.owner.login}</p>

                    {repo.topics?(
                        <>
                        <h4>Topics</h4>
                        <ul>
                        {repo.topics?.map((topic)=><p>{topic}</p>)}
                    </ul>
                    </>
                    ):(<></>)}
                    <a href={repo.clone_url}>Link do Repositorio</a>                  
            
        </StyledCard>
    )
}

export default Card