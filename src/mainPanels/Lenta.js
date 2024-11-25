import React, { useState } from 'react';
import {
  Panel, PanelHeader, Placeholder, Group, Input, View, Button, Div, List, Cell, Avatar, PanelHeaderBack, Spinner, Search, DropZone, Flex, FormItem, File, FormLayoutGroup,
  Select, CellButton, NativeSelect, DatePicker, ChipsInput, IconButton, ButtonGroup, RadioGroup, Radio
} from '@vkontakte/vkui';
import { Icon28MusicOutline, Icon28UsersOutline, Icon28UserOutline, Icon56CameraOutline, Icon24Camera, Icon24Document, Icon16Clear } from '@vkontakte/icons'
import PropTypes from 'prop-types';
import TimoshaImg from '../assets/timosha.png';
import LeftArrow from '../assets/left-arrow.png';
import Chel from '../assets/chel.png';
import Hrestik from '../assets/hrestik.png';
import Lapa from '../assets/lapa.png';



export const Lenta = () => {

  return (
    <Group>
      <Div style={{ border: '1px solid #D9D9D9', width: '332px', height: '544px', padding: '0', margin: 'auto' }}>
        <Placeholder style={{ margin: '0', padding: '0' }}>
          <img src={TimoshaImg} alt='Timosha the Cat' />
        </Placeholder>
        <Div style={{ fontSize: '28px' }}>
          Тимоша, 7 лет
        </Div>
        <Div style={{ fontSize: '16px' }}>
          Сладкий котик джентельменского возраста. Люблю смотреть в окно и кушать. Самый лучший мужчина на свете по мнению Форбс.
        </Div>
      </Div>
      <Div style={{ textAlign: 'center', marginTop: '-25px' }}>
        <Div style={{ marginTop: '15px', fontSize: '12px', color: 'gray' }}>
          Свайп вправо для перехода на анкету человека
        </Div>
        <Div style={{ marginTop: '-25px' }}>
          <img src={LeftArrow} alt='Left arrow' style={{ transform: 'rotate(180deg)' }} />
        </Div>
      </Div>
      <Div style={{ textAlign: 'center' }}>
        <Button>
          <img src={Hrestik} alt='cross' />
        </Button>
        <Button style={{ marginLeft: '30px' }}>
          <img src={Lapa} alt='paw' />
        </Button>
        <Button style={{ marginLeft: '30px' }}>
          <img src={Chel} alt='people' />
        </Button>
      </Div>
      <FormLayoutGroup mode='horizontal' style={{ textAlign: 'center' }}>
        <FormItem style={{ fontSize: '12px', color: 'gray' }}>
          Пропустить
        </FormItem>
        <FormItem style={{ fontSize: '12px', color: 'gray' }}>
          Лайк питомцу
        </FormItem>
        <FormItem style={{ fontSize: '12px', color: 'gray' }}>
          Лайк человеку
        </FormItem>
      </FormLayoutGroup>
    </Group>
  );
};