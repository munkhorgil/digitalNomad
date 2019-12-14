import React from 'react';
import {ScrollView, View, Text, Image} from 'react-native';

import List from '../../common/components/List';
import Card from '../../common/components/Card';
import {Section, Title, SubSection, SubTitle} from '../styles';

const data = [
  {
    title: 'Title Text',
    thumbnail: 'http://shangrilacentreub.mn/media/shangrila/content/Mall/Brand%20info/Caffe_Bene/Caffe_Bene_Sign_I26Affb.jpg',
    id: 'item1',
  },
  {
    title: 'Title Text',
    thumbnail: 'http://shangrilacentreub.mn/media/shangrila/content/Mall/Brand%20info/Caffe_Bene/Caffe_Bene_Sign_I26Affb.jpg',
    id: 'item2',
  },
  {
    title: 'Title Text',
    thumbnail: 'http://shangrilacentreub.mn/media/shangrila/content/Mall/Brand%20info/Caffe_Bene/Caffe_Bene_Sign_I26Affb.jpg',
    id: 'item3',
  },
  {
    title: 'Title Text',
    thumbnail: 'http://shangrilacentreub.mn/media/shangrila/content/Mall/Brand%20info/Caffe_Bene/Caffe_Bene_Sign_I26Affb.jpg',
    id: 'item4',
  },
  {
    title: 'Title Text',
    thumbnail: 'http://shangrilacentreub.mn/media/shangrila/content/Mall/Brand%20info/Caffe_Bene/Caffe_Bene_Sign_I26Affb.jpg',
    id: 'item5',
  },
];

class ExploreScreen extends React.Component<any, any> {
  renderItem({item}) {
    return (
      <Card image={item.thumbnail}>
        <Text>{item.title}</Text>
      </Card>
    );
  }

  renderList(title: string, data: any) {
    return (
      <Section>
        <SubSection>
          <Title>{title}</Title>
          <SubTitle>See all</SubTitle>
        </SubSection>
        <List
          data={data}
          renderItem={this.renderItem}
          horizontal={true}
          keyExtractor={item => item.id}
        />
      </Section>
    );
  }

  renderAccomodations() {
    return this.renderList('Where to stay', data);
  }

  renderPlaces() {
    return this.renderList('Where to work', data);
  }

  renderExperiences() {
    return this.renderList('Where to experience', data);
  }

  render() {
    return (
      <ScrollView>
        {this.renderPlaces()}
        {this.renderAccomodations()}
        {this.renderExperiences()}
      </ScrollView>
    );
  }
}

export default ExploreScreen;
