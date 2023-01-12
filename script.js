// complete the given function

function palindrome(str){

	for(const i=0 ; i<=str.length/2; i++)
		{
		let start= str.charAt(i);
	let end = str.charAt(str.length-1-i);
		
			if(start!=end)
			{
				return false;
			}
		}
	return true;	
}
module.exports = palindrome
