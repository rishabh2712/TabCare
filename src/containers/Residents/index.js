import styled from 'styled-components';
import React, { Component } from 'react';
import {connect} from 'react-redux'

import {fetchResidents} from './actions'
import ResidentList from './ResidentList'
import Loading from '../../components/Loading.jsx'

const ResidentContent = styled.div`
    
`

class Residents extends Component {
    constructor(props) {
        super()
    }

    componentDidMount() {
     this.props.fetchResidents()
    }

    render() {
        let {isLoading, error, items} = this.props.residents
        return (
            <ResidentContent>
                {isLoading ? <Loading /> : 
                !isLoading && !items.length ? <div> No records found</div> :
                error ? <div>Something went wrong</div> :
                <ResidentList items={items}/>
                }
            </ResidentContent>
        )
    }
}

const mapStateToProps = state => {
    return {
      residents : state.residents
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
     fetchResidents : () => dispatch(fetchResidents())
    }
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Residents)