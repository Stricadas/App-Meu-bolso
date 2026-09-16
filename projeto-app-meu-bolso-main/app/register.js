import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  ScrollView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

import AppButton from '../src/components/AppButton';
import AppInput from '../src/components/AppInput';
import { COLORS, RADIUS } from '../src/constants/theme';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  async function handleCadastro () {
    if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert('Atenção', 'Preencha todos os campos.');
      return;
    }

    if(password.length<6)
      return Alert.alert('A senha deve conter pelo menos 6 caracteres')

    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }
    Alert.alert('Sucesso', 'Cadastro realizado!');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <StatusBar style="dark" />
      <View style={styles.orbTop} />
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={() => router.back()} style={styles.back} activeOpacity={0.7}>
          <Ionicons name="arrow-back" size={20} color={COLORS.text} />
          <Text style={styles.backText}>Voltar</Text>
        </TouchableOpacity>

        <View style={styles.brandRow}>
          <View style={styles.logo}>
            <Ionicons name="wallet-outline" size={24} color={COLORS.white} />
          </View>
          <Text style={styles.brand}>meu<Text style={styles.brandAccent}>bolso</Text></Text>
        </View>

        <View style={styles.heading}>
          <Text style={styles.title}>Comece sua jornada.</Text>
          <Text style={styles.subtitle}>
            Crie sua conta e dê o primeiro passo para cuidar melhor das suas finanças.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Criar sua conta</Text>
          <Text style={styles.cardHint}>Leva menos de um minuto.</Text>

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
            placeholder="Crie uma senha"
            value={password}
            onChangeText={setPassword}
          />
          <AppInput
            label="Confirmar senha"
            secureTextEntry
            placeholder="Repita sua senha"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <AppButton title="Criar minha conta" loading={loading} onPress={handleCadastro} />
        </View>

        <View style={styles.loginRow}>
          <Text style={styles.loginText}>Já possui uma conta?</Text>
          <TouchableOpacity onPress={() => router.back()} activeOpacity={0.7}>
            <Text style={styles.link}> Entrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  content: { flexGrow: 1, justifyContent: 'center', padding: 24, paddingTop: 42, paddingBottom: 28 },
  orbTop: {
    position: 'absolute', width: 230, height: 230, borderRadius: 115,
    backgroundColor: '#D9F7E9', top: -125, right: -80,
  },
  back: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginBottom: 28 },
  backText: { color: COLORS.text, fontWeight: '700', marginLeft: 7, fontSize: 13 },
  brandRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 28 },
  logo: {
    width: 46, height: 46, borderRadius: 14, backgroundColor: COLORS.primary,
    alignItems: 'center', justifyContent: 'center', marginRight: 10,
    shadowColor: COLORS.primaryDark, shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.22, shadowRadius: 10, elevation: 5,
  },
  brand: {
    fontSize: 27, fontWeight: '900', color: COLORS.text, letterSpacing: -1,
    textShadowColor: 'rgba(20,32,28,0.12)', textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 3,
  },
  brandAccent: { color: COLORS.primary },
  heading: { marginBottom: 22 },
  title: {
    color: COLORS.text, fontSize: 30, lineHeight: 36, fontWeight: '900',
    letterSpacing: -0.7, textShadowColor: 'rgba(20,32,28,0.10)',
    textShadowOffset: { width: 0, height: 2 }, textShadowRadius: 3,
  },
  subtitle: { color: COLORS.muted, fontSize: 14.5, lineHeight: 21, marginTop: 8 },
  card: {
    backgroundColor: COLORS.surface, borderRadius: RADIUS.xl, padding: 22,
    borderWidth: 1, borderColor: 'rgba(221,230,226,0.85)',
    shadowColor: '#18372C', shadowOffset: { width: 0, height: 12 },
    shadowOpacity: 0.09, shadowRadius: 24, elevation: 5,
  },
  cardTitle: { color: COLORS.text, fontSize: 20, fontWeight: '850' },
  cardHint: { color: COLORS.muted, fontSize: 13, marginTop: 4, marginBottom: 20 },
  loginRow: { flexDirection: 'row', justifyContent: 'center', marginTop: 24 },
  loginText: { color: COLORS.muted, fontSize: 13.5 },
  link: { color: COLORS.primaryDark, fontWeight: '800', fontSize: 13.5 },
});
