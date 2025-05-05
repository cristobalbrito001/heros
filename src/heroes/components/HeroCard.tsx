import { Link } from "react-router-dom";

const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
    }: {
    id: string;
    superhero: string;
    publisher: string;
    alter_ego: string;
    first_appearance: string;
    characters: string;
}) => { 
    return(
        <>
         <div className="col animate__animated animate__fadeInRight">
            <div className="card h-100">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={`/assets/DC/${id}.jpg`} className="card-img" alt={superhero} />
                        
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) && <p className="text-muted">{characters}</p>
                            }
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${ id }`}>
                                <button className="btn btn-outline-primary"> mas Info</button>
                            </Link>
                        </div>
                    </div>
                </div>
                
            </div>
         </div>
        </>
    )
}

export{
    HeroCard
}