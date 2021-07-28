import React from 'react';
import {Text} from 'react-native';

import Center from './Wrapper/Center';

const CenterText: React.FC<PropsType> = (props: PropsType) => {
  return (
    <Center>
      <Text>{props.text}</Text>
    </Center>
  );
};

type PropsType = {text: string};

export default CenterText;
