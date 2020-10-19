import React from 'react';
import axios from 'axios';

function SearchV2 (props) {
    return (
        <div id= "searchWrapper">     
            <label className="search-label" htmlFor="search-input" >
                <input 
                    type="text" 
                    //value={query}
                    name="query"
                    id= "search-input" 
                    placeholder="Search..."
                    //onChange={this.handleOnIputChange}
                />
                <i className="fa fa-search search-icon" aria-hidden="true"></i>
            </label> 

            {/* Error Message */}
            {/* {message && <p className="message">{ message }</p>} */}

            {/* Results */}
            { /*this.renderSearchResults()*/ }
            
        </div> 
    )
}

class Search extends React.Component {

    constructor (props) {
        super (props);

        this.state = {
            query: '',
            results: {},
            loading: false,
            message: ''
        };

        this.cancel = '';
        
    }

    fetchSearchResult = ( updatedPageNo = '', query) => {

        const pageNumber = updatedPageNo ? `&page=${updatedPageNo}` : '';
        const searchUrl = `http://api.airvisual.com/v2/cities?state=california&country=USA&key=93e7f28f-1f6b-4286-95cc-1fa2ea89b482&q=${query}${pageNumber}`;

        if( this.cancel) {
            this.cancel.cancel();
        }

        this.cancel = axios.CancelToken.source();

        axios.get( searchUrl, {
            cancelToken: this.cancel.token
        })
            .then(res => {
                //console.warn(res);
                const resultNotFoundMsg = ! res.data.data.length ? 'There are no more search results. Please try new search' : '';

                this.setState({
                    results: res.data.data,
                    message: resultNotFoundMsg,
                    loading: false
                })
                
            })
            .catch( error => {
                if( axios.isCancel(error) || error ){
                    this.setState({
                        loading: false,
                        message: 'Failed to fetch the data. Please check network.'
                    })
                }
            })
    };

    handleOnIputChange = ( event ) => {
        const query = event.target.value;
         if( ! query ) {
             this.setState({query, results: {}, message: ''});
         } else {
            this.setState({ query: query, loading: true, message:''}, () => {
                this.fetchSearchResult( 1, query );
            });
         }
        
    };

    renderSearchResults =  () => {
        const { results } = this.state;


        if( Object.keys( results ).length && results.length ){
            return (

                
                <div className="result-container">
                    { results.map( result => {
                        return(
                            <a key={ result.city } href={ result.city } className="">
                                <h6 className="resultItem">{ result.city }</h6>
                                
                                {/* <a className="image" href="{ result.forecasts }" alt={result.country}>{ result.forecasts }</a> */}
                            </a>             
                        )
                    })}

                </div>)
        }
    };

    render() {
        const { query } = this.state;
        return (
            <div id= "searchWrapper">     
                <label className="search-label" htmlFor="search-input" >
                    <input 
                        type="text" 
                        value={query}
                        name="query"
                        id= "search-input" 
                        placeholder="Search..."
                        onChange={this.handleOnIputChange}
                    />
                    <i className="fa fa-search search-icon" aria-hidden="true"></i>
                </label> 

                {/* Error Message */}
                {/* {message && <p className="message">{ message }</p>} */}

                {/* Results */}
                { this.renderSearchResults() }
                
            </div> 
        )
    }

}

export default SearchV2;