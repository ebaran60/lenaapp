import { Pressable, Image, Text, View, ScrollView, useWindowDimensions } from 'react-native'
import React from 'react'
import RenderHTML from 'react-native-render-html'

import styles from './CategoryCard.styles'

const CategoryCard = ({banner, title, summary, totalReadingTime, content, onSelect}) => {
  const { width } = useWindowDimensions();
  const html = content;
  return (
    <Pressable style={styles.container} onPress={onSelect}>
        <Image source={{uri: banner}} style={styles.image} />
        <View style={styles.textContainer}>
        <Text style={styles.title}>Title</Text>
        <Text style={styles.content}>{title}</Text>
        <Text style={styles.title}>summary</Text>
        <Text style={styles.content}>{summary}</Text>
        <Text style={styles.content}>totalReadingTime: {totalReadingTime}</Text>
        </View>
    </Pressable>
  )
}

export default CategoryCard