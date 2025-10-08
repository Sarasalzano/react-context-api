import { useContext } from "react";
import { BudgetProvider, BudgetContext } from "../contexts/BudgetContext";


export default function Button(){
//prendi lo stato budgetMode e la funzione per aggiornarlo
const {budgetMode, SetBudgetMode} = useContext(BudgetContext);

return(
    // al click, invertiamo il valore di budgetMode
    <button onClick={()=>SetBudgetMode(!budgetMode)}>
        

    </button>
)
}