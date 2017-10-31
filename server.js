/* setting up express */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

/* setting up port & listen */
const PORT = process.env.PORT || 3001;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* setting static file */
app.use(express.static(path.join(__dirname, 'client/build')));

/* setting up cors */
app.use(cors());

/* setting up logger */
app.use(logger('dev'));

/* setting up body parser */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/* setting routes */
/* ====================== INDEX ROUTE ========= */
/* tweeds API route */
const tweedRoutes = require('./routes/tweedroutes');
app.use('/api/tweeds', tweedRoutes);

/* catch all to point to react entry point */
app.get('/*', function (req, res) {
   res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});
