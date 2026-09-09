import { ActivityIndicator, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, RADIUS } from '../constants/theme';

export default function AppButton({ title, onPress, loading = false, disabled = false }) {
  return (
    <TouchableOpacity
      activeOpacity={0.82}
      style={[styles.button, (disabled || loading) && styles.disabled]}
      onPress={onPress}
      disabled={disabled || loading}
    >
      {loading ? (
        <ActivityIndicator color={COLORS.white} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    minHeight: 56,
    paddingHorizontal: 20,
    borderRadius: RADIUS.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    shadowColor: COLORS.primaryDark,
    shadowOffset: { width: 0, height: 7 },
    shadowOpacity: 0.20,
    shadowRadius: 12,
    elevation: 5,
  },
  disabled: { opacity: 0.58 },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
});
