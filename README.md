# Software House

Bem-vindo ao projeto Software House! Este README irá guiá-lo na configuração e uso do projeto.


## Introdução
Software House é um projeto de conclusão do curso "Desenvolvendo em NodeJS" oferecido pelo TIC em trilhas


## Instalação
Para instalar o projeto, siga estas etapas:

1. Clone o repositório:

2. Navegue até o diretório do projeto:

3. Instale as dependências:
    ```sh
    npm install
    ```

## Uso
Para iniciar o projeto, execute:
```sh
npm start
```
Isso irá lançar a aplicação em `http://localhost:3000`.

## APIS

### Autenticação de Usuário

#### Endpoints

1. **Login**
    - **URL:** `/login`
    - **Método:** `POST`
    - **Descrição:** Autentica um usuário e retorna um token JWT.
    - **Corpo da Requisição:**
        ```json
        {
            "name": "string",
            "password": "string"
        }
        ```
    - **Resposta de Sucesso:**
        ```json
        {
            "token": "string"
        }
        ```
    - **Resposta de Erro:**
        ```json
        {
            "message": "Nome e senha são obrigatórios" | "Senha inválida"
        }
        ```

2. **Criar Usuário**
    - **URL:** `/users`
    - **Método:** `POST`
    - **Descrição:** Cria um novo usuário.
    - **Corpo da Requisição:**
        ```json
        {
            "name": "string",
            "password": "string"
        }
        ```
    - **Resposta de Sucesso:**
        ```json
        {
            "id": "number",
            "name": "string",
            "password": "string"
        }
        ```
    - **Resposta de Erro:**
        ```json
        {
            "message": "Nome e senha são obrigatórios"
        }
        ```


        ### Gerenciamento de Funcionários

        #### Endpoints

        1. **Buscar Todos os Funcionários**
            - **URL:** `/employees`
            - **Método:** `GET`
            - **Descrição:** Retorna uma lista de todos os funcionários.
            - **Resposta de Sucesso:**
                ```json
                [
                    {
                        "id": "number",
                        "name": "string",
                        "position": "string",
                        "salary": "number"
                    }
                ]
                ```
            - **Resposta de Erro:**
                ```json
                {
                    "message": "Erro ao buscar funcionários"
                }
                ```

        2. **Criar Funcionário**
            - **URL:** `/employees`
            - **Método:** `POST`
            - **Descrição:** Cria um novo funcionário.
            - **Corpo da Requisição:**
                ```json
                {
                    "name": "string",
                    "position": "string",
                    "salary": "number"
                }
                ```
            - **Resposta de Sucesso:**
            ```json
            {
                "id": "number",
                "name": "string",
                "position": "string",
                "salary": "number"
            }
            ```
            - **Resposta de Erro:**
            ```json
            {
                "message": "Nome, posição e salário são obrigatórios"
            }
            ```

            3. **Atualizar Funcionário**
                - **URL:** `/employees/{id}`
                - **Método:** `PUT`
                - **Descrição:** Atualiza as informações de um funcionário existente.
                - **Corpo da Requisição:**
                    ```json
                    {
                        "name": "string",
                        "position": "string",
                        "salary": "number"
                    }
                    ```
                - **Resposta de Sucesso:**
                    ```json
                    {
                        "id": "number",
                        "name": "string",
                        "position": "string",
                        "salary": "number"
                    }
                    ```
                - **Resposta de Erro:**
                    ```json
                    {
                        "message": "Erro ao atualizar funcionário"
                    }
                    ```

            4. **Deletar Funcionário**
                - **URL:** `/employees/{id}`
                - **Método:** `DELETE`
                - **Descrição:** Remove um funcionário existente.
                - **Resposta de Sucesso:**
                    ```json
                    {
                        "message": "Funcionário deletado com sucesso"
                    }
                    ```
                - **Resposta de Erro:**
                    ```json
                    {
                        "message": "Erro ao deletar funcionário"
                    }
                    ```