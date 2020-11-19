import React from 'react';
import {View} from 'native-base';
import MapView from 'react-native-maps';

import styles from './MapContainerStyles';

export const MapContainer = ({region}) =>{
    return (
        <View style={styles.container}>
            <MapView
                provider={MapView.PROVIVER_GOOGLE}
                region={region}
                style={styles.map}
            >
                <MapView.Marker 
                    coordinate={region}
                    pinColor="green"
                />
            </MapView>
        </View>
    )
}

export default MapContainer;