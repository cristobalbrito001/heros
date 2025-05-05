import { Navigate, useNavigate, useParams } from "react-router";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";

const Hero = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const hero = useMemo(() => getHeroById(id!), [id]);
    const handleNavigateBack = () => {
        return navigate(-1);
        if(hero?.publisher === 'DC Comics'){
           return navigate('/DC');
        }else if(hero?.publisher === 'Marvel Comics'){
           return navigate('/marvel');
        }
      
    }
    if(!hero) return <Navigate to='/'/>;
    return(
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={`/assets/DC/${id}.jpg`}
                    alt={hero.superhero}
                    className="animate__animated animate__shakeY img-thumbnail " 
                />
            </div>
            <div className="col-8 ">
                <h3 className="animate__animated animate__bounce">{hero.superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter ego:</b> {hero.alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {hero.publisher}</li>
                    <li className="list-group-item"><b>First appearance:</b> {hero.first_appearance}</li>
                </ul>


                <h5 className="mt-3">Character</h5>
                <p>{hero.characters}</p>
                <button className="btn btn-outline-primary" onClick={handleNavigateBack}>
                    Back 
                </button>
            </div>
        </div>
    )
}
export{
    Hero
}