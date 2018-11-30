module.exports = function(app, express){
   

     app.use('/ingredienti', require('../resource/ingredienti/'));
     app.use('/ricette', require('../resource/ricette/'));
}