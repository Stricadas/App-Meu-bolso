import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import AppButton from '../src/components/AppButton';
import AppInput from '../src/components/AppInput';
import { COLORS, RADIUS } from '../src/constants/theme';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading] = useState(false);
  const router = useRouter();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="dark" />
      <View style={styles.orbTop} />
      <View style={styles.orbBottom} />

      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.brandRow}>
          <View style={styles.logo}>
            <Ionicons name="wallet-outline" size={25} color={COLORS.white} />
          </View>
          <Text style={styles.brand}>meu<Text style={styles.brandAccent}>bolso</Text></Text>
        </View>

        <View style={styles.heading}>
          <Text style={styles.title}>Bem-vindo de volta.</Text>
          <Text style={styles.subtitle}>
            Organize seu dinheiro com mais clareza e tranquilidade.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Entrar na sua conta</Text>
          <Text style={styles.cardHint}>Acesse seu controle financeiro.</Text>

          <View style={styles.form}>
            <AppInput
              label="E-mail"
              placeholder="seu@email.com"
              autoCapitalize="none"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
            <AppInput
              label="Senha"
              secureTextEntry
              placeholder="Digite sua senha"
              value={password}
              onChangeText={setPassword}
            />
          </View>

          <TouchableOpacity activeOpacity={0.7} style={styles.forgot}>
            <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>

          <AppButton title="Entrar" loading={loading} />
        </View>

        <View style={styles.signupRow}>
          <Text style={styles.signupText}>Ainda não tem uma conta?</Text>
          <TouchableOpacity onPress={() => router.push('/register')} activeOpacity={0.7}>
            <Text style={styles.link}> Criar conta</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>Seu dinheiro. Seu controle. Seu futuro.</Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { flexGrow: 1, justifyContent: 'center', padding: 24, paddingTop: 54, paddingBottom: 28 },
  orbTop: {
    position: 'absolute', width: 230, height: 230, borderRadius: 115,
    backgroundColor: '#D9F7E9', top: -125, right: -80,
  },
  orbBottom: {
    position: 'absolute', width: 170, height: 170, borderRadius: 85,
    backgroundColor: '#E8F6F0', bottom: -80, left: -85,
  },
  brandRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 34 },
  logo: {
    width: 48, height: 48, borderRadius: 15, backgroundColor: COLORS.primary,
    alignItems: 'center', justifyContent: 'center', marginRight: 10,
    shadowColor: COLORS.primaryDark, shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.22, shadowRadius: 10, elevation: 5,
  },
  brand: {
    fontSize: 28, fontWeight: '900', color: COLORS.text, letterSpacing: -1.1,
    textShadowColor: 'rgba(20,32,28,0.12)', textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 3,
  },
  brandAccent: { color: COLORS.primary },
  heading: { marginBottom: 22 },
  title: {
    color: COLORS.text, fontSize: 31, lineHeight: 37, fontWeight: '900',
    letterSpacing: -0.8, textShadowColor: 'rgba(20,32,28,0.10)',
    textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 3,
  },
  subtitle: { color: COLORS.muted, fontSize: 15, lineHeight: 22, marginTop: 8, maxWidth: 340 },
  card: {
    backgroundColor: COLORS.surface, borderRadius: RADIUS.xl, padding: 22,
    borderWidth: 1, borderColor: 'rgba(221,230,226,0.85)',
    shadowColor: '#18372C', shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.09, shadowRadius: 24, elevation: 5,
  },
  cardTitle: { color: COLORS.text, fontSize: 20, fontWeight: '850' },
  cardHint: { color: COLORS.muted, fontSize: 13, marginTop: 4, marginBottom: 20 },
  form: { marginTop: 2 },
  forgot: { alignSelf: 'flex-end', marginTop: -2, marginBottom: 8 },
  forgotText: { color: COLORS.primaryDark, fontSize: 12.5, fontWeight: '700' },
  signupRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  signupText: { color: COLORS.muted, fontSize: 13.5 },
  link: { color: COLORS.primaryDark, fontWeight: '800', fontSize: 13.5 },
  footer: { color: '#94A29D', textAlign: 'center', fontSize: 11.5, marginTop: 30, letterSpacing: 0.3 },
});
