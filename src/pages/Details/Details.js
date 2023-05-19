import { ScrollView, Text, useWindowDimensions} from 'react-native'
import React from 'react'
import { WebView } from 'react-native-webview'
import RenderHTML from 'react-native-render-html'

import styles from './Details.styles'

const Details = ({route}) => {
  const { Content } = route.params;
  const html = Content
  const { width } = useWindowDimensions();
  return (
    <ScrollView style={{ flex: 1 }}>
      <RenderHTML contentWidth={width} source={{ html }} />
    </ScrollView>
  );
}

export default Details