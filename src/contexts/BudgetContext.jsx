import { createContext, useState } from 'react';
//contesto per lo stato del budget
const BudgetContext = createContext();
export default BudgetContext;

//componente BudgetProvider che rende visibile lo stato del budget a tutti i figli
export function BudgetProvider({children}){
    //variabile di stato del budget 
    const [budgetMode, setBudgetMode] = useState(false);
    //oggetto che contiene lo stato del budget e la funzione per modificarlo
    const value = {budgetMode, setBudgetMode};

    //fornisci contesto ai figli
    return (
        <BudgetContext.Provider value = {value}>
        {children}
        </BudgetContext.Provider>
    )
}
