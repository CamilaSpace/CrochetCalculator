//Camila Jimenez
//September 10, 2020
// I'm gonna try to make a program that will tell me the crochet pattern I need for a circle here I gooooooooooo

#include <iostream>
#include <string>
#include <cmath>

using namespace std;
int main()

{
	int round;
	
	cout << "What round are you on? \n";
	cin >> round;
	
	cout<<"Round: "<<round;
	
	if (round == 1){

		cout << "\nMake a magic circle and crochet 12 sc into magic circle";
		
		//return 0;
		}else if (round == 2){
		
			cout << "\nCrochet increases into every stitch";
			
			}else if (round == 3){
					
				cout << "\nCrochet increases in every other stitch (sc,Inc, sc, Inc, sc)";
			
			}else if (round == 4){
				
				cout << "\nCrochet increase in first stitch then two single crochet between every stitch. (Inc, sc, sc, inc, sc, sc, Inc)";
				
			}else if (round >= 4)
			
				cout << "\n" << (round -2)/2 +1;
			

	return 0;
	

//	return 0;
}
