let firstLetter = 97;
let lastLetter = 97+26;

while ( firstLetter < lastLetter )
{
	process.stdout.write(String.fromCharCode(firstLetter));
	firstLetter++;
}
process.stdout.write('\n');
