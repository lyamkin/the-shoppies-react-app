import React from 'react';

const results = (props) => {
    const state = {...props.state};

    // Store film's ID in the nominations list. Requered for on/off "Nominate" buttons
    let nominationsListImdbID = state.nominations.map(films => films.imdbID);

    let films = state.search.map((film, index) => {
        return (
            <li className="d-table-row m-4" key={index}>
                <p className="d-table-cell">{film.Title} ({film.Year})</p>
                <button className="d-table-cell btn btn-success" onClick={() => props.nominationsAddHandler(index)} 
                disabled={nominationsListImdbID.find(imdbID => imdbID===film.imdbID) ? true : false }>                   
                Nominate</button>
            </li>
        );
    })

    return (
        <div className="col-md-6">
            <div className="card mt-4">
                <div className="card-body">
                    <p className="lead font-weight-bold">Results for '{state.searchTitle}'</p>
                    <ul className="d-table">
                        {films}
                    </ul>
                </div>
            </div>
        </div>
    );
}


export default results;