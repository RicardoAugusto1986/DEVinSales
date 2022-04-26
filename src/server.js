const express = require('express')
const app = express()
const Sentry = require('@sentry/node')
const Tracing = require('@sentry/tracing')
const PORT = process.env.PORT || 3333
const routes = require('./routes')
require('./database')
const swaggerUI = require('swagger-ui-express')
const swaggerFile = require('./swagger.json')
const Logger = require('./config/logger')
const morgan = require('./config/morgan')
app.use(morgan)
app.use(express.json())
app.use(routes)
require("dotenv").config();

app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile))

app.use(Sentry.Handlers.requestHandler());

app.use(Sentry.Handlers.tracingHandler());

Sentry.init({
    dsn: process.env.DSN_SENTRY,
    integrations: [
      
      new Sentry.Integrations.Http({ tracing: true }),
    
      new Tracing.Integrations.Express({ app }),
    ],
  
   
    tracesSampleRate: 1.0,
  });


app.use(Sentry.Handlers.errorHandler());

app.use(function onError(err, req, res, next) {
    // The error id is attached to `res.sentry` to be returned
    // and optionally displayed to the user for support.
    res.statusCode = 500;
    res.end(res.sentry + "\n");
  });

Logger.info('Aplicação online')
app.listen(PORT, () => console.log(`Executando na porta ${PORT}`)) 
