import React from 'react';
import {Dimensions, Image} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const barHeightFactor = Dimensions.get('window').height * .2 - 125;
export const statusBarHeight = barHeightFactor > 22 ? barHeightFactor : 22;
const {width, height} = Dimensions.get('window')

export const emailRegEx = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

export const textSizeRender = (size) => {
    let resolution = size / 100
    return resolution * width
}

export function hexToRGB(hex, alpha) {
    var r = parseInt(hex.slice(1, 3), 16),
        g = parseInt(hex.slice(3, 5), 16),
        b = parseInt(hex.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
}

export const darkerHex = (hex, factor, alpha) => {
    let a = 2;
    if (alpha > 0) {
        a = alpha;
    }
    let rgba = hexToRGB(hex, a).replace("rgba(", "").replace(")", "").split(",");
    return `rgba(${Math.round(parseInt(rgba[0]) * factor)},${Math.round(parseInt(rgba[1]) * factor)},${Math.round(parseInt(rgba[2]) * factor)},${rgba[3]})`;
};

export const setDataAsyncStorage = async (name, data) => {
    try {
        await AsyncStorage.setItem(name, JSON.stringify(data));
    } catch (e) {
        console.log(e)
    }
}

export const getDataAsyncStorage = async (name) => {
    try {
        let storage = await AsyncStorage.getItem(name);
        storage = JSON.parse(storage)
        return storage
    } catch (e) {
        console.log(e)
    }
}
export const removeDataAsyncStorage = async (name) => {
    try {
        await AsyncStorage.removeItem(name);
    } catch (e) {
        console.log(e)
    }
}
