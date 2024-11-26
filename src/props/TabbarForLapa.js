import { Div, Group, Tabbar, TabbarItem } from "@vkontakte/vkui";
import {
    Icon28UserCircleOutline, Icon28HomeOutline, Icon28Waves4RightOutline, Icon28BookmarkOutline, Icon28Hearts2Outline, Icon28SlidersOutline
} from "@vkontakte/icons";
import { useState } from "react";

export const TabBarForLapa = ({ activePanel, setActivePanel }) => {
    const [text, setText] = useState("one");

    return (
        <Div>
            <Tabbar style={{ position: "bottom", margin: "0 0", height: "60px" }}>
                <TabbarItem
                    selected={activePanel === 'filters'}
                    onClick={() => setActivePanel('filters')}
                    text="Фильтры"
                >
                    <Icon28SlidersOutline />
                    {/* <Icon28Waves4RightOutline style={{ transform: 'rotate(270deg)' }} /> */}
                </TabbarItem>
                <TabbarItem
                    selected={activePanel === 'likes'}
                    onClick={() => setActivePanel('likes')}
                    text="Симпатии"
                >
                    <Icon28Hearts2Outline />
                </TabbarItem>
                <TabbarItem
                    selected={activePanel === 'Lenta'}
                    onClick={() => setActivePanel('Lenta')}
                    text="Лента"
                >
                    <Icon28HomeOutline />
                </TabbarItem>
                <TabbarItem
                    selected={activePanel === 'favorites'}
                    onClick={() => setActivePanel('favorites')}
                    text="Избранное"
                >
                    <Icon28BookmarkOutline />
                </TabbarItem>
                <TabbarItem
                    selected={activePanel === 'profile'}
                    onClick={() => setActivePanel('profile')}
                    text="Профиль"
                >
                    <Icon28UserCircleOutline />
                </TabbarItem>
            </Tabbar>
        </Div>
    );
};