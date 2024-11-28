import React, { useState } from 'react';
import { Panel, PanelHeader, Div, Avatar, Group, Button, Tappable, Text } from '@vkontakte/vkui';
import { Icon28LikeOutline } from '@vkontakte/icons';

import Agusha from '../assets/people/forLikes/Agusha.jpg';
import Julya from '../assets/people/forLikes/Julya.jpg';
import Ksenia from '../assets/people/forLikes/Ksenia.jpg';
import Tendo from '../assets/people/forLikes/Tendo.jpg';
import Nikitos from '../assets/people/forLikes/Nikitos.jpg';
import Maria from '../assets/people/forLikes/Maria.jpg';
import Darya from '../assets/people/forLikes/Darya.jpg';

export const Likes = () => {
  const likesData = [
    { id: 1, name: 'Тёмчик 19 лет - понравился ваш профиль', petName: 'Кекс', photoUrl: Tendo },
    { id: 2, name: 'Никитос 19 лет - понравился ваш профиль', petName: 'Берлок', photoUrl: Nikitos },
    { id: 3, name: 'Андрюха 15 лет - понравился ваш профиль', petName: 'Макс', photoUrl: Agusha },
    { id: 4, name: 'Шпулька 19 лет - понравился ваш профиль', petName: 'Барсик', photoUrl: Julya },
    { id: 5, name: 'Мария 20 лет - понравился ваш профиль', petName: 'Том', photoUrl: Maria },
    { id: 6, name: 'Ксюша 19 лет - понравился ваш профиль', petName: 'Джем', photoUrl: Ksenia },
    { id: 7, name: 'Дарья 19 лет - понравился ваш профиль', petName: 'Шапуся', photoUrl: Darya },
  ];

  const [visibleLikes, setVisibleLikes] = useState(4);
  const handleClick = (name) => {
    console.log(`Профиль ${name} был нажат`);
  };

  const loadMoreLikes = () => {
    setVisibleLikes((prev) => Math.min(prev + 3, likesData.length));
  };

  const hideLikes = () => {
    setVisibleLikes(4);
  };

  return (
    <Div>
      <Div style={{ textAlign: 'center', marginBottom: '16px', fontSize: '18px', fontWeight: 'bold' }}>
        Вы понравились :
      </Div>

      <Div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 16px' }}>
        {likesData.slice(0, visibleLikes).map((like) => (
          <Tappable key={like.id} onClick={() => handleClick(like.name)} style={{ width: '100%' }}>
            <Group
              style={{
                marginBottom: '8px',
                padding: '8px 12px',
                borderRadius: '8px',
                backgroundColor: '#f5f5f5',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Avatar size={50} src={like.photoUrl} style={{ marginRight: '12px' }} />
              <Div style={{ flex: 1 }}>
                <Text
                  style={{
                    fontSize: '14px',
                    lineHeight: '20px',
                    color: '#000',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'normal',
                  }}
                >
                  {like.name}
                </Text>
              </Div>
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

      {visibleLikes === likesData.length && (
        <Div style={{ textAlign: 'center' }}>
          <Button size="m" appearance="accent" stretched onClick={hideLikes} style={{marginBottom: '25px'}}>
            Скрыть
          </Button>
        </Div>
      )}
    </Div>
  );
};
