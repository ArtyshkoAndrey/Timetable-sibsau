import React from 'react';
import { View, AsyncStorage } from 'react-native';
import colors from './../constants/Colors'
import CarouselTabel from './../components/Carousel'
import { Header,
  Right,
  Left,
  Icon,
  Container,
  Body,
  Content,
  Button,
  Title,
  Tab,
  Tabs,
  Text } from 'native-base';


let day = false

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor (props) {
    super(props);
    this.state = {
      userGroup: '',
      numWeek: 0,
      slider1ActiveSlide: 1,
      firstSlide: 1,
      day: 10,
      scrollWithoutAnimation: false,
      cardItemsArr: [
        {
          dayOfTheWeek: "Понедельник",
          num: 1,
          subjects: ['Физическая культура',
            'ПРОЕКТИРОВАНИЕ ЧЕЛОВЕКО-МАШИННОГО ИНТЕРФЕЙСА',
            'ИНСТРУМЕНТАРИЙ ПРИНЯТИЯ РЕШЕНИЙ',
            'ПРОЕКТИРОВАНИЕ ЧЕЛОВЕКО-МАШИННОГО ИНТЕРФЕЙСА',
            'ИНСТРУМЕНТАРИЙ ПРИНЯТИЯ РЕШЕНИЙ'
          ]
        },
        {
          dayOfTheWeek: "Вторник",
          num: 2,
          subjects: [
            'ПРОЕКТИРОВАНИЕ ЧЕЛОВЕКО-МАШИННОГО ИНТЕРФЕЙСА',
            'ИНСТРУМЕНТАРИЙ ПРИНЯТИЯ РЕШЕНИЙ'
          ]
        },
        {
          dayOfTheWeek: "Среда",
          num: 3,
          subjects: [
            'РУССКИЙ ЯЗЫК И КУЛЬТУРА РЕЧИ',
            'ФИЗИЧЕСКАЯ КУЛЬТУРА И СПОРТ'
          ]
        },
        {
          dayOfTheWeek: "Четверг",
          num: 4,
          subjects: [
            'ВЫЧИСЛИТЕЛЬНАЯ МАТЕМАТИКА',
            'ОБЪЕКТНО-ОРИЕНТИРОВАННОЕ ПРОГРАММИРОВАНИЕ',
            'МЕТОДЫ МАТЕМАТИЧЕСКОГО МОДЕЛИРОВАНИЯ СЛОЖНЫХ ПРОЦЕССОВ И СИСТЕМ'
          ]
        },
        {
          dayOfTheWeek: "Пятница",
          num: 5,
          subjects: [
            'ОБЪЕКТНО-ОРИЕНТИРОВАННОЕ ПРОГРАММИРОВАНИЕ',
            'МЕТОДЫ МАТЕМАТИЧЕСКОГО МОДЕЛИРОВАНИЯ СЛОЖНЫХ ПРОЦЕССОВ И СИСТЕМ',
            'ОБЪЕКТНО-ОРИЕНТИРОВАННОЕ ПРОГРАММИРОВАНИЕ',
            'МЕТОДЫ МАТЕМАТИЧЕСКОГО МОДЕЛИРОВАНИЯ СЛОЖНЫХ ПРОЦЕССОВ И СИСТЕМ',
            'ФУНКЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ',
            'ФУНКЦИОНАЛЬНОЕ ПРОГРАММИРОВАНИЕ'
          ]
        },
        {
          dayOfTheWeek: "Суббота",
          num: 6,
          subjects: [
            'Правоведение',
            'Функциональное программирование'
          ]
        },
      ]
    };
  }
  componentDidMount = async () =>  {
    await AsyncStorage.getItem('userGroup').then((value) => this.setState({ userGroup: value }))
    setTimeout(() => this.setState({ numWeek: 0, scrollWithoutAnimation: false }), 1);
  }
  render() {
    return (
      <Container style={{flex: 1}}>
        <Header hasTabs style={{ backgroundColor: '#006CB5' }}>
          <Body>
            <Title style={{paddingLeft: 20}}>{'Расписание ' + this.state.userGroup}</Title>
          </Body>
        </Header>
        <Tabs style={{ backgroundColor: '#006CB5' }} locked={true} page={this.state.numWeek} scrollWithoutAnimation={this.state.scrollWithoutAnimation}>
          <Tab  heading="1 неделя">
            <Content>
              <CarouselTabel />
            </Content>
          </Tab>
          <Tab heading="2 неделя">
            <Content>
              <CarouselTabel />
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
