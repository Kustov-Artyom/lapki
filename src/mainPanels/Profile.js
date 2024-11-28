import React, { useState, useEffect, useRef } from 'react';
import {
    Panel, PanelHeader, Placeholder, Group, Input, View, Button, Div, List, Cell, Avatar, PanelHeaderBack, Spinner, Search, DropZone, Flex, FormItem, File, FormLayoutGroup,
    Select, CellButton, NativeSelect, DatePicker, ChipsInput, IconButton, ButtonGroup, RadioGroup, Radio, Gallery, SubnavigationButton, SubnavigationBar, ActionSheet, ActionSheetItem,
    SplitLayout,
    SplitCol
} from '@vkontakte/vkui';
import { Icon28CancelCircleOutline, Icon56UserAddBadgeOutline, Icon28PawOutline, Icon28HandHeartOutline, Icon28DocumentTextOutline } from '@vkontakte/icons'
import PropTypes from 'prop-types';
import DogImg from '../assets/animals/Dog.png';
import MashaImg from '../assets/people/forProfile/Masha.png';

export const Profile = () => {

    const [popout, setPopout] = useState(null);
    const [openedPopoutName, setOpenedPopoutName] = useState(null);

    const openActionSheet = (name, popout) => {
        setPopout(popout);
        setOpenedPopoutName(name);
    };
    const onClose = () => {
        setPopout(null);
        setOpenedPopoutName(null);
    };

    const baseTargetRef = React.useRef(null);

    const openBase = () =>
        openActionSheet(
            'base',
            <ActionSheet onClose={onClose} toggleRef={baseTargetRef}>
                <ActionSheetItem>
                    Файл с мед. информацией
                </ActionSheetItem>
            </ActionSheet>,
        );

    React.useEffect(openBase, []);

    return (
        <Group>
            <Div style={{ display: 'flex', justifyContent: 'center' }}>
                <Gallery
                    slideWidth="100%"
                    bullets="dark"
                    style={{ width: '300px', height: '300px' }}
                >
                    <img src={DogImg} style={{ display: 'block' }} />
                    <img src={MashaImg} style={{ display: 'block' }} />
                </Gallery>
            </Div>
            <Div style={{ margin: '0', padding: '0', fontSize: '11px', color: '#9D9D9D', display: 'flex', justifyContent: 'center' }}>
                Информация про Питомца
            </Div>
            <Div style={{ display: 'flex', justifyContent: 'center', margin: '0', padding: '0' }}>
                <Div style={{ width: '300px', margin: '0', padding: '0' }}>
                    <Div style={{ fontSize: '22px', fontWeight: 'bold', margin: '10px 0 0 10px', padding: '0' }}>
                        Мила, 5 лет
                    </Div>
                    <Div style={{ margin: '10px 0 0 10px', padding: '0', display: 'flex', flexDirection: 'row' }}>
                        <Div style={{ width: '300px', display: 'flex', flexWrap: 'wrap', margin: '0', padding: '0' }}>
                            <Div style={{
                                margin: '0px 5px 5px 0',
                                padding: '7px',
                                fontSize: '12px',
                                backgroundColor: '#5AA2FF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px'
                            }}>
                                Челябинск
                            </Div>
                            <Div style={{
                                margin: '0px 5px 5px 0',
                                padding: '7px',
                                fontSize: '12px',
                                backgroundColor: '#5AA2FF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px'
                            }}>
                                Бигль
                            </Div>
                            <Div style={{
                                margin: '0px 5px 5px 0',
                                padding: '7px',
                                fontSize: '12px',
                                backgroundColor: '#5AA2FF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px'
                            }}>
                                Девочка
                            </Div>
                            <Div style={{
                                margin: '0px 5px 5px 0',
                                padding: '7px',
                                fontSize: '12px',
                                backgroundColor: '#5AA2FF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px'
                            }}>
                                Весы
                            </Div>
                        </Div>
                    </Div>
                    <Div style={{ margin: '10px 0 0 10px', padding: '0', fontSize: '15px' }}>
                        Люблю свою хозяйку, смотреть в окно, гулять по вечернему городу. Ищу себе подружку погулять!
                    </Div>
                    {/* <Div style={{ margin: '0', padding: '0' }}>
                        <SplitLayout popout={popout} style={{ margin: '0', padding: '0' }}>
                            <SplitCol style={{ margin: '0', padding: '0' }}>
                                <CellButton
                                    getRootRef={baseTargetRef}
                                    onClick={openBase}
                                    aria-expanded={'base' === openedPopoutName}
                                    style={{ margin: '0', padding: '0' }}
                                >
                                    <Div style={{ margin: '0', padding: '0' }}>
                                        <Icon28DocumentTextOutline />
                                        Мед. информация
                                    </Div>
                                </CellButton>
                            </SplitCol>
                        </SplitLayout>
                    </Div> */}
                </Div>
            </Div>

            <Div style={{ margin: '20px 0 0 0', padding: '0', fontSize: '11px', color: '#9D9D9D', display: 'flex', justifyContent: 'center' }}>
                Информация про Хозяйку
            </Div>
            <Div style={{ display: 'flex', justifyContent: 'center', margin: '0', padding: '0' }}>
                <Div style={{ width: '300px', margin: '0', padding: '0' }}>
                    <Div style={{ fontSize: '22px', fontWeight: 'bold', margin: '10px 0 0 10px', padding: '0' }}>
                        Мария, 20 лет
                    </Div>
                    <Div style={{ margin: '10px 0 0 10px', padding: '0', display: 'flex', flexDirection: 'row' }}>
                        <Div style={{ width: '300px', display: 'flex', flexWrap: 'wrap', margin: '0', padding: '0' }}>
                            <Div style={{
                                margin: '0px 5px 5px 0',
                                padding: '7px',
                                fontSize: '12px',
                                backgroundColor: '#5AA2FF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px'
                            }}>
                                Челябинск
                            </Div>
                            <Div style={{
                                margin: '0px 5px 5px 0',
                                padding: '7px',
                                fontSize: '12px',
                                backgroundColor: '#5AA2FF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px'
                            }}>
                                Дизайнер
                            </Div>
                            <Div style={{
                                margin: '0px 5px 5px 0',
                                padding: '7px',
                                fontSize: '12px',
                                backgroundColor: '#5AA2FF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px'
                            }}>
                                Рукоделие
                            </Div>
                            <Div style={{
                                margin: '0px 5px 5px 0',
                                padding: '7px',
                                fontSize: '12px',
                                backgroundColor: '#5AA2FF',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '10px'
                            }}>
                                Лев
                            </Div>
                        </Div>
                    </Div>
                    <Div style={{ margin: '10px 0 0 10px', padding: '0 0 30px 0', fontSize: '15px' }}>
                        Люблю пить кофе, смотреть фильмы,  гулять по вечернему парку с собакой. Ищу с кем можно погулять!
                    </Div>
                    {/* <Div style={{ margin: '0', padding: '0' }}>
                        <SplitLayout popout={popout} style={{ margin: '0', padding: '0' }}>
                            <SplitCol style={{ margin: '0', padding: '0' }}>
                                <CellButton
                                    getRootRef={baseTargetRef}
                                    onClick={openBase}
                                    aria-expanded={'base' === openedPopoutName}
                                    style={{ margin: '0', padding: '0' }}
                                >
                                    <Div style={{ margin: '0', padding: '0' }}>
                                        <Icon28DocumentTextOutline />
                                        Мед. информация
                                    </Div>
                                </CellButton>
                            </SplitCol>
                        </SplitLayout>
                    </Div> */}
                </Div>
            </Div>
        </Group>
    );
};
