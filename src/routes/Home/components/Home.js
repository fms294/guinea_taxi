import React from 'react';
import { View, Text , StyleSheet } from 'react-native';
import { Container } from "native-base";

import MapContainer from './MapContainer/index';

class Home extends React.Component{

    componentDidMount(){
        this.props.setName();
    }

    render(){
        const region ={
            latitude:3.146642,
            longitude:101.695845,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
        }
       
        return(
            <Container>
                < MapContainer region={region}/>
            </Container>
        );
    }

}


export default Home;