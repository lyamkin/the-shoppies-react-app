import React, {Component} from 'react';
import Search from './Search';
import Results from './Results';
import Nominations from './Nominations';

class App extends Component {
    state = {
        search: [],
        nominations: [],
        searchTitle: '',
        nominationsLimit: false,
        error: ''
    }
    // Function responsible for call fetchData function. If data is valid the search state array will be updated. 
    // If error
    // The error state will be ubdated 
    changeSearchHandler = (event) => {
        const searchTitle = event.target.value;
        
        // Call function to Fetch data from API
        fetchData(searchTitle).then(data => {
            if(data.Response === "True") {
                this.setState({
                    search: data.Search,
                    searchTitle: searchTitle,
                    error: ''
                });
            } else {
                this.setState({
                    search: [],
                    searchTitle: searchTitle,
                    error: data.Error,
                });
            }
        });
    }
    // Function updates nominations list and nomination limits
    // If there are 5 nominated films the limits will be true, and update is bloked

    nominationsAddHandler = (index) => {
        let { search, nominations, nominationsLimit } = this.state;

        nominationsLimit = nominations.length < 5 ? false : true;

        if(!nominationsLimit) {
            nominations.push(search[index]);
            this.setState({
                nominations: nominations,
            });
        } else {
            this.setState({
                nominationsLimit: nominationsLimit
            });
        }
        
    }
    // Function updates nominations list and nomination limits
    // If there are less then 5 nominated films the limits will be false, and update is unbloked
    
    nominationsDeleteHandler = (index) => {
        let { nominations, nominationsLimit } = this.state;

        nominationsLimit = nominations.length <= 5 ? false : true;

        nominations.splice(index,1);
        this.setState({
            nominations: nominations,
            nominationsLimit: nominationsLimit
        });
    }

    render() {
        return (
            <div className="container pt-4">
                <h1>The Shoppies</h1>
                <div className="row">
                    <Search 
                        changeSearchHandler={this.changeSearchHandler}
                        error={this.state.error}
                    />
                </div>
                <div className="row mt-4">
                    <Results 
                        state={this.state}
                        nominationsAddHandler = {this.nominationsAddHandler} 
                    />
                    <Nominations 
                        state={this.state}
                        nominationsDeleteHandler = {this.nominationsDeleteHandler} 
                    />
                </div>
            </div>
        );
    }
}

// Function connects to API and return Promise

async function fetchData(searchTitle) {
    let url = `http://www.omdbapi.com/?apikey=b1e6176f&type=movie&s=${searchTitle}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data; 
    } catch(error) {
        console.log(error);
    }
}

export default App;