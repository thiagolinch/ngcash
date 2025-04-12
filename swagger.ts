import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Ncash API',
      version: '1.0.0',
      description: 'Documentação interativa da API Ncash',
    },
    servers: [
      {
        url: 'http://localhost:3333',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ bearerAuth: [] }],
  },
  apis: ['./src/swagger/routes.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
