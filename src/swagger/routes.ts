/**
 * @openapi
 * /users:
 *   post:
 *     summary: Criação de usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso

 * /users/balance:
 *   get:
 *     summary: Retorna o saldo do usuário
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Retorna o saldo

 * /sessions:
 *   post:
 *     summary: Autenticação do usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - username
 *               - password
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Retorna o token JWT

 * /transactions:
 *   post:
 *     summary: Realiza uma transação (cashout)
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - creditedUserName
 *               - value
 *             properties:
 *               username:
 *                 type: string
 *               value:
 *                 type: number
 *     responses:
 *       200:
 *         description: Transação realizada com sucesso

 * /transactions/statement:
 *   get:
 *     summary: Retorna o extrato do usuário
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de transações

 * /transactions/statement-date:
 *   post:
 *     summary: Filtra o extrato por data e tipo de transação
 *     tags: [Transactions]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - date
 *             properties:
 *               date:
 *                 type: string
 *                 format: date
 *               type:
 *                 type: string
 *                 enum: [cashOut, cashIn]
 *     responses:
 *       200:
 *         description: Lista filtrada de transações
 */
