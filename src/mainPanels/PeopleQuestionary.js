import React, { useState } from 'react';
import {
    Panel, PanelHeader, Placeholder, Group, Input, View, Button, Div, List, Cell, Avatar, PanelHeaderBack, Spinner, Search, DropZone, Flex, FormItem, File, FormLayoutGroup,
    Select, CellButton, NativeSelect, DatePicker, ChipsInput, IconButton, ButtonGroup, RadioGroup, Radio
} from '@vkontakte/vkui';
import { Icon28MusicOutline, Icon28UsersOutline, Icon28UserOutline, Icon56CameraOutline, Icon24Camera, Icon24Document, Icon16Clear } from '@vkontakte/icons'
import PropTypes from 'prop-types';
import { Lenta } from '../mainPanels/Lenta';



export const PeopleQuestionary = () => {
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
        <Group>
            <Div style={{ textAlign: 'center' }}>
                <FormItem top="Загрузите ваше фото">
                    <File before={<Icon24Camera role="presentation" />} size="m">
                        Открыть галерею
                    </File>
                </FormItem>
            </Div>
            <FormLayoutGroup mode="vertical">
                <FormItem htmlFor="name" top="Имя">
                    <Input id="name" />
                </FormItem>
                <FormItem top="Выберите пол" topId="size">
                    <RadioGroup mode="horizontal" aria-labelledby="size">
                        <Radio name="size" value="sm">
                            Мужской
                        </Radio>
                        <Radio name="size" value="lxl">
                            Женский
                        </Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem top="Дата рождения">
                    <DatePicker
                        min={{ day: 1, month: 1, year: 1920 }}
                        max={{ day: 1, month: 1, year: 2020 }}
                        onDateChange={(value) => {
                            console.log(value);
                        }}
                        dayPlaceholder="ДД"
                        monthPlaceholder="ММММ"
                        yearPlaceholder="ГГГГ"
                    />
                </FormItem>
                <FormItem htmlFor="city" top="Город">
                    <Input id="city" />
                </FormItem>
                <FormItem htmlFor="profession" top="Профессия">
                    <Input id="profession" />
                </FormItem>
                <FormItem htmlFor="hobby" top="Хобби">
                    <Input id="hobby" />
                </FormItem>
                <FormItem htmlFor="color" top="Цель знакомства">
                    <ChipsInput
                        id="color"
                        ClearButton={ClearButton}
                        allowClearButton
                        value={goalMeeting}
                        onChange={onChange}
                    />
                </FormItem>
                <FormItem htmlFor="aboutMyself" top="О себе:">
                    <Input id="aboutMyself" />
                </FormItem>
            </FormLayoutGroup>
        </Group>
    );
};

<PeopleQuestionary />;