import React, { useState } from 'react';
import {
    Panel, PanelHeader, Placeholder, Group, Input, View, Button, Div, List, Cell, Avatar, PanelHeaderBack, Spinner, Search, DropZone, Flex, FormItem, File, FormLayoutGroup,
    Select, CellButton, NativeSelect, DatePicker, ChipsInput, IconButton, ButtonGroup, RadioGroup, Radio, ModalRoot, ModalPage, ModalPageHeader, PanelHeaderClose,
    PanelHeaderButton, Checkbox, SplitLayout, SplitCol, SubnavigationBar, SubnavigationButton
} from '@vkontakte/vkui';
import { Icon28MusicOutline, Icon28UsersOutline, Icon28UserOutline, Icon56CameraOutline, Icon24Camera, Icon24Document, Icon16Clear, Icon24FavoriteOutline, Icon24Filter, Icon24Dismiss } from '@vkontakte/icons'
import PropTypes from 'prop-types';

const FILTERS_STYLE = [
    { value: 'Козерог', label: 'Козерог' },
    { value: 'Овен', label: 'Овен' },
    { value: 'Телец', label: 'Телец' },
    { value: 'Лев', label: 'Лев' },
    { value: 'Весы', label: 'Весы' },
    { value: 'Водолей', label: 'Водолей' },
    { value: 'Рак', label: 'Рак' },
    { value: 'Краб', label: 'Краб' },
    { value: 'Скорпион', label: 'Скорпион' },
    { value: 'Близнецы', label: 'Близнецы' },
    { value: 'Стрелец', label: 'Стрелец' },
    { value: 'Артём', label: 'Артём' },
];

const ClearButtonHobby = ({ onClick, ...restProps }) => {
    return (
        <IconButton hoverMode="opacity" label="Очистить поле" onClick={onClick} {...restProps}>
            <Icon16Clear />
        </IconButton>
    );
};

const ClearButton = ({ onClick, ...restProps }) => {
    return (
        <IconButton hoverMode="opacity" label="Очистить поле" onClick={onClick} {...restProps}>
            <Icon16Clear />
        </IconButton>
    );
};

export const Filters = () => {
    const MODAL_NAME = 'filters';

    const [filtersModalOpened, setFiltersModalOpened] = useState(false);
    const [filterStyles, setFilterStyles] = useState([]);
    const [goalHobby, setHobby] = useState([]);
    const [goalMeeting, setGoalMeeting] = useState([]);

    const [sizeSelected, setSizeSelected] = useState(false);
    const [inStockSelected, setInStockSelected] = useState(false);
    const [highRatingSelected, setHighRatingSelected] = useState(false);

    const [hasLink, setHasLink] = useState(false);  // Добавлено состояние для кнопки внизу
    const buttonLink = hasLink ? '#' : undefined;  // Ссылка на кнопку

    const openModal = () => {
        setFiltersModalOpened(true);
    };

    const closeModal = () => {
        setFiltersModalOpened(false);
    };

    const onChangeFilterStyle = (e) => {
        const { value, checked } = e.currentTarget;
        if (checked) {
            setFilterStyles([...filterStyles, value]);
        } else {
            setFilterStyles(filterStyles.filter((v) => v !== value));
        }
    };

    const applyFilters = () => {
        closeModal();
    };

    const onChangeHobby = (event) => {
        setHobby(event);
    };

    const onChangeGoal = (event) => {
        setGoalMeeting(event);
    };

    return (
        <SplitLayout>
            <SplitCol>

                <Group>
                    <Div style={{ textAlign: 'center' }}>
                        <Search placeholder="Поиск..." />
                    </Div>

                    <FormLayoutGroup mode="vertical">

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

                        <FormItem htmlFor="ageRange" top="Выберите диапазон возраста">
                            <FormLayoutGroup mode="horizontal">
                                <FormItem htmlFor="younger-age" top="От">
                                    <Input id="cyounger-age" placeholder="Минимальный" />
                                </FormItem>
                                <FormItem htmlFor="maximum-age" top="До">
                                    <Input id="maximum-age" placeholder="Максимальный" />
                                </FormItem>
                            </FormLayoutGroup>
                        </FormItem>

                        <FormItem htmlFor="city" top="Город">
                            <Input id="city" placeholder="Введите город" />
                        </FormItem>

                        <FormItem htmlFor="profession" top="Профессия">
                            <Input id="profession" placeholder="Введите профессию" />
                        </FormItem>

                        <FormItem htmlFor="hobby" top="Хобби">
                            <ChipsInput
                                id="hobby" placeholder="Например - Спорт"
                                ClearButton={ClearButtonHobby}
                                allowClearButton
                                value={goalHobby}
                                onChange={onChangeHobby}
                            />
                        </FormItem>

                        <FormItem top="Цель знакомства" style={{ textAlign: 'center' }}>

                            {/* Subnavigation Bar */}
                            <Div style={{ textAlign: 'center', margin: '0', padding: '0', display: 'flex', justifyContent: 'center' }}>
                                <SubnavigationBar>
                                    <SubnavigationButton size="s"
                                        selected={sizeSelected}
                                        onClick={() => setSizeSelected(!sizeSelected)}
                                    >
                                        Дружба
                                    </SubnavigationButton>

                                    <SubnavigationButton size="s"
                                        selected={inStockSelected}
                                        onClick={() => setInStockSelected(!inStockSelected)}
                                    >
                                        Прогулки
                                    </SubnavigationButton>

                                    <SubnavigationButton size="s"
                                        selected={highRatingSelected}
                                        onClick={() => setHighRatingSelected(!highRatingSelected)}
                                    >
                                        Отношения
                                    </SubnavigationButton>
                                </SubnavigationBar>
                            </Div>

                        </FormItem>

                        <Div>
                            <Button size="l" stretched onClick={openModal}>Выбрать по знаку зодиака</Button>
                        </Div>

                        <Div style={{ textAlign: 'center', marginTop: '10px', marginBottom: '40px' }}>
                            <Button
                                href={buttonLink}
                                onClick={() => { }}
                                size="l"
                                stretched
                                style={{
                                    backgroundColor: '#4CAF50', // Зеленый цвет фона
                                    color: '#fff', // Белый цвет текста
                                    border: 'none', // Убирает рамку
                                    boxShadow: 'none', // Убирает тень
                                }}
                            >
                                Применить фильтры ленты
                            </Button>
                        </Div>

                        {/* Modal */}
                        <ModalRoot activeModal={filtersModalOpened ? MODAL_NAME : null} onClose={closeModal}>
                            <ModalPage
                                id={MODAL_NAME}
                                header={<ModalPageHeader>Знаки зодиака</ModalPageHeader>}
                            >
                                <FormLayoutGroup>
                                    <FormItem>
                                        {FILTERS_STYLE.map(({ value, label }) => (
                                            <Checkbox
                                                key={value}
                                                value={value}
                                                checked={filterStyles.includes(value)}
                                                onChange={onChangeFilterStyle}
                                            >
                                                {label}
                                            </Checkbox>
                                        ))}
                                    </FormItem>

                                    <FormItem>
                                        <Button size="l" stretched onClick={applyFilters}>
                                            Применить
                                        </Button>
                                    </FormItem>
                                </FormLayoutGroup>
                            </ModalPage>
                        </ModalRoot>

                    </FormLayoutGroup>
                </Group>
            </SplitCol>
        </SplitLayout>
    );
};

<Filters />;
