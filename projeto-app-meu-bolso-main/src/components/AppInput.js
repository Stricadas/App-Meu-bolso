import { StyleSheet, Text, TextInput, View } from 'react-native';
import { COLORS, RADIUS, SPACING } from '../constants/theme';

export default function AppInput({ label, error, ...props }) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={[styles.inputWrapper, error && styles.errorInput]}>
        <TextInput
          style={styles.input}
          {...props}
          placeholderTextColor="#9AA7A2"
        />
      </View>
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: SPACING.md },
  label: {
    color: COLORS.text,
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
    letterSpacing: 0.2,
  },
  inputWrapper: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: RADIUS.md,
    shadowColor: '#10251D',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  input: {
    color: COLORS.text,
    paddingHorizontal: SPACING.md,
    height: 54,
    fontSize: 16,
    fontWeight: '500',
  },
  errorInput: { borderColor: COLORS.danger },
  error: { color: COLORS.danger, fontSize: 12, marginTop: 5 },
});
