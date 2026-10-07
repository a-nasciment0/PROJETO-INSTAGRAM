import * as Location from "expo-location";
import React, { useState } from "react";
import {
  Button,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

const stories = [
  { nome: "Seu story", imagem: "https://i.pinimg.com/474x/57/54/4f/57544f26d902645c85b783ba1e9643e1.jpg" },
  { nome: "neymarjr", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_Wg63_MIQ4iGcO32pWpSdth7Q91-j03ygLyF4Piw8kkmJ_W2LvJFGdIO&s=10" },
  { nome: "cristiano", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSggSDV-DTYSQ_JVmS55N-aTNLLu23Qf62Z0PY9zUikPQ&s=10" },
  { nome: "Ana paula", imagem: "https://institucional.ienh.com.br/Files/Froala/638344487209137633139256jpg.jpg" },
  { nome: "vinijr", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRekPzT1aMz6Yp_bKpGMjAjQmohduLdq6A_TdnYV0wodQ&s=10" },
  { nome: "Marcelinho Carioca", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZwrVFebgqnxnhs_LfgerLW8Z1Onvlm7S3zN-NDgxxfNHw9DICzOruRF-S&s=10" },
];

const posts = [
  {
    usuario: "neymarjr",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK_Wg63_MIQ4iGcO32pWpSdth7Q91-j03ygLyF4Piw8kkmJ_W2LvJFGdIO&s=10",
    publicacao: "https://s2-g1.glbimg.com/rya9IIIFPD0pLe5ubPeyxj7Aik0=/4x0:617x684/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/6/z/z04YtNQNyRVFARxTgSHQ/neymar.png",
    curtidas: "2.450.321",
    legenda: "Vota vota e confirma 22 é bolsonaro!",
  },
  {
    usuario: "Flavio Bolsonaro",
    foto: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/Foto_oficial_do_senador_Fl%C3%A1vio_Bolsonaro_%28v._AgSen%29_%283x4%29.jpg/960px-Foto_oficial_do_senador_Fl%C3%A1vio_Bolsonaro_%28v._AgSen%29_%283x4%29.jpg?utm_source=pt.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
    publicacao: "https://cdn.jornalopcao.com.br/assets/2019/03/x80424051_paFlavio-Bolsonaro-com-seu-assessor-Fabricio-Queiroz-simulando-uma-arma-de-fogo.-Foto-Re.jpg.pagespeed.ic_.g8z1-Md7tg-e1552654971121-620x350.jpg",
    curtidas: "5.120.456",
    legenda: "Rumo ao segundo turno! ",
  },
];

export default function TelaInicial() {
const [latitude, setLatitude] = useState<number | null>(null);
const [longitude, setLongitude] = useState<number | null>(null);
const [cep, setCep] =useState("");
const [endereco, setEndereco] = useState<any>(null);
const [erro, setErro] = useState("");
const [carregando, setCarregando] = useState(false); 
async function descobrirLocalizacao() {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      alert("Permissão de localização negada!");
      return;
    }

    const location = await Location.getCurrentPositionAsync({});

    setLatitude(location.coords.latitude);
    setLongitude(location.coords.longitude);
  }
async function buscarCep(){
  setErro("");
  setEndereco(null);

    if(cep.length !== 8){
      setErro("Digite um CEP com 8 digitos.");
      return;
    } 
    setCarregando(true);

    try{
      const resposta= await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      const dados= await resposta.json();

      if(dados.erro){
        setErro("CEP não encontrado.");
        return;
      }
      setEndereco(dados);
      }catch(erro){
      setErro("Não foi possível consultar ao CEP.");
      } finally{
        setCarregando(false);
      }
    }
    

  return (
    <View style={styles.container}>
      <View style={styles.sidebar}>
         <Text >📍 Buscar endereço</Text>

    <Text>Digite um CEP para consultar o endereço:</Text>

    <TextInput
      placeholder="Ex: 93318000"
      keyboardType="numeric"
      value={cep}
      onChangeText={(novoCep) => setCep(novoCep)}
      maxLength={8}
    />

    <Button
      title={carregando ? "Buscando..." : "Buscar CEP"}
      onPress={buscarCep}
      disabled={carregando}
    />

    {erro !== "" && <Text>❌ {erro}</Text>}

    {endereco && (
      <View >
        <Text>📍 Endereço encontrado</Text>

        <Text>CEP: {endereco.cep}</Text>
        <Text>Rua: {endereco.logradouro}</Text>
        <Text>Bairro: {endereco.bairro}</Text>
        <Text>Cidade: {endereco.localidade}</Text>
        <Text>Estado: {endereco.uf}</Text>
      </View>
      
    )}
    


      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.sidebarContent}
      >
        <Text style={styles.logo}>Instagram</Text>

        <View style={styles.menu}>
          {[
            ["⌂", "Página inicial"],
            ["⌕", "Pesquisa"],
            ["◈", "Explorar"],
            ["▷", "Reels"],
            ["✉", "Mensagens"],
            ["♡", "Notificações"],
            ["＋", "Criar"],
          ].map(([icone, nome]) => (
            <TouchableOpacity style={styles.menuItem} key={nome}>
              <Text style={styles.menuIcon}>{icone}</Text>
              <Text style={styles.menuText}>{nome}</Text>
            </TouchableOpacity>
          ))}

          <TouchableOpacity style={styles.menuItem}>
            <Image
              source={{ uri: "https://i.pinimg.com/474x/57/54/4f/57544f26d902645c85b783ba1e9643e1.jpg" }}
              style={styles.menuProfile}
            />
            <Text style={styles.menuText}>Perfil</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.more}>
          <Text style={styles.menuIcon}>☰</Text>
          <Text style={styles.menuText}>Mais</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
      <ScrollView
        style={styles.mainScroll}
        contentContainerStyle={styles.mainContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>

          <View style={styles.feed}>

  
            <View style={styles.stories}>
              {stories.map((story, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.story}
                >
                  <View style={styles.storyBorder}>
                    <Image
                      source={{ uri: story.imagem }}
                      style={styles.storyImage}
                    />
                  </View>
                  <Text style={styles.storyName}>
                    {story.nome}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

          
            {posts.map((post, index) => (
              <View style={styles.post} key={index}>

               
                <View style={styles.postHeader}>
                  <Image
                    source={{ uri: post.foto }}
                    style={styles.postAvatar}
                    
                  />

                  <View style={styles.postUserInfo}>
                    <Text style={styles.username}>
                      {post.usuario}
                    </Text>
                    <Text style={styles.location}>
                      Publicação original
                    </Text>
                  </View>

                  <TouchableOpacity>
                    <Text style={styles.dots}>•••</Text>
                  </TouchableOpacity>
                </View>

                <Image
                  source={{ uri: post.publicacao }}
                  style={styles.postImage}
                  resizeMode="cover"
                />

                <View style={styles.actions}>
                  <View style={styles.actionLeft}>
                    <TouchableOpacity>
                      <Text style={styles.actionIcon}>♡</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Text style={styles.actionIcon}>♧</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                      <Text style={styles.actionIcon}>➤</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity>
                    <Text style={styles.actionIcon}>♧</Text>
                  </TouchableOpacity>
                </View>

               
                <Text style={styles.likes}>
                  Curtido por outras pessoas e mais {post.curtidas} pessoas
                </Text>

                <Text style={styles.caption}>
                  <Text style={styles.username}>
                    {post.usuario}{" "}
                  </Text>
                  {post.legenda}
                </Text>

                <Text style={styles.comments}>
                  Ver todos os comentários
                </Text>

                <View style={styles.commentInput}>
                  <Text style={styles.commentPlaceholder}>
                    Adicione um comentário...
                  </Text>
                  <Text style={styles.commentEmoji}>☺</Text>
                </View>

              </View>
            ))}
          </View>

      
          <View style={styles.suggestions}>

            <View style={styles.profileSuggestion}>
              <Image
                source={{ uri: "https://i.pinimg.com/474x/57/54/4f/57544f26d902645c85b783ba1e9643e1.jpg" }}
                style={styles.suggestionAvatar}
              />

              <View style={{ flex: 1 }}>
                <Text style={styles.username}>user</Text>
                <Text style={styles.grayText}>Seu perfil</Text>
              </View>

              <Text style={styles.blueText}>Alternar</Text>
            </View>

            <View style={styles.suggestionTitle}>
              <Text style={styles.grayText}>Sugestões para você</Text>
              <Text style={styles.seeAll}>Ver tudo</Text>
            </View>

            {[
              ["Renato Portallupi", 20],
              ["Gabriel Ganley", 21],
              ["Augusto Nascimento", 22],
              ["Pelé", 23],
              ["Jair M. Bolsonaro", 24],
            ].map(([nome]) => (
              <View style={styles.suggestionItem} key={nome}>
                <Image
                  source={{
                    uri: `https://i.pinimg.com/474x/57/54/4f/57544f26d902645c85b783ba1e9643e1.jpg`,
                  }}
                  style={styles.suggestionAvatar}
                />

                <View style={{ flex: 1 }}>
                  <Text style={styles.username}>{nome}</Text>
                  <Text style={styles.grayText}>
                    Seguido por amigos
                  </Text>
                </View>

                <Text style={styles.blueText}>Seguir</Text>
              </View>
            ))}

            <Text style={styles.footer}>
              Sobre · Ajuda · Imprensa · API · Carreiras · Privacidade
              {"\n"}Termos · Localizações · Idioma · Meta Verified
            </Text>

            <Text style={styles.copyright}>
              © 2026 INSTAGRAM FROM AUGUSTO
            
            <View style={styles.container}>
      <Text style={styles2.title}>POSTS PERTO DE VOCÊ</Text>

      <Text>Descubra conteúdos próximos da sua localização.</Text>

      <Button title="Usar minha localização" onPress={descobrirLocalizacao} />

      {latitude !== null && (
        <View style={styles2.resultado}>
          <Text>Latitude: {latitude}</Text>

          <Text>Longitude: {longitude}</Text>

          <Button
            title="Ver no mapa"
            onPress={() =>
              Linking.openURL(
                `https://www.google.com/maps?q=${latitude},${longitude}`,
              )
            }
          />
        </View>
      )}
    </View>
            </Text>
              {/* FAZER O BUTTON PARA LOC */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
const styles2 = StyleSheet.create({
  container1: {
    flex: 1,
    padding: 14,
    
    gap: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,

  },

  resultado: {
    padding: 1,
    gap: 20,
  },
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },

sidebar: {
  width: 245,
  height: "100%",
  borderRightWidth: 1,
  borderRightColor: "#dbdbdb",
  paddingHorizontal: 24,
  paddingTop: 35,
  backgroundColor: "#fff",
},
sidebarContent: {
  flexGrow: 1,
  paddingBottom: 20,
},
  logo: {
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#000",
    marginBottom: 5,
  },

  menu: {
    gap: 12,
    marginTop:45,
  },

  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
    gap: 18,
  },

  menuIcon: {
    fontSize: 27,
    color: "#000",
    width: 30,
    textAlign: "center",
  },

  menuText: {
    fontSize: 16,
    color: "#000",
  },

  menuProfile: {
    width: 27,
    height: 27,
    borderRadius: 50,
  },

  more: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    paddingVertical: 15,
  },

  mainScroll: {
    flex: 1,
  },

  mainContent: {
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 25,
  },

  content: {
    width: "100%",
    maxWidth: 950,
    flexDirection: "row",
    justifyContent: "center",
    gap: 65,
  },

  feed: {
    width: 470,
  },

  stories: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 35,
  },

  story: {
    alignItems: "center",
    width: 65,
  },

  storyBorder: {
    width: 62,
    height: 62,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#e1306c",
    padding: 3,
  },

  storyImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },

  storyName: {
    fontSize: 11,
    marginTop: 7,
    color: "#262626",
  },

  post: {
    width: "100%",
    marginBottom: 35,
    borderBottomWidth: 1,
    borderBottomColor: "#dbdbdb",
    paddingBottom: 20,
  },

  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },

  postAvatar: {
    width: 38,
    height: 38,
    borderRadius: 50,
    marginRight: 12,
  },

  postUserInfo: {
    flex: 1,
  },

  username: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#262626",
  },

  location: {
    fontSize: 11,
    color: "#737373",
    marginTop: 3,
  },

  dots: {
    fontSize: 18,
    fontWeight: "bold",
  },

  postImage: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 3,
    backgroundColor: "#efefef",
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 8,
  },

  actionLeft: {
    flexDirection: "row",
    gap: 17,
  },

  actionIcon: {
    fontSize: 27,
    color: "#000",
  },

  likes: {
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 8,
  },

  caption: {
    fontSize: 13,
    marginBottom: 8,
  },

  comments: {
    color: "#737373",
    fontSize: 13,
    marginBottom: 12,
  },

  commentInput: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  commentPlaceholder: {
    color: "#737373",
    fontSize: 12,
  },

  commentEmoji: {
    fontSize: 17,
  },

  suggestions: {
    width: 290,
    paddingTop: 20,
  },

  profileSuggestion: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    gap: 12,
  },

  suggestionAvatar: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },

  grayText: {
    color: "#8e8e8e",
    fontSize: 12,
  },

  blueText: {
    color: "#0095f6",
    fontSize: 12,
    fontWeight: "bold",
  },

  suggestionTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 18,
  },

  seeAll: {
    fontSize: 12,
    fontWeight: "bold",
  },

  suggestionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 16,
  },

  footer: {
    color: "#c7c7c7",
    fontSize: 11,
    lineHeight: 18,
    marginTop: 25,
  },

  copyright: {
    color: "#c7c7c7",
    fontSize: 10,
    marginTop: 18,
  },
});