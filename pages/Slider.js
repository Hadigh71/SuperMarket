// Slider.js
import React, { useEffect, useState } from 'react';
import { View, Image, StyleSheet, FlatList } from 'react-native';
import GlobalApi from '../Utils/GlobalApi'
import Heading from '../Utils/Heading'

const Slider = () => {
    const [images, setImages] = useState([]);

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
                    <View style={{ marginRight: 20 }}>
                        <Image source={{ uri: item.image.url }}
                            style={styles.sliderImage}
                        />
                    </View>
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
