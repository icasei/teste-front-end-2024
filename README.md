# Instruções

- execute o npm i nas pastas mf_drawer e videos e na raiz do projeto para instalar as dependencias.
- na pasta raiz execute o docker compose ele vai fazer com que toda a implematação da pasta mf_videos seja executado em um container disponibilizado a porta 8081.
- Crie um arquivo .env no arquivo mf_video para que o site funcione.

# Problemas & Observações

- devido alguns problemas, eu optei por criar o docker da pasta mf_videos e consumir usando o index.html que esta na pasta mf_drawer.
- Teste unitario apenas no arquivo videoService.ts.
- Apareceu alguns bug com site como:
  - Terá vezes que o site esta responsivo outras vezes não
  - as vezes salva o video no favoritos outras vezes não
  - o componente de buscar e botão de 🔍 só funciona quando esta na tela de buscar videos

# Conclusão

Minha decisão foi de entregar um MVP sem muita complexidade sem utilizar nenhum BFF devido ao tempo curto, e reconheci que se tivesse implementado o BFF teria me ajudo a resolver/diminuir alguns bugs.
estou a disposição para receber feedback, se possível deixe comentário, não importe de que forma, para que eu posso saber onde errei na minha decisão e como posso melhor
