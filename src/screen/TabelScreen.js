import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

import {DataTable} from 'react-native-paper';

import {useDispatch, useSelector} from 'react-redux';

import {getLocalData} from '../action/covidAction';

const TabelScreen = () => {

  const[page, setPage] = useState(0)

  const dispatch = useDispatch();

  const {dataCovidLocal} = useSelector(state => {
    return {
      dataCovidLocal: state.covidReducer.dataLocal,
    };
  });

  React.useEffect(() => {
    dispatch(getLocalData());
    console.log(dataCovidLocal.length);
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          backgroundColor: '#f64662',
          alignItems: 'center',
          paddingVertical: 15,
        }}>
        <Text style={styles.title}>LIVE UPDATE</Text>
      </View>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Region</DataTable.Title>
          <DataTable.Title numeric>New Cases</DataTable.Title>
          <DataTable.Title numeric>Total Cases</DataTable.Title>
          <DataTable.Title numeric>Recovered</DataTable.Title>
          <DataTable.Title numeric>Deaths</DataTable.Title>
        </DataTable.Header>
        {
          dataCovidLocal.slice(
            page * 10,
            page * 10 + 10
          )
          .map((item, index) => {
            return(
              <DataTable.Row key={index}>
                <DataTable.Cell>{item.Country}</DataTable.Cell>
                <DataTable.Cell numeric>{item.NewConfirmed}</DataTable.Cell>
                <DataTable.Cell numeric>{item.TotalConfirmed}</DataTable.Cell>
                <DataTable.Cell numeric>{item.TotalRecovered}</DataTable.Cell>
                <DataTable.Cell numeric>{item.TotalDeaths}</DataTable.Cell>
              </DataTable.Row>
            )
          })
        }

        <DataTable.Pagination
        page={page}
        numberOfPages={Math.floor(dataCovidLocal.length / 10)}
        onPageChange={page => setPage(page)}
        label={`${(page*10)+1}-${(page+1) * 10} of ${dataCovidLocal.length}`}
        />


      </DataTable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default TabelScreen;
