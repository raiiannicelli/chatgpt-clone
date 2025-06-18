# chatgpt-clone

Projeto desenvolvido utilizando:
1° Servidor JavaScript + node.js com API openai
2° Interface JavaScript + css 

O servidor foi montado utilizando bibliotecas: express, cors, dotenv e openai.
A interface foi criada inicialmente pelo creat-react-app

O servidor é montado com node.js para futura integração fácil de dispositivos IoT, integrado para requisições de mensagem dinâmica, com responses lado API openai interativas. Ou seja, node.js trabalha para manter o projeto e servidor ligados... Usando configuração da Api, inputPrompt, rota do endereço website e montagem do servidor. Enquanto o serviço openAi é responsável pela interatividade com o usuário e entregar respostas, de acordo com modelo configurado... nesse caso: chatgpt 4o.

Na interface lado cliente tem-se JavaScript com css personalizado, que juntos, constroem os componentes principais (chatMessage e sideMenu), recebe e interage com as requisições cliente e responses openai
