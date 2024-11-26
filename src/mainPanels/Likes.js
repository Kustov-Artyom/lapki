import React, { useState } from 'react';
import { Panel, PanelHeader, Div, Avatar, Group, Button, Tappable, Text } from '@vkontakte/vkui';
import { Icon28LikeOutline } from '@vkontakte/icons';

import Agusha from '../assets/people/Agusha.jpg';
import Julya from '../assets/people/Julya.jpg';
import Ksenia from '../assets/people/Ksenia.jpg';
import Tendo from '../assets/people/Tendo.jpg';
import Nikitos from '../assets/people/Nikitos.jpg';
import Maria from '../assets/people/Maria.jpg';
import Darya from '../assets/people/Darya.jpg';

export const Likes = () => {
  const likesData = [
    { id: 1, name: 'Шпулька 19 лет - понравился ваш профиль', petName: 'Барсик', photoUrl: Julya },
    { id: 2, name: 'Мария 20 лет - понравился ваш профиль', petName: 'Том', photoUrl: Maria },
    { id: 3, name: 'Агуша 15 лет - понравился ваш профиль', petName: 'Макс', photoUrl: Agusha },
    { id: 4, name: 'Ксюша 19 лет - понравился ваш профиль', petName: 'Джем', photoUrl: Ksenia },
    { id: 5, name: 'Тёмчик 19 лет - понравился ваш профиль', petName: 'Кекс', photoUrl: Tendo },
    { id: 6, name: 'Никитос 19 лет - понравился ваш профиль', petName: 'Берлок', photoUrl: Nikitos },
    { id: 7, name: 'Дарья 19 лет - понравился ваш профиль', petName: 'Шапуся', photoUrl: Darya },
  ];

  const [visibleLikes, setVisibleLikes] = useState(4);
  const handleClick = (name) => {
    console.log(`Профиль ${name} был нажат`);
  };

  const loadMoreLikes = () => {
    setVisibleLikes((prev) => Math.min(prev + 3, likesData.length));
  };

  return (
    <Div>
      <Div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 16px' }}>
        {likesData.slice(0, visibleLikes).map((like) => (
          <Tappable key={like.id} onClick={() => handleClick(like.name)} style={{ width: '100%' }}>
            <Group style={{ marginBottom: '8px', padding: '8px 12px', borderRadius: '8px', backgroundColor: '#f5f5f5' }}>
              <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <Avatar size={50} src={like.photoUrl} style={{ marginRight: '12px' }} />
                <Div style={{ flex: 1, fontSize: '14px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  <Text>{like.name}</Text>
                </Div>
              </div>
            </Group>
          </Tappable>
        ))}
      </Div>
      {visibleLikes < likesData.length && (
        <Div style={{ textAlign: 'center' }}>
          <Button size="m" appearance="accent" stretched before={<Icon28LikeOutline />} onClick={loadMoreLikes}>
            Показать больше
          </Button>
        </Div>
      )}
    </Div>
  );
};
