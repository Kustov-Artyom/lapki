import React, { useState } from 'react';
import {
  Panel, PanelHeader, Placeholder, Group, Input, View, Button, Div, List, Cell, Avatar, PanelHeaderBack, Spinner, Search, DropZone, Flex, FormItem, File, FormLayoutGroup,
  Select, CellButton, NativeSelect, DatePicker, ChipsInput, IconButton, ButtonGroup, RadioGroup, Radio
} from '@vkontakte/vkui';
import { Icon28MusicOutline, Icon28UsersOutline, Icon28UserOutline, Icon56CameraOutline, Icon24Camera, Icon24Document, Icon16Clear } from '@vkontakte/icons'
import PropTypes from 'prop-types';
import { Lenta } from '../mainPanels/Lenta';
import { PeopleQuestionary } from '../mainPanels/PeopleQuestionary';
import { AnimalQuestionary } from '../mainPanels/AnimalQuestionary';



export const Home = () => {
  const [showDates, setShowDates] = useState(true);
  const toggleDates = (value) => {
    setShowDates(value);
  };
  const [goalMeeting, setGoalMeeting] = React.useState([
    {
      value: 'friendship',
      label: 'Дружба',
    },
    {
      value: 'walk',
      label: 'Прогулки',
    },
    {
      value: 'relationship',
      label: 'Отношения',
    },
  ]);
  const onChange = (event) => {
    setGoalMeeting(event);
  };
  const ClearButton = ({ onClick, ...restProps }) => {
    return (
      <IconButton hoverMode="opacity" label="Очистить поле" onClick={onClick} {...restProps}>
        <Icon16Clear />
      </IconButton>
    );
  };

  const [activePanel, setActivePanel] = useState('peopleQuestionary');

  return (
    <View activePanel={activePanel}>
      <Panel id="peopleQuestionary">
        <PanelHeader>Создание анкеты</PanelHeader>
        <PeopleQuestionary />
        <Div style={{ textAlign: 'center' }}>
          <ButtonGroup mode="vertical" gap="m" align='center' style={{ minWidth: 328 }}>
            <Button onClick={() => { setActivePanel('animalQuestionary') }} size="l" appearance="positive" stretched>
              Далее
            </Button>
            <Button onClick={() => { setActivePanel('Lenta') }} size="l" appearance="accent" stretched>
              Перейти без заполнения анкеты
            </Button>
          </ButtonGroup>
        </Div>
      </Panel>

      <Panel id="Lenta">
        <PanelHeader>Лента</PanelHeader>
        <Lenta />
        <Div style={{ textAlign: 'center' }}>
          <ButtonGroup mode="vertical" gap="m" align='center' style={{ minWidth: 328 }}>
            <Button onClick={() => { setActivePanel('peopleQuestionary') }} size="l" appearance="positive" stretched>
              Подтвердить
            </Button>
            <Button onClick={() => { setActivePanel('peopleQuestionary') }} size="l" appearance="accent" stretched>
              Перейти далее без заполнения анкеты
            </Button>
          </ButtonGroup>
        </Div>
      </Panel>

      <Panel id='animalQuestionary'>
        <PanelHeader>Анкета питомца</PanelHeader>
        <AnimalQuestionary />
        <Div style={{ textAlign: 'center' }}>
          <ButtonGroup mode="vertical" gap="m" align='center' style={{ minWidth: 328 }}>
            <Button onClick={() => { setActivePanel('Lenta') }} size="l" appearance="positive" stretched>
              Подтвердить
            </Button>
            <Button onClick={() => { setActivePanel('Lenta') }} size="l" appearance="accent" stretched>
              Далее без заполнения анкеты
            </Button>
          </ButtonGroup>
        </Div>
      </Panel>
    </View>
  );
};

<Home />;

Home.propTypes = {
  id: PropTypes.string.isRequired,
};