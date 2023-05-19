import { SafeAreaView, FlatList, Text } from 'react-native'
import React from 'react'
import Error from '../../components/error'
import Loading from '../../components/loading'
import useFetch from '../../components/hooks/useEffect'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

import styles from './Categories.styles'

const URL = 'https://www.lenasoftware.com/api/v1/en/maestro/1'

const Categories = ({navigation}) => {
    const { data, loading, error } = useFetch(URL)

    if (loading) return <Loading />
    if (error) return <Error />

    const handleBlogSelect = (Content) => navigation.navigate('DetailPage', {Content})

    const renderBlog = ({ item }) => 
    <CategoryCard 
        banner={item.banner}
        title={item.title}
        summary={item.summary}
        totalReadingTime={item.totalReadingTime}
        onSelect={() => handleBlogSelect(item.content)}
    />

    return (
        <SafeAreaView>
            <FlatList 
            data={data.result}
            renderItem={renderBlog}
            keyExtractor={item => item.postId}
            style={styles.container}
            />
        </SafeAreaView>
    )
}

export default Categories