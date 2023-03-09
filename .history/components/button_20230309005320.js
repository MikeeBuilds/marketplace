import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity, Image  } from 'react-native'
import { COLORS, assets, SIZES, FONTS, SHADOWS } from '../constants'



export const CircleButton = ({ imgUrl, handlePress, ...props}) => {
  return (
    <TouchableOpacity 
        style={{
            width: 40,
            height: 40,
            backgroundColor: COLORS.white,
            position: 'absolute',
            borderRadius: SIZES.extraLarge,
            alignItems: 'center',
            justifyContent: 'center',
            ...SHADOWS.light,
            ...props
        }}
        onPress={handlePress}
    >
    
    </TouchableOpacity>
  )
}

export const Rectbutton = () => {
    return (
      <View>
        <Text>Circle</Text>
      </View>
    )
  }

