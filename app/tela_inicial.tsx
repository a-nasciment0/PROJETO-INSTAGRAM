
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const stories = [
  { nome: "Seu story", imagem: "https://i.pravatar.cc/150?img=11" },
  { nome: "neymarjr", imagem: "https://i.pravatar.cc/150?img=12" },
  { nome: "cristiano", imagem: "https://i.pravatar.cc/150?img=13" },
  { nome: "anitta", imagem: "https://i.pravatar.cc/150?img=14" },
  { nome: "vinijr", imagem: "https://i.pravatar.cc/150?img=15" },
  { nome: "luccas", imagem: "https://i.pravatar.cc/150?img=16" },
];

const posts = [
  {
    usuario: "neymarjr",
    foto: "https://i.pravatar.cc/150?img=12",
    publicacao: "https://picsum.photos/id/1011/600/600",
    curtidas: "2.450.321",
    legenda: "Vivendo momentos especiais! ⚽",
  },
  {
    usuario: "cristiano",
    foto: "https://i.pravatar.cc/150?img=13",
    publicacao: "https://picsum.photos/id/1015/600/600",
    curtidas: "5.120.456",
    legenda: "Never give up! 💪",
  },
];

export default function TelaInicial() {
  return (
    <View style={styles.container}>

     {/* MENU LATERAL */}
<View style={styles.sidebar}>

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
          source={{ uri: "https://i.pravatar.cc/150?img=11" }}
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
      {/* CONTEÚDO PRINCIPAL */}
      <ScrollView
        style={styles.mainScroll}
        contentContainerStyle={styles.mainContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>

          {/* FEED */}
          <View style={styles.feed}>

            {/* STORIES */}
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

            {/* PUBLICAÇÕES */}
            {posts.map((post, index) => (
              <View style={styles.post} key={index}>

                {/* CABEÇALHO DO POST */}
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

                {/* IMAGEM */}
                <Image
                  source={{ uri: post.publicacao }}
                  style={styles.postImage}
                  resizeMode="cover"
                />

                {/* AÇÕES */}
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

                {/* LEGENDA */}
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

          {/* SUGESTÕES */}
          <View style={styles.suggestions}>

            <View style={styles.profileSuggestion}>
              <Image
                source={{ uri: "https://i.pravatar.cc/150?img=11" }}
                style={styles.suggestionAvatar}
              />

              <View style={{ flex: 1 }}>
                <Text style={styles.username}>seu_usuario</Text>
                <Text style={styles.grayText}>Seu perfil</Text>
              </View>

              <Text style={styles.blueText}>Alternar</Text>
            </View>

            <View style={styles.suggestionTitle}>
              <Text style={styles.grayText}>Sugestões para você</Text>
              <Text style={styles.seeAll}>Ver tudo</Text>
            </View>

            {[
              ["lucas", 20],
              ["gabriel", 21],
              ["pedro", 22],
              ["mariana", 23],
              ["isabela", 24],
            ].map(([nome, numero]) => (
              <View style={styles.suggestionItem} key={nome}>
                <Image
                  source={{
                    uri: `https://i.pravatar.cc/150?img=${numero}`,
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
              © 2026 INSTAGRAM FROM META
            </Text>

          </View>
        </View>
      </ScrollView>
    </View>
  );
}

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