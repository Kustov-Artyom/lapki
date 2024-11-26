import React, { useState } from 'react';
import {
  Panel, PanelHeader, Placeholder, Group, Input, View, Button, Div, List, Cell, Avatar, PanelHeaderBack, Spinner, Search, DropZone, Flex, FormItem, File, FormLayoutGroup,
  Select, CellButton, NativeSelect, DatePicker, ChipsInput, IconButton, ButtonGroup, RadioGroup, Radio
} from '@vkontakte/vkui';
import { Icon28CancelCircleOutline, Icon56UserAddBadgeOutline, Icon28PawOutline, Icon28HandHeartOutline } from '@vkontakte/icons'
import PropTypes from 'prop-types';
import TimoshaImg from '../assets/animals/timosha.png';
import LeftArrow from '../assets/icons/left-arrow.png';



export const Lenta = () => {

  return (
    <Group>
      <Div style={{ border: '1px solid #D9D9D9', width: '300px', height: '450px', padding: '0', margin: 'auto' }}>
        <Placeholder style={{ margin: '0', padding: '0' }}>
          <img src={TimoshaImg} alt='Timosha the Cat' style={{ width: '300px', height: '300px' }} />
        </Placeholder>
        <Div style={{ fontSize: '22px', fontWeight: 'bold' }}>
          Тимоша, 7 лет
        </Div>
        <Div style={{ fontSize: '14px', marginTop: '0', paddingTop: '0' }}>
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
      <Div style={{ display: 'flex', justifyContent: 'center', marginTop: '-20px', padding: '0' }}>
        <Div style={{ display: 'flex', justifyContent: 'space-between', width: '285px' }}>
          <a>
            <Icon28CancelCircleOutline style={{ width: '50px', height: '50px' }} />
          </a>
          <a>
            <Icon28PawOutline style={{ width: '50px', height: '50px' }} />
          </a>
          <a>
            <Icon28HandHeartOutline style={{ width: '50px', height: '50px' }} />
            {/* <Icon56UserAddBadgeOutline style={{ width: '50px', height: '50px' }} /> */}
          </a>
        </Div>
      </Div>
      <Div style={{ display: 'flex', justifyContent: 'center', margin: '-20px 0 0 0', padding: '0' }}>
        <Div style={{ display: 'flex', justifyContent: 'space-between', width: '320px', margin: '0', padding: '0' }}>
          <Div style={{ fontSize: '10px', color: 'gray', marginRight: '10px' }}>
            Пропустить
          </Div>
          <Div style={{ fontSize: '10px', color: 'gray' }}>
            Лайк питомцу
          </Div>
          <Div style={{ fontSize: '10px', color: 'gray' }}>
            Лайк человеку
          </Div>
        </Div>
      </Div>
    </Group>
  );
};