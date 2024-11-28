import React, { useState, useEffect } from 'react';
import {
  Panel, PanelHeader, Placeholder, Group, Input, View, Button, Div, List, Cell, Avatar, PanelHeaderBack, Spinner, Search, DropZone, Flex, FormItem, File, FormLayoutGroup,
  Select, CellButton, NativeSelect, DatePicker, ChipsInput, IconButton, ButtonGroup, RadioGroup, Radio, Gallery, Snackbar, OnboardingTooltip
} from '@vkontakte/vkui';
import { Icon28CancelCircleOutline, Icon56UserAddBadgeOutline, Icon28PawOutline, Icon28HandHeartOutline, Icon28CheckCircleOutline } from '@vkontakte/icons'
import PropTypes from 'prop-types';
import TimoshaImg from '../assets/animals/timosha.png';
import YulyaImg from '../assets/people/forLenta/Yulya.png';



export const Lenta = () => {

  const [snackbar, setSnackbar] = React.useState(null);
  const [text, setText] = React.useState('');

  const openSuccess = () => {
    if (snackbar) return;
    setSnackbar(
      <Snackbar
        onClose={() => setSnackbar(null)}
        before={<Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)" />}
      >
        Профиль успешно открыт
      </Snackbar>,
    );
  };


  // const [tooltipVisible1, setTooltipVisible1] = useState(false);
  // const [tooltipVisible2, setTooltipVisible2] = useState(false);

  // useEffect(() => {
  //   const hasSeenTooltip1 = localStorage.getItem('hasSeenTooltip1');

  //   if (!hasSeenTooltip1) {
  //     setTooltipVisible1(true);
  //     localStorage.setItem('hasSeenTooltip', 'false');
  //   }
  // }, []);

  // useEffect(() => {
  //   const hasSeenTooltip2 = localStorage.getItem('hasSeenTooltip2');

  //   if (!hasSeenTooltip2) {
  //     setTooltipVisible2(true);
  //     localStorage.setItem('hasSeenTooltip2', 'false');
  //   }
  // }, []);

  const [tooltipVisible1, setTooltipVisible1] = useState(true);
  const [tooltipVisible2, setTooltipVisible2] = useState(false);
  const [tooltip3, setTooltip3] = useState(false);

  return (
    <Group>
      <OnboardingTooltip
        text="Чтобы посмотреть информацию про владельца свайпните вправо!"
        shown={tooltip3}
        onClose={() => setTooltip3(false)}
        offsetByMainAxis={4}
        offsetByCrossAxis={10}
      >
        <Div style={{ border: '1px solid #D9D9D9', width: '300px', height: '450px', padding: '0', margin: 'auto' }}>
          <Gallery slideWidth="100%" style={{ margin: '0', padding: '0' }}>
            <Div style={{ margin: '0', padding: '0' }}>
              <Placeholder style={{ margin: '0', padding: '0' }}>
                <OnboardingTooltip
                  text="Нажав на фотографию можно перейти на Профиль владельца!"
                  shown={tooltipVisible1}
                  onClose={() => {
                    setTooltipVisible1(null)
                    setTooltipVisible2(true)
                  }}
                  offsetByMainAxis={8}
                  offsetByCrossAxis={10}
                >
                  <a onClick={openSuccess} style={{ cursor: 'pointer', margin: '0', padding: '0' }}>
                    <img src={TimoshaImg} alt='Timosha the Cat' style={{ width: '300px', height: '300px' }} />
                  </a>
                </OnboardingTooltip>
              </Placeholder>
              <Div style={{ fontSize: '22px', fontWeight: 'bold' }}>
                <OnboardingTooltip
                  text="Также нажав на надпись вы перейдете в Профиль хозяина!"
                  shown={tooltipVisible2}
                  onClose={() => {
                    setTooltipVisible2(false)
                    setTooltip3(true)
                  }}
                  offsetByMainAxis={8}
                  offsetByCrossAxis={10}
                >
                  <a onClick={openSuccess} style={{ cursor: 'pointer', margin: '0', padding: '0' }}>
                    Тимоша, 7 лет
                  </a>
                </OnboardingTooltip>
              </Div>
              <Div style={{ fontSize: '14px', marginTop: '0', paddingTop: '0' }}>
                Сладкий котик джентельменского возраста. Люблю смотреть в окно и кушать. Самый лучший мужчина на свете по мнению Форбс.
              </Div>
            </Div>
            <Div style={{ margin: '0', padding: '0' }}>
              <Placeholder style={{ margin: '0', padding: '0' }}>
                <a onClick={openSuccess} style={{ cursor: 'pointer', margin: '0', padding: '0' }}>
                  <img src={YulyaImg} alt='Yulya' style={{ width: '300px', height: '300px' }} />
                </a>
              </Placeholder>
              <Div style={{ fontSize: '22px', fontWeight: 'bold' }}>
                <a onClick={openSuccess} style={{ cursor: 'pointer', margin: '0', padding: '0' }}>
                  Юля, 19 лет
                </a>
              </Div>
              <Div style={{ fontSize: '14px', marginTop: '0', paddingTop: '0' }}>
                Счастливая обладательница двух сладких котиков: Тимоша и Тиша! Тимоша толстопопый! А Тиша беленький! Люблю их очень сильно, ищу единомышленников
              </Div>
            </Div>
          </Gallery>
        </Div>
      </OnboardingTooltip>
      <Div style={{ display: 'flex', justifyContent: 'center', padding: '0' }}>
        <Div style={{ display: 'flex', justifyContent: 'space-between', width: '285px' }}>
          <a style={{ cursor: 'pointer' }}>
            <Icon28CancelCircleOutline style={{ width: '50px', height: '50px' }} />
          </a>
          <a style={{ cursor: 'pointer' }}>
            <Icon28PawOutline style={{ width: '50px', height: '50px' }} />
          </a>
          <a style={{ cursor: 'pointer' }}>
            <Icon28HandHeartOutline style={{ width: '50px', height: '50px' }} />
          </a>
        </Div>
      </Div>
      <Div style={{ display: 'flex', justifyContent: 'center', margin: '-20px 0 0 0', padding: '0' }}>
        <Div style={{ display: 'flex', justifyContent: 'space-between', width: '320px', margin: '0', padding: '0' }}>
          <Div style={{ fontSize: '10px', color: 'gray', marginRight: '10px', cursor: 'default' }}>
            Пропустить
          </Div>
          <Div style={{ fontSize: '10px', color: 'gray', cursor: 'default' }}>
            Лайк питомцу
          </Div>
          <Div style={{ fontSize: '10px', color: 'gray', cursor: 'default' }}>
            Лайк человеку
          </Div>
        </Div>
      </Div>

      {
        text && (
          <Group>
            <Div>{text}</Div>
          </Group>
        )
      }
      {snackbar}
    </Group>


  );
};