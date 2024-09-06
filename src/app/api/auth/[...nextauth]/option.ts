import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

export const options = {
  providers: [
    CredentialsProvider({
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Email",
        },
        senha: {
          label: "Senha",
          type: "password",
          placeholder: "Senha",
        },
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        try {
          const response = await axios.post(
            "http://localhost:5000/api/admin/login",
            {
              email: credentials.email,
              senha: credentials.senha,
            }
          );

          const { data } = response;

          if (data && data.success && data.data.token) {
            try {
              const authenticated = await axios.post(
                "http://localhost:5000/api/admin/authenticated",
                {
                  token: data.data.token,
                }
              );

              const dataAuth = authenticated.data;

              if (dataAuth && dataAuth.success && dataAuth.data) {
                return {
                  id: data.data.token,
                  name: dataAuth.data.nome,
                  email: dataAuth.data.email,
                };
              }

              return null;
            } catch (error) {
              console.error("Erro ao autenticar:", error);
              return null;
            }
          }

          return null;
        } catch (error) {
          console.error("Erro ao autenticar:", error);
          return null;
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      if (token?.sub) {
        session.accessToken = token.sub;
      }
      return session;
    },
  },
};
