/**
 * Created by shu on 2016-04-22.
 */
import React from 'react';
import SearchBar from 'react-search-bar';

class Search extends React.Component {

    render() {
        return (
            <div>
                <h3>Look up a fish or a distributor/seller</h3>
                <SearchBar
                    autoFocus={true}
                    debounceDelay={1000}
                    placeholder="ex. Yellowfin Tuna"
                    onChange={(input, resolve) => {
                        // get suggestions based on `input`, then pass them to `resolve()`
                    }} />
            </div>
        )
    }

}

export default Search;