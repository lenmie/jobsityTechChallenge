import React from 'react';
import { FlatList, ScrollView } from 'react-native';
import {
  LabelContainer,
  Subtitle,
  TextContainer,
  Title,
} from './DetailScreenSummary.styled';
import { Show } from '../../../models/show.interface';
import Label from '../../components/Label/Label';
import { cleanTextFromTags } from '../../../utils/utils';
import { fontSizes } from '../../../constants/fontSizes';
import { colors } from '../../../constants/colors';

interface Props {
  show: Show;
}

export default function DetailScreenSummary({ show }: Props) {
  return (
    <ScrollView>
      <TextContainer mx={20}>
        <Title
          numberOfLines={2}
          fontSize={fontSizes.big}
          color={colors.primaryWhite}
          fontFamily="Roboto-LightItalic">
          Summary
        </Title>
        <Subtitle
          mt={10}
          fontSize={fontSizes.medium}
          color={colors.primaryWhite}
          fontFamily="Roboto">
          {cleanTextFromTags(show.summary)}
        </Subtitle>
        {!!show.schedule.days.length && (
          <>
            <Subtitle
              mt={10}
              fontSize={fontSizes.medium}
              color={colors.primaryWhite}
              fontFamily="Roboto">
              Airing on
            </Subtitle>
            <LabelContainer flexDirection="row" my={2}>
              <FlatList
                data={show.schedule.days}
                keyExtractor={day => day}
                renderItem={({ item }) => <Label key={item} name={item} />}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </LabelContainer>
            <Subtitle
              fontSize={fontSizes.medium}
              color={colors.primaryWhite}
              fontFamily="Roboto-LightItalic">
              {`at ${show.schedule.time}hs`}
            </Subtitle>
          </>
        )}
      </TextContainer>
    </ScrollView>
  );
}
