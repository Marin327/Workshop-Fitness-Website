import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';

const DietDetails = () => {
  const dietList = [
    {
      name: 'Палео диета',
      description: 'Консумация на храни, които са били на разположение на нашите предци (мясо, риба, плодове, зеленчуци).',
    },
    {
      name: 'Веганска диета',
      description: 'Изключване на всички продукти от животински произход.',
    },
    {
      name: 'Кето диета',
      description: 'Ниско въглехидратна и високомазнена диета, която цели стимулиране на процеса на кетоза в организма.',
    },
    {
      name: 'Медитеранска диета',
      description: 'Богата на зеленчуци, маслиново масло, риба и орехи, тази диета е вдъхновена от храненето в средиземноморските страни.',
    },
    {
      name: 'Аткинс диета',
      description: 'Ниско въглехидратна диета, която акцентира върху консумацията на протеини и мазнини.',
    },
    {
      name: 'Диета за отслабване с детоксикация',
      description: 'Фокусира се на консумацията на храни, които помагат за детоксикацията на организма.',
    },
    {
      name: 'Диета с ниско съдържание на захари',
      description: 'Ограничава въглехидратите с високо съдържание на захари и фокусира върху здравословните алтернативи.',
    },
    {
      name: 'Главоболна диета',
      description: 'Избягване на храни и напитки, които често предизвикват главоболие (например, чоколад, червено вино).',
    },
    {
      name: 'Диета за повишаване на енергията',
      description: 'Консумация на храни, богати на витамини и минерали, за подпомагане на енергийния баланс.',
    },
    {
      name: 'Сериозно вегетарианство',
      description: 'Цялостна вегетарианска диета с акцент върху разнообразните и здравословни растителни продукти.',
    },
    {
      name: 'Диета за кръвната група',
      description: 'Специфична диета, предполагаща, че определени храни са по-подходящи за хора с различни кръвни групи.',
    },
    {
      name: 'Диета за сърдечно-съдовата система',
      description: 'Основана на принципите за поддържане на здравето на сърдечно-съдовата система чрез правилно хранене.',
    },
    {
      name: 'Диета за поддържане на нивата на холестерола',
      description: 'Фокусира се на консумацията на храни, които помагат за контролиране на нивата на холестерола.',
    },
    {
      name: 'Диета за поддържане на здравето на черния дроб',
      description: 'Подпомагаща диета, която помага за здравето на черния дроб и храносмилателната система.',
    },
    {
      name: 'Диета за спортисти и активни хора',
      description: 'Балансирана диета, предназначена за поддържане на енергията и възстановяването след физическо натоварване.',
    },
  ];

  const [selectedDiet, setSelectedDiet] = useState(null);

  const dietAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
  });

  const handleDietSelect = (diet) => {
    setSelectedDiet(selectedDiet === diet ? null : diet);
  };

  return (
    <div>
      <div className="diet-list">
        {dietList.map((diet, index) => (
          <div key={index} onClick={() => handleDietSelect(diet)} className="diet-item">
            {diet.name}
          </div>
        ))}
      </div>
      {selectedDiet && (
        <animated.div style={dietAnimation} className="diet-details-container">
          <h2>{selectedDiet.name}</h2>
          <p>{selectedDiet.description}</p>
          <button onClick={() => handleDietSelect(selectedDiet)}>Затвори</button>
        </animated.div>
      )}
    </div>
  );
}

export default DietDetails;