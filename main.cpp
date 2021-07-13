#include <iostream>

using namespace std;

int resta(int num1, int num2) {
    return num1 - num2;
}
int suma(int num1, int num2) {
    return num1 + num2;
}

int main() {

    int num1;
    int num2; 
    cout << "--------- Linkmaster calC++ ---------\n";
    cout << "1. Sumar\n";
    cout << "2. Restar\n";
    cout << "\nDigita el primer numero de la suma >> ";

    int opcion;

    cin >> opcion;
    
    if (opcion == 1) {
        
        cout << "\nDigita el primero numero de la suma >> "; 
        cin >> num1;
        cout << "\nDigita el segundo numero de la suma >> "; 
        cin >> num2;

        cout << suma(num1, num2) << "\n";

    }   
    else if (opcion == 2) {
        cout << "\nDigita el primero numero de la resta >> "; cin >> num1;
        cout << "\nDigita el segundo numero de la resta >> "; cin >> num2;

        cout << resta(num1, num2) << "\n";

    }
    else {
        cout << "Numero no valido\n";
    }

}