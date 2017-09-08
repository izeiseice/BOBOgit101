<<<<<<< HEAD
import {getGithubProfile} from './api'

getGithubProfile()
.then(response=>response.json())
.catch(e=>console.error('Failed while fetching github user profile'))
.then(response=>console.log('response',response))
=======
function main(){
	for(var i=0;i<1;i++){
		console.log('internal i',i);
	}
	console.log('external i',i);
}
main()
>>>>>>> 47447d90131a3c938557366671dad918ada41d5f
