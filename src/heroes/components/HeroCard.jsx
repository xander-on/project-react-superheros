import { Link } from 'react-router-dom';

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {

    const heroImageUrl = `/assets/heroes/${ id }.jpg`;

    const CharacterByHero = ({ alter_ego, characters }) => 
        ( alter_ego === characters )
            ? <></>
            : <p>{ characters }</p>;
  

    return (
        <div className="animate__animated animate__fadeIn col-lg-6 col-12 my-3">
            <div className="card overflow-hidden">
                <div className="row no-gutters">

                    <div className="col-4 p-0">
                        <img 
                            src       = { heroImageUrl } 
                            className = "card-img" 
                            alt       = { superhero } 
                        />
                    </div>

                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{ superhero }</h5>
                            <p className="card-text">{ alter_ego }</p>

                            <p className="card-text mb-0">
                                <small className="text-muted">{ first_appearance }</small>
                            </p>

                            <Link to={`/hero/${ id }`}>More...</Link>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
}
