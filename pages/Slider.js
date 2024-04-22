// Slider.js
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import GlobalApi from '../Utils/GlobalApi'
import Heading from '../Utils/Heading'
import { useNavigation } from '@react-navigation/native';

const Slider = () => {
    const [images, setImages] = useState([]);
    const navigation=useNavigation();

    useEffect(() => {
        GlobalApi.getSliders().then(images => {
            console.log(images);  // Check what the structure looks like
            setImages(images);
        });
    }, []);    

    return (
        <View>
            <Heading text={'Offers For You'} />
            <FlatList
                data={images}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={()=> navigation.navigate('Details', {item:item, showButton:false})}>
                    <View style={{ marginRight: 20, marginTop:20 }}>
                        <Image source={{ uri: item.image.url }}
                            style={styles.sliderImage}
                        />
                    </View>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.image.url} // Ensuring key is unique
            />
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        marginBottom: 10
    },
    sliderImage: {
        width: 270,
        height: 150,
        borderRadius: 30
    }
})

export default Slider;
