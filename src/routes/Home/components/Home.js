import React from 'react';
import { View, Text , StyleSheet } from 'react-native';

class Home extends React.Component{

    componentDidMount(){
        this.props.setName();
    }

    render(){
        return(
            <View style={styles.container}>
                <Text>Hello {this.props.name}</Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container :{
        flex:1,
        justifyContent:"center", 
        alignContent:"center",
        margin: 150,

    }
})


export default Home;