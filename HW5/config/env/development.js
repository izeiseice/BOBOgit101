module.exports = {
       mongoUri: 'mongodb://admin:password@localhost/testDB1',
       debug: true,
       sessionSecret: 'dev_secret_key',
       google: {
			clientID: '651136803952-o2td1poo6a121c52f38gvv63vi2b79oc.apps.googleusercontent.com',
			clientSecret: 'kb925XiqDfQh83McsRoKRCsb',
			callbackURL: 'http://localhost:3000/oauth/google/callback'
		}
}
