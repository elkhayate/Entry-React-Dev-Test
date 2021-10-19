import React, { Component, createContext } from 'react';

export const DataContext = createContext();

export default class DataContextProvider extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return(
            <DataContext.Provider value={}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

