import { useLocation, useNavigate } from "react-router";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroByName } from "../helpers/getHeroByName";

const Search = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    const heros = getHeroByName(q!.toString());


    const{onInputChange,onResetForm,searchText} = useForm({searchText:q!.toString()});
    const handleSummit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if(searchText.trim().length <= 1) return;
        navigate(`?q=${searchText.toLocaleLowerCase().trim()}`);
        onResetForm();
    }
    return (
       <>
        <h1>Search</h1>
        <div className="row">
            <div className="col-5">
                <h4>Busqueda</h4>
                <hr />  
                    <form onSubmit={handleSummit}>
                        <input 
                            type="text"
                            placeholder="Buscar un heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={onInputChange}
                        />
                        <button className="btn btn-outline-primary mt-2">
                            Search
                        </button>
                    </form>
                </div>
            <div className="col-7">
                <h4>result</h4>
                <hr />
                {
                    (q!.length === 0) 
                    ? <div className="alert alert-primary">Search a hero</div> 
                    : (heros.length === 0) 
                        ? <div className="alert alert-danger">Hero not found {q}</div> 
                        : heros.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                }
               
            </div>
        
        </div>
       </>
    )
}
export{
    Search
}