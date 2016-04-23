/**
 * Created by shu on 11/5/15.
 */
import React from 'react';
import SearchBar from 'react-search-bar';

class Root extends React.Component {

    render() {
        return (
            <div>
                <span>Look up a fish or a distributor/seller</span>
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

export default Root;