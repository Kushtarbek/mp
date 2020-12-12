import React from 'react';

export default class FetchRandomUser extends React.Component{
    state ={
        loading: true
    }

componentDidMount(){
    
}


    render(){
        return (
            <div>user...
            {this.state.loading ? <div>loading...</div> : <div>person...</div>}

            </div>
        )
    }
}