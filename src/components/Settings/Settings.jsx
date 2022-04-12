import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
} from 'react-native';
import {UiIcon, UiText, UiModalElementsButton} from '@ui-kit';
import {width, height} from '@utils/Responsive';

const Setting = props => {
  const [settings, setSettings] = useState([
    {name: 'Внешний вид', iconName: 'colorswatch', isGray: false},
    {name: 'О приложении', iconName: 'informationcircle', isGray: false},
    {name: 'Выйти', iconName: 'logout', isGray: true},
  ]);

  return (
    <SafeAreaView style={styles.app}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.topMenu}>
            <TouchableOpacity
              style={styles.flexElement}
              onPress={() => props.navigation.navigate('Home')}>
              <UiIcon iconName="arrowleft" iconColor="white" />
            </TouchableOpacity>
            <UiText color="white" size={18} width={700}>
              Настройки
            </UiText>
            <View style={styles.flexElement}></View>
          </View>

          <View style={styles.settingsBlock}>
            {settings.map(setting => (
              <UiModalElementsButton
                iconName={setting.iconName}
                iconColor={setting.isGray ? '#8672BB' : 'white'}
                textColor={setting.isGray ? '#8672BB' : 'white'}
                key={setting.iconName}>
                {setting.name}
              </UiModalElementsButton>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  app: {
    backgroundColor: '#2B2146',
    height: '100%',
  },
  container: {
    paddingHorizontal: width(15),
    paddingTop: height(20),
  },
  topMenu: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexElement: {
    flex: 1,
  },
  settingsBlock: {marginTop: height(30)},
});

export default Setting;
