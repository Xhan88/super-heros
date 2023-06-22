import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../Hooks/useForm"
import queryString from 'query-string'
import { getHerosByName } from "../helpers";
import { HeroCard } from "../components/HeroCard";

export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  const { q = ''} = queryString.parse( location.search );
  const heroes = getHerosByName(q)


  const { searchText, onInputChange } = useForm({
    searchText: '' 
  });

  const onSearchSubmit = (event) => {
      event.preventDefault();
      // if ( searchText.trim().length <= 1 ) return;

    navigate(`?q=${ searchText }`);
  }

  return (
    <>
    <h1>Search</h1>
    <hr />

<div className="row">
          <div className="col-5">
            <h4>Searching</h4>
            <hr />

            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text"
                placeholder="Search a Hero"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={ searchText }
                onChange={ onInputChange }
              />

              <button className="btn btn-outline-primary mt-1">
                Search
              </button>


            </form>

          </div>

          <div className="col-7">
            <h4>Result</h4>
            <hr />
          
          {
            ( q === '' )
              ? <div className="alert alert-primary"> Search Hero</div>
              
           : ( heroes.length === 0 ) &&  
           <div className="alert alert-danger">
            there are not <b>{ q }</b>
          </div>
          
          }

          

         

          {
            heroes.map( hero => (
              <HeroCard key={ hero.id } {...hero}/>
            ))
          }
         
        </div>
    </div>
    </>
  )
}
