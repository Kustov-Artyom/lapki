import React, { useState } from 'react';
import {
    Panel, PanelHeader, Placeholder, Group, Input, View, Button, Div, List, Cell, Avatar, PanelHeaderBack, Spinner, Search, DropZone, Flex, FormItem, File, FormLayoutGroup,
    Select, CellButton, NativeSelect, DatePicker, ChipsInput, IconButton, ButtonGroup, RadioGroup, Radio, Slider
} from '@vkontakte/vkui';
import { Icon28MusicOutline, Icon28UsersOutline, Icon28UserOutline, Icon56CameraOutline, Icon24Camera, Icon24Document, Icon16Clear } from '@vkontakte/icons'
import PropTypes from 'prop-types';



export const AnimalQuestionary = () => {

    const [activePanel, setActivePanel] = useState('animalQuestionary');

    const [petAge, setPetAge] = useState(2);

    return (
        <Group>
            <Div style={{ textAlign: 'center' }}>
                <FormItem top="Фото питомца">
                    <File before={<Icon24Camera role="presentation" />} size="m">
                        Выбрать фото
                    </File>
                </FormItem>
            </Div>
            <FormLayoutGroup mode="vertical">
                <FormItem htmlFor="name" top="Имя питомца">
                    <Input id="name" />
                </FormItem>
                <FormItem top="Возраст питомца">
                    <Input id="name" />
                </FormItem>
                <FormItem top="Выберите пол питомца" topId="setGender">
                    <RadioGroup mode="horizontal" aria-labelledby="gender">
                        <Radio name="gender" value="m">Мужской</Radio>
                        <Radio name="gender" value="w">Женский</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem htmlFor="vid" top="Вид животного">
                    <Input id="vid" />
                </FormItem>
                <FormItem htmlFor="poroda" top="Порода">
                    <Input id="poroda" />
                </FormItem>
                <FormItem htmlFor="favoriteActivities" top="Любимые занятия">
                    <Input id="favoriteActivities" />
                </FormItem>
                <FormItem htmlFor="description" top="Описание">
                    <Input id="description" />
                </FormItem>
                <Div style={{ textAlign: 'center' }}>
                    <FormItem top="Медицинская карточка">
                        <File before={<Icon24Document role="presentation" />} size="l" mode="secondary" />
                    </FormItem>
                </Div>
            </FormLayoutGroup>
        </Group>
    );
};

<AnimalQuestionary />;