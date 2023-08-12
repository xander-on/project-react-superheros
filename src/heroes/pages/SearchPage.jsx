import { useEffect, useRef }        from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString                  from 'query-string';
import { useForm }                  from '../../hooks/useForm';
import { HeroCard }                 from '../components';
import { getHeroesByName }          from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);
    
    const { q='' } = queryString.parse( location.search );
    const heroes = getHeroesByName(q);

    const showSearch = ( q.length === 0 );
    const showError  = ( q.length > 0 ) && heroes.length === 0;

    const { searchText, onInputChange } = useForm({ searchText: q });

    const onSearchSubmit = (event) => {
        event.preventDefault();
        // if( searchText.trim().length <=1 ) return; 
        navigate(`?q=${ searchText }`);
    }

    return (
        <>
            <h1>Search</h1>
            <hr />

            <div className="row">

                <div className="col-md-4 col-8">
                    <form onSubmit={ onSearchSubmit } className="d-flex">
                        <input 
                            type        ="text" 
                            placeholder ="Search a hero"
                            className   ="form-control"
                            name        ="searchText"
                            autoComplete="off"
                            value       ={ searchText }
                            onChange    ={ onInputChange }
                            ref         ={inputRef}
                        />

                        <button className="btn btn-outline-primary mx-1">
                            Search
                        </button>
                    </form>
                </div>

                <div className="col-md-8 col-12 offset-md">
                    <h4>Results</h4>
                    <hr />

                    <div 
                        className="alert alert-primary animate__animated animate__fadeIn" 
                        style={{ display: showSearch ? '' : 'none' }}>
                        Search a hero
                    </div>

                    <div 
                        className="alert alert-danger animate__animated animate__fadeIn" 
                        style={{ display: showError ? '' : 'none' }}>
                        No hero with <b>{ q }</b> 
                    </div>
                
                    <div className="row">
                        {
                            heroes.map( hero => 
                                <HeroCard key={ hero.id } {...hero} />
                            )
                        }
                    </div>
                
                </div>

            </div>
        </>
    );
}
