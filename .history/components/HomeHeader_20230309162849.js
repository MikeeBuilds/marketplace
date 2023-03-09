import { View, Text, Image, TextInput } from 'react-native';
import { COLORS, FONTS, SIZES, assets } from '../constants';

const HomeHeader = () => {
  return (
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      <View 
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }} 
        >
          <Image 
            source={assets.logo}
            resizeMode="contain"
            style={{ width: 90, height: 25 }}
          />

          <View style={{ width: 45, height: 45}}>
            <Image
              source={assets.person01}
              resizeMode="contain"
              style={{ width: '100%', height: '100%' }}
            />
            <Image
              source={assets.badge}
              resizeMode="contain"
              style={{ position: 'absolute', width: 15, height: 15, bottom: 0, right: 0 }}
            />

            </View>
        </View>
        <view>
          <TextInput
            placeholder="Search"
            placeholderTextColor={COLORS.white}
            style={{
              backgroundColor: COLORS.primary,
              color: COLORS.white,
              borderRadius: SIZES.radius,
              padding: SIZES.font,
              marginTop: SIZES.font,
              ...FONTS.body3
            }}
          />
        </view>
    </View>
  )
}

export default HomeHeader