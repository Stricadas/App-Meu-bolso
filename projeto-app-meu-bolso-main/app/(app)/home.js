import { StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../../src/constants/theme';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Você está logado!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
  text: { fontSize: 22, fontWeight: '800', color: COLORS.text },
});
