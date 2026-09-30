import { Link } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
export default function App() {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  function entrar() {
    if (!usuario || !senha) {
      Alert.alert("Atenção", "Preencha o usuário e a senha.");
      return;
    }

    Alert.alert("Login", `Bem-vindo, ${usuario}!`);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.content}>

          <Text style={styles.logo}>Instagram</Text>

          <View style={styles.formulario}>

            <TextInput
              style={styles.input}
              placeholder="Telefone, nome de usuário ou email"
              placeholderTextColor="#737373"
              value={usuario}
              onChangeText={setUsuario}
              autoCapitalize="none"
            />

            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#737373"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />

           
            
               <TouchableOpacity 
  style={styles.botaoEntrar} 
  onPress={entrar}
>
  <Text style={styles.textoBotao}>
    <Link href="/tela_inicial">
      Entrar
    </Link>
  </Text>
</TouchableOpacity>
               
              

          </View>

      
          <View style={styles.linhaOu}>
            <View style={styles.linha} />

            <Text style={styles.ou}>
              OU
            </Text>

            <View style={styles.linha} />
          </View>

          <TouchableOpacity>
            <Text style={styles.facebook}>
              ● Entrar com o Facebook
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.esqueci}>
              Esqueceu a senha?
            </Text>
          </TouchableOpacity>


          <View style={styles.cadastro}>

            <Text style={styles.textoCadastro}>
              Não tem uma conta?
            </Text>

            <TouchableOpacity>
              <Text style={styles.cadastre}>
                {" "}Cadastre-se
              </Text>
            </TouchableOpacity>

          </View>

  
          <Text style={styles.download}>
            Obtenha o aplicativo.
          </Text>

     
          <View style={styles.lojas}>

            <TouchableOpacity style={styles.loja}>
              <Text style={styles.textoLoja}>
                Google Play
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.loja}>
              <Text style={styles.textoLoja}>
                Microsoft
              </Text>
            </TouchableOpacity>

          </View>

          <View style={styles.footer}>

            <Text style={styles.footerTexto}>
              Meta • Sobre • Blog • Carreiras • Ajuda • Privacidade
            </Text>

            <Text style={styles.footerTexto}>
              © 2026 Instagram
            </Text>

          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({


  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },


  scrollContent: {
    flexGrow: 1,
    paddingBottom: 30,
  },


  content: {
    width: "100%",
    maxWidth: 350,
    alignSelf: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  
  logo: {
    fontSize: 44,
    fontWeight: "500",
    fontStyle: "italic",
    color: "#262626",
    marginBottom: 35,
  },

  
  formulario: {
    width: "100%",
  },

  input: {
    width: "100%",
    height: 42,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    borderColor: "#dbdbdb",
    borderRadius: 4,
    paddingHorizontal: 10,
    marginBottom: 7,
    fontSize: 12,
    color: "#262626",
  },

  botaoEntrar: {
    width: "100%",
    height: 36,
    backgroundColor: "#0095f6",
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },

  linhaOu: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 25,
  },

  linha: {
    flex: 1,
    height: 1,
    backgroundColor: "#dbdbdb",
  },

  ou: {
    marginHorizontal: 15,
    fontSize: 12,
    fontWeight: "bold",
    color: "#737373",
  },

  facebook: {
    color: "#385185",
    fontSize: 14,
    fontWeight: "bold",
  },

  esqueci: {
    color: "#00376b",
    fontSize: 12,
    marginTop: 20,
  },

  
  cadastro: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: "#dbdbdb",
    backgroundColor: "#fff",
  },

  textoCadastro: {
    fontSize: 14,
    color: "#262626",
  },

  cadastre: {
    color: "#0095f6",
    fontWeight: "bold",
    fontSize: 14,
  },

  download: {
    fontSize: 14,
    marginTop: 25,
    marginBottom: 15,
    color: "#262626",
  },

  lojas: {
    flexDirection: "row",
    gap: 8,
  },

  loja: {
    backgroundColor: "#111",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 6,
  },

  textoLoja: {
    color: "#fff",
    fontSize: 11,
  },

  /* RODAPÉ */
  footer: {
    width: "100%",
    alignItems: "center",
    paddingTop: 40,
    paddingBottom: 20,
  },

  footerTexto: {
    color: "#737373",
    fontSize: 10,
    textAlign: "center",
    marginVertical: 3,
  },

});

