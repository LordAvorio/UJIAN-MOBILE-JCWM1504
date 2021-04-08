import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';

import {Appbar, Card, Avatar} from 'react-native-paper';


import {getGlobalData} from '../action/covidAction';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {dataCovidGlobal} = useSelector(state => {
    return {
      dataCovidGlobal: state.covidReducer.dataGlobal,
    };
  });

  React.useEffect(() => {
    dispatch(getGlobalData());
  }, []);

  return (
    <View style={styles.container}>
      <Appbar.Header style={{backgroundColor: '#f64662'}}>
        <Appbar.Action icon="menu" onPress={() => navigation.openDrawer()} />
        <Appbar.Content title="Covid-19" style={{alignItems: 'center'}} />
        <Appbar.Action icon="bell" />
      </Appbar.Header>
      <View style={styles.mainHero}>
        <Text style={styles.title}>Coronavirus Live Update</Text>
        <View style={styles.insideHero}>
          <View style={styles.boxInfo}>
            <Text style={styles.titleInside}>Total</Text>
            <Text style={styles.titleInside2}>
              {dataCovidGlobal.TotalConfirmed}
            </Text>
            <Text style={styles.titleInside3}>
              +{dataCovidGlobal.NewConfirmed}
            </Text>
          </View>
          <View style={styles.boxInfo}>
            <Text style={styles.titleInside}>Recovered</Text>
            <Text style={styles.titleInside2}>
              {dataCovidGlobal.TotalRecovered}
            </Text>
            <Text style={styles.titleInside3}>
              +{dataCovidGlobal.NewRecovered}
            </Text>
          </View>
          <View style={styles.boxInfo}>
            <Text style={styles.titleInside}>Deaths</Text>
            <Text style={styles.titleInside2}>
              {dataCovidGlobal.TotalDeaths}
            </Text>
            <Text style={styles.titleInside3}>
              +{dataCovidGlobal.NewDeaths}
            </Text>
          </View>
        </View>
      </View>
      <View style={{margin: '5%'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Health Tips</Text>
      </View>
      <View style={styles.containerHealthTips}>
          <Card>
            <Card.Content>
            <Avatar.Image size={40} source={require('../images/mask.png')} />
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
            <Avatar.Image size={40} source={require('../images/quarantine.png')} />
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
            <Avatar.Image size={40} source={require('../images/soap.png')} />
            </Card.Content>
          </Card>
      </View>
      <View style={styles.containerHealthTips}>
          <Card>
            <Card.Content>
            <Avatar.Image size={40} source={require('../images/social.png')} />
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
            <Avatar.Image size={40} source={require('../images/wash-your-hands.png')} />
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
            <Avatar.Image size={40} source={require('../images/hospital.png')} />
            </Card.Content>
          </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainHero: {
    backgroundColor: '#f64662',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    padding: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
  },
  insideHero: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  boxInfo: {
    backgroundColor: '#133b5c',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  titleInside: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 21,
  },
  titleInside2: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  titleInside3: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 13,
  },
  containerHealthTips: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: '5%'
  },
});

export default HomeScreen;
